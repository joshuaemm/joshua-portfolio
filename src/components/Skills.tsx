import { motion } from "framer-motion";

const skills = [
  { name: "Video Editing (DaVinci Resolve)", level: 85 },
  { name: "Motion Graphics & Text Sequences", level: 65 },
  { name: "Photography & Street Shooting", level: 60 },
  { name: "Content & Script Writing", level: 65 },
  { name: "Python Programming Basics", level: 40 },
  { name: "Speed Cubing (Pattern recognition)", level: 90 },
];

const tools = [
  "DaVinci Resolve",
  "Fusion",
  "Video Editing",
  "Motion Graphics",
  "Photography",
  "Street Shooting",
  "Content Writing",
  "Creative Writing",
  "Python Basics",
  "Speed Cubing",
  "Pacing & Rhythm",
  "Audio Syncing",
  "Color Grading",
  "Storyboarding",
];

export default function Skills() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c4f34b]"
            >
              / 03 Toolkit
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-cursor="text"
              className="font-display text-5xl font-bold text-white md:text-6xl"
            >
              Skills & <br />
              <span className="gradient-text">technologies</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {tools.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  whileHover={{ scale: 1.08, backgroundColor: "#c4f34b", color: "#000" }}
                  data-cursor="hover"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 transition-colors"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-6">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="font-medium text-white">{s.name}</span>
                    <span className="text-xs text-white/40">{s.level}%</span>
                  </div>
                  <div className="h-px w-full overflow-hidden bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: 0.2 + i * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full bg-gradient-to-r from-[#c4f34b] to-[#7c5cff]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
