import { useEffect, useRef, useState } from "react";

// ─── Matrix math ─────────────────────────────────────────────────────────────

type M3 = number[][];

const I3 = (): M3 => [[1,0,0],[0,1,0],[0,0,1]];

function mul(a: M3, b: M3): M3 {
  const r: M3 = [[0,0,0],[0,0,0],[0,0,0]];
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      for (let k = 0; k < 3; k++) r[i][j] += a[i][k] * b[k][j];
  return r;
}

function applyM(m: M3, v: [number, number, number]): [number, number, number] {
  return [
    Math.round(m[0][0]*v[0] + m[0][1]*v[1] + m[0][2]*v[2]),
    Math.round(m[1][0]*v[0] + m[1][1]*v[1] + m[1][2]*v[2]),
    Math.round(m[2][0]*v[0] + m[2][1]*v[1] + m[2][2]*v[2]),
  ];
}

/**
 * Convert row-major 3×3 rotation matrix → CSS matrix3d (column-major 4×4).
 *
 * CSS matrix3d(a,b,c,d, e,f,g,h, i,j,k,l, m,n,o,p)
 * is stored column-by-column, so:
 *   col0 = [a,b,c,d]  col1 = [e,f,g,h]  col2 = [i,j,k,l]  col3 = [m,n,o,p]
 */
function toCSS(m: M3): string {
  return (
    `matrix3d(` +
    `${m[0][0]},${m[1][0]},${m[2][0]},0,` +
    `${m[0][1]},${m[1][1]},${m[2][1]},0,` +
    `${m[0][2]},${m[1][2]},${m[2][2]},0,` +
    `0,0,0,1)`
  );
}

// ─── CSS-matched rotation matrices ───────────────────────────────────────────
// Each matrix describes how (x,y,z) transforms under the matching CSS rotate.
// CSS uses right-hand convention with Y pointing down.
//
//  rotateY(+90): (x,y,z) → ( z, y, -x)   matrix3d == [[0,0,1],[0,1,0],[-1,0,0]]
//  rotateY(-90): (x,y,z) → (-z, y,  x)   matrix3d == [[0,0,-1],[0,1,0],[1,0,0]]
//  rotateX(+90): (x,y,z) → ( x,-z,  y)   matrix3d == [[1,0,0],[0,0,-1],[0,1,0]]
//  rotateX(-90): (x,y,z) → ( x, z, -y)   matrix3d == [[1,0,0],[0,0,1],[0,-1,0]]
//  rotateZ(+90): (x,y,z) → (-y, x,  z)   matrix3d == [[0,-1,0],[1,0,0],[0,0,1]]
//  rotateZ(-90): (x,y,z) → ( y,-x,  z)   matrix3d == [[0,1,0],[-1,0,0],[0,0,1]]

const ROTS: Record<string, M3> = {
  "y+": [[ 0, 0, 1], [0, 1, 0], [-1, 0,  0]],
  "y-": [[ 0, 0,-1], [0, 1, 0], [ 1, 0,  0]],
  "x+": [[ 1, 0, 0], [0, 0,-1], [ 0, 1,  0]],
  "x-": [[ 1, 0, 0], [0, 0, 1], [ 0,-1,  0]],
  "z+": [[ 0,-1, 0], [1, 0, 0], [ 0, 0,  1]],
  "z-": [[ 0, 1, 0], [-1,0, 0], [ 0, 0,  1]],
};

// ─── Types ───────────────────────────────────────────────────────────────────

type Cubie = {
  id: number;
  /** Initial grid position — determines sticker colours (never changes) */
  ix: number; iy: number; iz: number;
  /** Current grid position — updated after each turn */
  x: number; y: number; z: number;
  /** Cumulative orientation matrix */
  m: M3;
};

type Turn = { axis: "x"|"y"|"z"; layer: -1|0|1; dir: 1|-1 };

// ─── Cube geometry constants ──────────────────────────────────────────────────

const UNIT   = 40;   // px between cubie centres
const CUBIE  = 40;   // px — cubie size (= UNIT so faces share their edges)
const FACE_Z = CUBIE / 2;  // translateZ for each face

const FACE_TFORMS: Record<string, string> = {
  front:  `rotateY(0deg) translateZ(${FACE_Z}px)`,
  back:   `rotateY(180deg) translateZ(${FACE_Z}px)`,
  right:  `rotateY(90deg) translateZ(${FACE_Z}px)`,
  left:   `rotateY(-90deg) translateZ(${FACE_Z}px)`,
  top:    `rotateX(90deg) translateZ(${FACE_Z}px)`,
  bottom: `rotateX(-90deg) translateZ(${FACE_Z}px)`,
};

// In CSS 3D: Y+ = DOWN, so iy=-1 is the visual top.
function stickerColor(c: Cubie, face: string): string {
  const dark = "#0a0a10";
  switch (face) {
    case "front":  return c.iz ===  1 ? "#ff5cc8" : dark;
    case "back":   return c.iz === -1 ? "#7c5cff" : dark;
    case "right":  return c.ix ===  1 ? "#c4f34b" : dark;
    case "left":   return c.ix === -1 ? "#0ea5e9" : dark;
    case "top":    return c.iy === -1 ? "#f0f0f0" : dark;
    case "bottom": return c.iy ===  1 ? "#f59e0b" : dark;
    default:       return dark;
  }
}

