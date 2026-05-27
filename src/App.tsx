import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RubiksCube } from "./components/RubiksCube";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 8;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(onDone, 500);
      }
      setProgress(Math.floor(p));
    }, 120);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-[#07070b]"
    >
      <div className="flex flex-col items-center gap-8">
        {/* 3D solving Rubik's Cube */}
        <RubiksCube containerSize={160} spinClass="animate-cube-spin" />

        {/* Progress counter */}
        <div className="text-center">
          <div className="font-display text-6xl font-bold tabular-nums text-white">
            {String(progress).padStart(3, "0")}
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
            Loading experience
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="grain relative min-h-screen bg-[#07070b] font-display text-white">
      <AnimatePresence mode="wait">
        {loading && <Loader onDone={() => setLoading(false)} key="loader" />}
      </AnimatePresence>

      <CustomCursor />

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
        </motion.div>
      )}
    </div>
  );
}
