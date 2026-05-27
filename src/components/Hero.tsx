import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const firstName = ["J", "O", "S", "H", "U", "A"];
  const lastName = ["E", "M", "M", "A", "N", "U", "E", "L"];

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 md:px-12"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#7c5cff] opacity-30 blur-[120px]" />
        <div
          className="animate-blob absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-[#c4f34b] opacity-20 blur-[120px]"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="animate-blob absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-[#ff5cc8] opacity-15 blur-[120px]"
          style={{ animationDelay: "8s" }}
        />
      </div>

      {/* Grid */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Status badge & Meta pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 flex flex-wrap items-center gap-3"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c4f34b] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c4f34b]" />
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/70">
              Open to freelance
            </span>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-wider text-white/60">
            Business Student, 2nd Year
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-wider text-white/60">
            South India
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-wider text-white/60">
            18 Years Old
          </span>
        </motion.div>

        {/* Massive name */}
        <div className="overflow-hidden">
          <h1
            data-cursor="text"
            className="font-display text-[clamp(4rem,15vw,14rem)] font-bold leading-[0.85] tracking-tighter text-white"
          >
            <div className="flex flex-wrap">
              {firstName.map((ch, i) => (
                <motion.span
                  key={`f-${i}`}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.1 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap gradient-text">
              {lastName.map((ch, i) => (
                <motion.span
                  key={`l-${i}`}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.35 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              ))}
            </div>
          </h1>
        </div>

        {/* Description row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 grid gap-8 md:grid-cols-12"
        >
          <div className="md:col-span-5 md:col-start-7">
            <h2 className="text-xl font-semibold mb-4 text-[#c4f34b]">
              Video Editor & Creative Explorer
            </h2>
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              I don't just edit videos — I show up fully, every time, from{" "}
              <span className="text-white font-medium">first frame to final render</span>. Building stories with pacing, rhythm, and grit.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              >
                View selected work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                data-cursor="hover"
                className="link-underline text-sm text-white/80"
              >
                Or get in touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="text-white/40"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
