import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [variant, setVariant] = useState<"default" | "hover" | "text">("default");
  const [label, setLabel] = useState<string>("");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverEl = target.closest("[data-cursor]");
      if (hoverEl) {
        const type = hoverEl.getAttribute("data-cursor");
        if (type === "text") setVariant("text");
        else setVariant("hover");
        setLabel(hoverEl.getAttribute("data-cursor-label") || "");
      } else {
        setVariant("default");
        setLabel("");
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY]);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null;
  }

  const size = variant === "hover" ? 64 : variant === "text" ? 88 : 12;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[200] rounded-full mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: size,
            height: size,
            backgroundColor:
              variant === "hover" ? "#c4f34b" : variant === "text" ? "#ffffff" : "#ffffff",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="rounded-full"
          style={{ marginLeft: -size / 2, marginTop: -size / 2 }}
        />
      </motion.div>
      {label && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[201] text-xs font-medium text-black"
          style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        >
          {label}
        </motion.div>
      )}
    </>
  );
}
