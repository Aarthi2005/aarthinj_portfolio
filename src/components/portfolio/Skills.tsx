import { Code2, BarChart3, Database, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const groups = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "SQL"],
  },
  {
    title: "Data Analytics & BI",
    icon: BarChart3,
    items: ["Power BI", "Excel", "Oracle Analytics Desktop", "Apache Superset"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "Oracle Database", "MongoDB"],
  },
];

const extras = [
  "Data Visualization", "Dashboard Development", "Data Modeling",
  "Business Intelligence", "KPI Reporting", "Data Cleaning",
  "Machine Learning", "NLP",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">My toolkit</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="text-gradient">Skills</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 120}>
              <div className="glass rounded-2xl p-6 h-full hover:border-accent/40 transition">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-xl bg-gradient-brand text-white">
                    <g.icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 hover:bg-gradient-brand hover:border-transparent hover:text-white transition"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="glass rounded-2xl p-6 mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-gradient-brand text-white">
                <Sparkles size={18} />
              </div>
              <h3 className="font-display font-semibold">Additional Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {extras.map((e) => (
                <span
                  key={e}
                  className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 hover:bg-gradient-brand hover:border-transparent hover:text-white transition"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
