import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "04+", label: "Years editing" },
    { value: "18", label: "Years of age" },
    { value: "03", label: "Key projects" },
    { value: "01", label: "Abandoned novel" },
  ];

  return (
    <section id="about" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <div className="sticky top-32">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c4f34b]">
              / 01
            </div>
            <h2 className="font-display text-3xl font-medium text-white">About</h2>
          </div>
        </motion.div>

        {/* Content */}
        <div className="md:col-span-9">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            data-cursor="text"
            className="font-display text-3xl leading-snug text-white/90 md:text-5xl"
          >
            I'm Joshua — a <span className="gradient-text">video editor & creative explorer</span> based
            in South India. Once I'm in a project, I'm <em className="italic text-white/60">fully in</em> — and I'll start again from scratch without drama.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 grid gap-8 text-white/70 md:grid-cols-2"
          >
            <p>
              Four years into video editing (and still hungry to learn), I've worked with sports brands,
              MUN conferences, college ambassadors, and church communities — all before finishing my
              second year of university studying business (BBA).
            </p>
            <p>
              I'm actively building my toolkit — in DaVinci Resolve, in motion graphics, in creative writing, in photography,
              and in whatever else grabs my attention next. I believe in learning by doing, and I'm not afraid to be a beginner in public.
            </p>
          </motion.div>

          {/* Pull quote style box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 rounded-2xl border-l-4 border-[#c4f34b] bg-white/[0.02] p-6 md:p-8"
          >
            <p className="font-display text-lg italic leading-relaxed text-white/80 md:text-xl">
              "Even after failing at one thing, I can immediately start working from scratch again. Not to boast — just honest self-testimony."
            </p>
          </motion.div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="font-display text-5xl font-bold text-white md:text-6xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-white/50">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
