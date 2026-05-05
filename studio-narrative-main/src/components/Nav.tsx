import { useEffect, useState } from "react";

const links = [
  { label: "Index", href: "#index" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Lookbook", href: "#gallery" },
  { label: "Strategy", href: "#strategy" },
  // { label: "Stories", href: "#stories" },
  // { label: "Process", href: "#process" },
  {label: "Content Creation", href: "#content-creation"},
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#index" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl italic text-ink leading-none">Shreeya Gupta</span>
          {/* <span className="eyebrow text-bark/70 hidden sm:inline">— folio'25</span> */}
        </a>
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="eyebrow text-ink underline-grow hover:text-clay transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 eyebrow text-paper bg-ink px-4 py-2.5 rounded-full hover:bg-clay transition-colors"
        >
          Say hi
          <span aria-hidden>→</span>
        </a>
      </nav>
    </header>
  );
};

export default Nav;
