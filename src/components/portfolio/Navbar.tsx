import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "powerbi", label: "Power BI" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("light");
    setLight((v) => !v);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <div className="h-full bg-gradient-brand transition-[width]" style={{ width: `${progress}%` }} />
      </div>
      <nav
        className={`fixed top-2 left-0 right-0 z-50 transition-all ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
            <a href="#home" className="font-display font-bold text-lg">
              <span className="text-gradient">Aarthi</span>
            </a>
            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                    active === l.id
                      ? "text-foreground bg-white/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg hover:bg-white/5 transition"
              >
                {light ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button
                className="md:hidden p-2 rounded-lg hover:bg-white/5"
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          {open && (
            <div className="glass rounded-2xl mt-2 p-3 md:hidden animate-fade-up">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
