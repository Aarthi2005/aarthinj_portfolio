import { Briefcase, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const bullets = [
  "Developed and enhanced interactive BI dashboards using Power BI, Oracle Analytics Server (OAS), and Apache Superset.",
  "Worked on pharmaceutical, finance, energy, and social welfare analytics projects.",
  "Designed KPI-driven analytical reports for stakeholders.",
  "Resolved complex data mismatches and improved dashboard accuracy.",
  "Built advanced visualizations and optimized data models.",
  "Customized dashboard UI/UX using CSS for a polished experience.",
  "Improved dashboard layouts, themes, and overall user experience.",
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Where I've worked</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional <span className="text-gradient">Experience</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative pl-10 md:pl-12">
          <div className="absolute left-3 md:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />
          <Reveal>
            <div className="relative">
              <div className="absolute -left-[34px] md:-left-[42px] top-2 w-8 h-8 rounded-full bg-gradient-brand grid place-items-center glow">
                <Briefcase size={14} className="text-white" />
              </div>
              <div className="glass rounded-2xl p-7 hover:border-accent/40 transition">
                <div className="flex flex-wrap justify-between gap-2 items-start">
                  <div>
                    <h3 className="text-xl font-display font-semibold">Data Science Intern</h3>
                    <p className="text-accent font-medium mt-1">IN22 LABS</p>
                  </div>
                  <span className="text-sm text-muted-foreground glass rounded-full px-3 py-1">
                    Jun 2025 – Dec 2025
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-foreground/85">
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
