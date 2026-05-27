import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-xl">
        <a href="#top" data-cursor="hover" className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="h-7 w-7 rounded-md bg-gradient-to-br from-[#c4f34b] to-[#7c5cff]"
          />
          <span className="text-sm font-medium tracking-wide text-white">joshua.emmanuel</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-cursor="hover"
              className="link-underline rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          data-cursor="hover"
          className="group relative overflow-hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black"
        >
          <span className="relative z-10 transition-colors group-hover:text-white">
            Let's talk →
          </span>
          <span className="absolute inset-0 -translate-x-full bg-[#c4f34b] transition-transform duration-500 ease-out group-hover:translate-x-0" />
        </a>
      </div>
    </motion.nav>
  );
}
