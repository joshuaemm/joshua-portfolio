import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    role: "Under Secretary-General",
    company: "VITC MUN 2026",
    location: "VIT Chennai",
    description:
      "A leadership position in one of South India's prominent Model UN conferences. Responsible for visual content strategy and execution — not just delivering edits, but owning the conference's visual identity.",
  },
  {
    year: "2025",
    role: "Organising Committee Member",
    company: "VITC Intra MUN",
    location: "VIT Chennai",
    description:
      "Entry point into the Visual Media team. Contributed to conference-level content production and gained experience working in a structured, high-stakes creative environment.",
  },
  {
    year: "Ongoing",
    role: "Freelance Video Editor",
    company: "Tri2Champ & Others",
    location: "Remote / South India",
    description:
      "Consistent client work alongside studies — from registered sports brands (Tri2Champ) to Google Gemini student ambassadors. Handled client briefs, reviews, and deliverables.",
  },
  {
    year: "2023 — Now",
    role: "Volunteer Video Editor",
    company: "Church YouTube Channel",
    location: "South India",
    description:
      "Edited and produced community videos for the church YouTube channel, building core editing principles, pacing, and creative discipline.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c4f34b]"
          >
            / 04 Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-cursor="text"
            className="font-display text-5xl font-bold text-white md:text-7xl"
          >
            Roles & journey
          </motion.h2>
        </div>

        <div className="space-y-px">
          {experiences.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              data-cursor="hover"
              className="group grid cursor-none grid-cols-12 gap-6 border-t border-white/10 py-10 transition-colors hover:bg-white/[0.02] md:py-14"
            >
              <div className="col-span-12 text-sm text-white/50 md:col-span-2 md:text-xs md:uppercase md:tracking-wider font-mono">
                {e.year}
              </div>
              <div className="col-span-12 md:col-span-7">
                <h3 className="font-display text-2xl font-medium text-white md:text-4xl">
                  <span className="transition-colors group-hover:text-[#c4f34b]">
                    {e.role}
                  </span>{" "}
                  <span className="text-white/40">@</span>{" "}
                  <span className="text-white/80">{e.company}</span>
                </h3>
                <p className="mt-3 max-w-2xl text-sm text-white/60 md:text-base">
                  {e.description}
                </p>
              </div>
              <div className="col-span-12 text-sm text-white/50 md:col-span-3 md:text-right font-mono">
                {e.location}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* Education block */}
        <div className="mt-24 grid gap-8 border-t border-white/10 pt-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c4f34b] font-mono">
              / Education
            </span>
          </div>
          <div className="md:col-span-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-display text-xl font-bold text-white">
                Bachelor of Business Administration (BBA)
              </h4>
              <p className="text-sm text-white/40 mt-1 font-mono">
                2nd Year · VIT Chennai · Pursuing
              </p>
              <p className="text-xs text-white/60 mt-3 leading-relaxed">
                The classroom teaches me business. Everything outside it teaches me creativity. I believe both matter.
              </p>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-white">
                Class 12 High School
              </h4>
              <p className="text-sm text-white/40 mt-1 font-mono">
                Completed · South India
              </p>
              <p className="text-xs text-white/60 mt-3 leading-relaxed">
                Completed high school education with focused studies, establishing core competencies in communication and analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
