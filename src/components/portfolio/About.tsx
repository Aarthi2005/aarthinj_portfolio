import { BarChart3, Brain, Database, LineChart, PieChart } from "lucide-react";
import { Reveal } from "./Reveal";

const interests = [
  { icon: BarChart3, label: "Data Analytics" },
  { icon: PieChart, label: "Dashboard Development" },
  { icon: LineChart, label: "Data Visualization" },
  { icon: Database, label: "Business Intelligence" },
  { icon: Brain, label: "Machine Learning" },
];

const stats = [
  { v: "5+", l: "Projects Shipped" },
  { v: "10+", l: "Tools & Tech" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Get to know me</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 h-full">
              <p className="text-foreground/90 leading-relaxed">
                Hi, I'm <span className="text-gradient font-semibold">Aarthi N J</span>, a passionate
                Data Science student currently pursuing my studies at{" "}
                <span className="text-foreground font-medium">PSG College of Technology</span>. I have
                a strong interest in Data Analytics, Business Intelligence, and Machine Learning. With
                hands-on experience in Power BI and Excel, I have worked on projects focused on data
                visualization and analytics. My specialization lies in transforming complex data into
                meaningful insights through interactive dashboards and analytical solutions.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                My career goal is to build impactful data-driven solutions that help organizations make
                informed business decisions while growing as a Data Analyst.
              </p>

              <div className="mt-8">
                <p className="text-sm font-medium text-muted-foreground mb-3">Key Interests</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <span
                      key={i.label}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm hover:border-accent/50 hover:bg-white/10 transition"
                    >
                      <i.icon size={14} className="text-accent" />
                      {i.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 h-full">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="glass rounded-2xl p-6 flex flex-col justify-center hover:scale-[1.03] transition-transform"
                >
                  <div className="text-4xl font-display font-bold text-gradient">{s.v}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
