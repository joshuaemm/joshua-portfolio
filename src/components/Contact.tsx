import { motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { RubiksCube } from "./RubiksCube";

const socials = [
  { name: "Email",    value: "joshuaemm.je@gmail.com",  href: "mailto:joshuaemm.je@gmail.com" },
  { name: "Twitter",  value: "@joshua_emmanuel",          href: "#" },
  { name: "LinkedIn", value: "in/joshua-emmanuel",        href: "#" },
  { name: "GitHub",   value: "@joshua-emmanuel",          href: "#" },
  { name: "YouTube",  value: "@joshua-emmanuel",          href: "#" },
];

const goodFit = [
  "You want someone fully invested — not just technically, but emotionally — in your project.",
  "You're fine working with a creator who is honest about his level and compensates with pure effort.",
  "You value communication — briefs, updates, feedback, iteration without drama.",
  "You're willing to give a young, driven creator a real shot at something meaningful.",
  "You need reels, event recaps, promos, motion-text content — or beginner photography.",
];

const badFit = [
  "You need a senior professional with a decade of polished portfolio work.",
  "You need broadcast-level production or advanced color grading expertise.",
  "Your project timeline is too tight for any back-and-forth iteration.",
  "You're not comfortable working with a creator who is still actively growing.",
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-12 pt-32 md:px-12 md:pt-48">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#7c5cff] opacity-20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* ── Header + Cube ─────────────────────────────────────── */}
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c4f34b]">
              / 05 Contact
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-cursor="text"
              className="font-display text-5xl font-bold leading-[0.95] text-white md:text-[8rem] lg:text-[10rem]"
            >
              Let's build <br />
              <span className="gradient-text">something</span> <br />
              together.
            </motion.h2>
          </div>

          <div className="md:col-span-4 flex justify-center md:justify-end pt-8 md:pt-0">
            <RubiksCube containerSize={220} spinClass="animate-cube-spin" />
          </div>
        </div>

        {/* ── Fit Grid ──────────────────────────────────────────── */}
        <div className="mt-24 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#c4f34b]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c4f34b]/10 text-[#c4f34b]">
                <Check size={12} />
              </span>
              Good Fit
            </h3>
            <ul className="space-y-4">
              {goodFit.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/70">
                  <span className="mt-1 font-bold text-[#c4f34b]">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/40">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-white/40">
                <X size={12} />
              </span>
              Not The Right Fit
            </h3>
            <ul className="space-y-4">
              {badFit.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/50">
                  <span className="mt-1 text-white/30">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Quote ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 rounded-2xl border-l-4 border-[#7c5cff] bg-white/[0.02] p-6 md:p-8"
        >
          <p className="font-display text-base italic leading-relaxed text-white/70 md:text-lg">
            "I'm not the right fit if you need a senior professional with a decade of polished
            work. But if you want someone who will treat your project like it's the most important
            thing on his to-do list — that's exactly what you'll get."
          </p>
        </motion.div>

        {/* ── Email CTA ─────────────────────────────────────────── */}
        <div className="mt-20">
          <motion.a
            href="mailto:joshuaemm.je@gmail.com"
            data-cursor="hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/5 px-8 py-5 backdrop-blur-xl transition-all hover:border-[#c4f34b] hover:bg-[#c4f34b]"
          >
            <span className="font-display text-xl font-medium text-white transition-colors group-hover:text-black md:text-2xl">
              joshuaemm.je@gmail.com
            </span>
            <motion.span
              whileHover={{ rotate: 45, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c4f34b] text-black transition-colors group-hover:bg-black group-hover:text-[#c4f34b]"
            >
              <ArrowUpRight size={18} />
            </motion.span>
          </motion.a>
        </div>

        {/* ── Socials Grid ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-5"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              data-cursor="hover"
              whileHover={{ backgroundColor: "rgba(196,243,75,0.08)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col gap-2 bg-[#07070b] p-6 transition-colors"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                {s.name}
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-medium text-white">{s.value}</span>
                <ArrowUpRight
                  size={14}
                  className="flex-shrink-0 text-white/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c4f34b]"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ── Footer ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row"
        >
          <div className="text-center leading-relaxed md:text-left">
            © 2026 Joshua Emmanuel J. — Designed & built with ♥.<br />
            <span className="mt-1 block italic text-white/30">
              This portfolio was written honestly. The skill levels listed reflect where I actually
              am — not where I want to sound like I am.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c4f34b] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c4f34b]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
              Open to commissions
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