function initCubies(): Cubie[] {
  const list: Cubie[] = [];
  let id = 0;
  for (let ix = -1; ix <= 1; ix++)
    for (let iy = -1; iy <= 1; iy++)
      for (let iz = -1; iz <= 1; iz++)
        list.push({ id: id++, ix, iy, iz, x: ix, y: iy, z: iz, m: I3() });
  return list;
}

// ─── Component ───────────────────────────────────────────────────────────────

interface RubiksCubeProps {
  /** Outer container size in px (cube itself is ~120px) */
  containerSize?: number;
  /** Tailwind/CSS class that drives the global spin animation */
  spinClass?: string;
}

export function RubiksCube({ containerSize = 200, spinClass = "animate-cube-spin" }: RubiksCubeProps) {
  const [cubies, setCubies] = useState<Cubie[]>(initCubies);
  const [turn,   setTurn]   = useState<Turn | null>(null);
  const [angle,  setAngle]  = useState(0);

  const mounted   = useRef(false);
  const animating = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const ts: ReturnType<typeof setTimeout>[] = [];

    function doTurn() {
      if (!mounted.current || animating.current) return;
      const axes: ("x"|"y"|"z")[] = ["x","y","z"];
      const axis  = axes[Math.floor(Math.random() * 3)];
      const layer = ([-1, 0, 1] as const)[Math.floor(Math.random() * 3)];
      const dir   = (Math.random() > 0.5 ? 1 : -1) as 1|-1;

      animating.current = true;
      setTurn({ axis, layer, dir });
      setAngle(0);

      // Tiny delay so the browser sees the initial angle=0 state and can
      // transition from it to the target angle.
      ts.push(setTimeout(() => { if (mounted.current) setAngle(dir * 90); }, 40));

      // After the CSS transition completes, commit the new cubie state.
      ts.push(setTimeout(() => {
        if (!mounted.current) return;
        const key = `${axis}${dir > 0 ? "+" : "-"}`;
        const rot = ROTS[key];
        setCubies(prev => prev.map(c => {
          const inLayer =
            (axis === "x" && c.x === layer) ||
            (axis === "y" && c.y === layer) ||
            (axis === "z" && c.z === layer);
          if (!inLayer) return c;
          const [nx, ny, nz] = applyM(rot, [c.x, c.y, c.z]);
          return { ...c, x: nx, y: ny, z: nz, m: mul(rot, c.m) };
        }));
        setTurn(null);
        setAngle(0);
        animating.current = false;
        ts.push(setTimeout(doTurn, 550));
      }, 580));
    }

    ts.push(setTimeout(doTurn, 400));
    return () => {
      mounted.current = false;
      ts.forEach(clearTimeout);
    };
  }, []);

  const HALF = CUBIE / 2;

  return (
    <div
      style={{
        width:  containerSize + "px",
        height: containerSize + "px",
        perspective: "700px",
        position: "relative",
      }}
    >
      {/* The scene div sits at centre; all cubies are positioned relative to it */}
      <div
        className={spinClass}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 0,
          height: 0,
          transformStyle: "preserve-3d",
        }}
      >
        {cubies.map(c => {
          const inActive =
            turn !== null && (
              (turn.axis === "x" && c.x === turn.layer) ||
              (turn.axis === "y" && c.y === turn.layer) ||
              (turn.axis === "z" && c.z === turn.layer)
            );

          // Layer-turn animation: rotate around the world origin (scene centre)
          // then translate to the cubie's current grid position, then apply
          // the cubie's accumulated orientation.
          const layerRot  = inActive ? `rotate${turn!.axis.toUpperCase()}(${angle}deg) ` : "";
          const translate = `translate3d(${c.x * UNIT}px,${c.y * UNIT}px,${c.z * UNIT}px)`;
          const orient    = toCSS(c.m);
          const transform = `${layerRot}${translate} ${orient}`;

          // Only enable transition on cubies that are currently being turned
          // AND only once the target angle has been set (angle !== 0).
          const transition = (inActive && angle !== 0)
            ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none";

          return (
            <div
              key={c.id}
              style={{
                position: "absolute",
                // Offset by -half so the cubie is centred on the scene origin before translation
                left: -HALF + "px",
                top:  -HALF + "px",
                width:  CUBIE + "px",
                height: CUBIE + "px",
                transformStyle: "preserve-3d",
                transform,
                transition,
              }}
            >
              {Object.entries(FACE_TFORMS).map(([face, faceT]) => (
                <div
                  key={face}
                  style={{
                    position:        "absolute",
                    width:           CUBIE + "px",
                    height:          CUBIE + "px",
                    backgroundColor: stickerColor(c, face),
                    transform:       faceT,
                    // 2 px border gives the black gap between stickers
                    border:          "2px solid #07070b",
                    boxSizing:       "border-box",
                    borderRadius:    "3px",
                    backfaceVisibility: "hidden",
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
