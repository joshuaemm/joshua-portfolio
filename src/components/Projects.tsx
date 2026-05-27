import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  client: string;
  year: string;
  tags: string[];
  color: string;
  accent: string;
  description: string;
  role: string;
  outcome: string;
  bullets: string[];
  hidePreview?: boolean;
};

const projects: Project[] = [
  {
    title: "VITC MUN 2026 — 'We Are Back' Official Reel",
    client: "VITC Model United Nations 2026",
    year: "2026",
    tags: ["Conference Media", "Announcement", "DaVinci Resolve"],
    color: "from-[#7c5cff]/30 to-[#ff5cc8]/30",
    accent: "#7c5cff",
    description: "Produced a high-impact 1-minute reel to announce VITC Model United Nations 2026 to its audience.",
    role: "Video Editor & USG, Visual Media Team",
    outcome: "Approved enthusiastically by the Secretary-General and the entire organising committee. A follow-up editing assignment has already been indicated.",
    bullets: [
      "Served as Under Secretary-General in the Visual Media team, making key decisions for the conference's visual identity.",
      "Balanced energy, pacing, and tone to reflect the gravity and excitement of a Model UN event.",
      "Previously served as OC in Visual Media for VITC Intra MUN, building the foundation for this leadership role."
    ]
  },
  {
    title: "Tri2Champ — Sports Brand Promo Videos",
    client: "Tri2Champ (Triathlon Sports)",
    year: "2025",
    tags: ["Paid Freelance", "Sports Promo", "Rhythm & Sync"],
    color: "from-[#c4f34b]/30 to-[#0ea5e9]/30",
    accent: "#c4f34b",
    description: "Produced a 1-minute promotional video and a short reel for a registered triathlon sports brand.",
    role: "Freelance Video Editor",
    outcome: "Client was more than happy. Paid Rs. 1,000 on delivery — first real money earned from editing, a milestone that means something.",
    bullets: [
      "Captured the speed, grit, and energy of the triathlon world through editing rhythm and music sync.",
      "Handled client communication, revision cycles, and final delivery independently from start to finish."
    ]
  },
  {
    title: "Gemini Student Ambassador Promo Video",
    client: "Google Gemini Ambassador",
    year: "2025",
    tags: ["Motion Graphics", "Text Animation", "Google-Affiliated"],
    color: "from-[#3b82f6]/30 to-[#1d4ed8]/30",
    accent: "#3b82f6",
    description: "Built a fully animated text-based promo video serving as an official promotional asset for a Google-affiliated student program.",
    role: "Commissioned Video Editor",
    outcome: "Client was very happy. Used as the main promotional asset for VIT Chennai's student ambassador program.",
    bullets: [
      "No footage used — all motion design and typography sequences doing the heavy lifting.",
      "Designed sequences that communicated the program's value clearly and with high visual energy."
    ]
  },
  {
    title: "Church YouTube Channel Production",
    client: "Personal Church Community",
    year: "2023 — Present",
    tags: ["Community Media", "Volunteer", "Audio Syncing"],
    color: "from-[#f59e0b]/30 to-[#ff5cc8]/30",
    accent: "#f59e0b",
    description: "Edited and produced community videos for the church's YouTube channel, establishing the foundation of my editing journey.",
    role: "Volunteer Video Editor",
    outcome: "Ongoing contribution to community media. Every principle I use today — pacing, audio sync, storytelling — was first learned here.",
    bullets: [
      "Built consistency and creative discipline through regular, published, community-facing work.",
      "Developed a strong sense of accountability and attention to detail when producing content for a real audience."
    ],
    hidePreview: true
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex items-end justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c4f34b]"
            >
              / 02 Selected work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-cursor="text"
              className="font-display text-5xl font-bold text-white md:text-7xl"
            >
              Recent projects
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            data-cursor="hover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="link-underline hidden text-sm text-white/60 md:block"
          >
            Start a project →
          </motion.a>
        </div>

        {/* Project list */}
        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              data-cursor="hover"
              data-cursor-label="View"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="tilt-card group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-12 md:items-start">
                {/* Text Details (Left side) */}
                <div className={p.hidePreview ? "md:col-span-12" : "md:col-span-7"}>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="text-xs text-white/40 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-12 bg-white/20" />
                    <span className="text-xs uppercase tracking-wider text-[#c4f34b] font-medium">
                      {p.client}
                    </span>
                    <span className="text-xs text-white/20">|</span>
                    <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
                      {p.role}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white transition-colors group-hover:text-[#c4f34b] md:text-4xl leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed">
                    {p.description}
                  </p>
                  
                  {/* Bullets list */}
                  <ul className="mt-4 space-y-2 text-xs text-white/50 list-none pl-0">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-[#c4f34b] before:font-bold">
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Outcome Box */}
                  <div className="mt-5 rounded-xl border-l-2 border-[#7c5cff] bg-white/[0.01] px-4 py-3 text-xs italic text-white/60">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7c5cff] block mb-1 font-mono">
                      Outcome / Impact
                    </span>
                    {p.outcome}
                  </div>

                  {/* Tags and Link Arrow for hidden preview */}
                  {p.hidePreview && (
                    <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[9px] uppercase tracking-wider text-white/50 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors group-hover:border-[#c4f34b] group-hover:bg-[#c4f34b] group-hover:text-black"
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Preview Box & Meta (Right side) */}
                {!p.hidePreview && (
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <div
                      className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${p.color}`}
                    >
                      <div className="absolute inset-0 bg-grid opacity-30" />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div
                          className="font-display text-6xl font-bold md:text-7xl"
                          style={{ color: p.accent }}
                        >
                          {p.title.charAt(0) || "P"}
                        </div>
                      </motion.div>
                      <div className="absolute bottom-3 right-3 rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-wider text-white/70 backdrop-blur font-mono">
                        {p.year}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[9px] uppercase tracking-wider text-white/50 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors group-hover:border-[#c4f34b] group-hover:bg-[#c4f34b] group-hover:text-black"
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
