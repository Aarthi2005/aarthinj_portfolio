import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: GraduationCap,
    degree: "M.Sc. Data Science",
    school: "PSG College of Technology",
    period: "2022 – Present",
    detail: "",
  },
  {
    icon: BookOpen,
    degree: "HSC (XII)",
    school: "Sri Sowdeswari Vidyalaya",
    period: "2022",
    detail: "94.17%",
  },
  {
    icon: Award,
    degree: "SSLC (X)",
    school: "Sri Sowdeswari Vidyalaya",
    period: "2020",
    detail: "89.40%",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Academic journey</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Education</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative pl-10 md:pl-12 space-y-6">
          <div className="absolute left-3 md:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />
          {items.map((it, i) => (
            <Reveal key={it.degree} delay={i * 120}>
              <div className="relative">
                <div className="absolute -left-[34px] md:-left-[42px] top-3 w-8 h-8 rounded-full bg-gradient-brand grid place-items-center glow">
                  <it.icon size={14} className="text-white" />
                </div>
                <div className="glass rounded-2xl p-6 hover:border-accent/40 transition">
                  <div className="flex flex-wrap justify-between gap-2">
                    <div>
                      <h3 className="font-display font-semibold text-lg">{it.degree}</h3>
                      <p className="text-accent text-sm mt-0.5">{it.school}</p>
                    </div>
                    <span className="text-sm text-muted-foreground glass rounded-full px-3 py-1 h-fit">
                      {it.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-foreground/80">{it.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
