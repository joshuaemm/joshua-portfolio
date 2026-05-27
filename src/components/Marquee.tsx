import { motion } from "framer-motion";

const words = [
  "Editing",
  "stories",
  "with",
  "grit.",
  "Cutting",
  "videos",
  "people",
  "love.",
  "Turning",
  "ideas",
  "into",
  "motion.",
  "DaVinci",
  "Resolve.",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex whitespace-nowrap"
      >
        <div className="animate-marquee flex items-center gap-8 pr-8">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span
              key={i}
              className={`font-display text-5xl font-bold md:text-7xl ${
                i % 4 === 3 ? "gradient-text" : "text-white/90"
              }`}
            >
              {w}
              <span className="mx-8 text-[#c4f34b]">✦</span>
            </span>
          ))}
        </div>
        <div aria-hidden className="animate-marquee flex items-center gap-8 pr-8">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span
              key={`dup-${i}`}
              className={`font-display text-5xl font-bold md:text-7xl ${
                i % 4 === 3 ? "gradient-text" : "text-white/90"
              }`}
            >
              {w}
              <span className="mx-8 text-[#c4f34b]">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
