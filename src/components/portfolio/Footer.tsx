import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <footer className="relative mt-12">
      <div className="h-px bg-gradient-brand opacity-70" />
      <div className="glass rounded-none">
        <div className="mx-auto max-w-6xl px-5 py-10 grid md:grid-cols-3 gap-8 items-center">
          <div>
            <p className="font-display font-bold text-lg">
              <span className="text-gradient">Aarthi N J</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">Data Scientist · Data Analyst</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-accent transition">{l}</a>
            ))}
          </nav>
          <div className="flex md:justify-end gap-2">
            <a href="https://github.com/Aarthi2005" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 rounded-xl glass hover:border-accent/50 transition"><Github size={16} /></a>
            <a href="https://www.linkedin.com/in/aarthi-n-j" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-xl glass hover:border-accent/50 transition"><Linkedin size={16} /></a>
            <a href="mailto:aarthinagaraj2005@gmail.com" aria-label="Email" className="p-2.5 rounded-xl glass hover:border-accent/50 transition"><Mail size={16} /></a>
          </div>
        </div>
        <div className="border-t border-white/5">
          <p className="text-center text-xs text-muted-foreground py-4">Aarthi N J © 2026 · Built with passion for data.</p>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gradient-brand text-white glow transition-all ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
