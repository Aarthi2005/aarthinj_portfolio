import { useEffect, useState } from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import aarthi from "@/assets/aarthi.jpg";
import { Particles } from "./Particles";

const roles = ["Data Scientist", "Data Analyst", "Power BI Developer"];

export function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 50 : 110;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((v) => v + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <Particles />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />

      <div className="relative mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-fade-up order-2 md:order-1">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles size={14} className="text-accent" />
            Open to Data Science & Analyst Roles
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient whitespace-nowrap">Aarthi N J</span>
          </h1>
          <div className="mt-5 text-xl md:text-2xl font-display font-semibold text-foreground/90">
            <span className="cursor-blink">{text}</span>
          </div>
          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            Passionate Data Science student specializing in Data Analytics, Business
            Intelligence, and Machine Learning. I transform complex data into meaningful
            insights through interactive dashboards, predictive analytics, and
            data-driven solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-xl font-medium glow hover:scale-[1.03] transition-transform"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl font-medium hover:border-accent/50 transition"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </div>

        <div className="relative order-1 md:order-2 flex justify-center animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-brand rounded-full opacity-40 blur-2xl animate-float" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-brand">
              <img
                src={aarthi}
                alt="Aarthi N J — Data Scientist"
                width={512}
                height={512}
                className="w-full h-full object-cover rounded-full border-4 border-background"
              />
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 text-xs font-medium animate-float" style={{ animationDelay: "-2s" }}>
              📊 Power BI
            </div>
            <div className="absolute -bottom-2 -left-6 glass rounded-2xl px-4 py-2 text-xs font-medium animate-float" style={{ animationDelay: "-3s" }}>
              🤖 ML / NLP
            </div>
            <div className="absolute top-1/2 -right-10 glass rounded-2xl px-4 py-2 text-xs font-medium animate-float">
              🐍 Python
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
