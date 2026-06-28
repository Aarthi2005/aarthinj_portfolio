import { LayoutDashboard, BarChart3, Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const powerBIProjects = [
  {
    title: "RBI Dashboard",
    github: "https://github.com/Aarthi2005/RBI_Dashboard",
    desc: "Developed an interactive Power BI dashboard using Reserve Bank of India datasets to analyze key financial and economic indicators. The dashboard provides clear visualizations and insights for monitoring trends and performance metrics.",
    tech: ["Power BI", "Excel", "DAX", "Data Visualization"],
    features: [
      "Interactive KPI Cards",
      "Financial Trend Analysis",
      "Dynamic Filtering and Slicers",
      "Executive Summary Dashboard",
    ],
    image: "/powerbi-rbi.jpg",
  },
  {
    title: "CPI Dashboard",
    github: "https://github.com/Aarthi2005/CPI_Dashboard",
    desc: "Created a Consumer Price Index (CPI) dashboard to analyze inflation trends, commodity price movements, and economic indicators. The dashboard enables users to explore historical data and identify market trends through interactive visualizations.",
    tech: ["Power BI", "Excel", "DAX"],
    features: [
      "Inflation Trend Analysis",
      "Commodity Price Tracking",
      "Interactive Charts and Filters",
      "Data-Driven Insights",
    ],
    image: "/powerbi-cpi.jpg",
  },
  {
    title: "Customer Behavior Analysis Dashboard",
    github: "https://github.com/Aarthi2005/Customer_Behavior_Analysis_Dashboard",
    desc: "Designed a customer analytics dashboard to study customer purchasing behavior, engagement patterns, and business performance metrics. The dashboard helps identify trends and supports strategic decision-making.",
    tech: ["Power BI", "Excel", "Data Analytics"],
    features: [
      "Customer Segmentation Analysis",
      "Sales & Performance Metrics",
      "Behavioral Insights",
      "Interactive KPI Monitoring",
    ],
    image: "/powerbi-customer.jpg",
  },
];

export function PowerBIProjects() {
  return (
    <section id="powerbi" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <LayoutDashboard size={18} className="text-accent" />
              <p className="text-accent uppercase tracking-[0.3em] text-xs">Business Intelligence</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Power BI <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Interactive business intelligence dashboards designed to transform raw data into meaningful insights and support data-driven decision making.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {powerBIProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="group glass rounded-2xl overflow-hidden h-full flex flex-col hover:border-accent/50 hover:-translate-y-1 hover:glow transition-all duration-300 relative block"
              >
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
                
                <div className="relative h-[230px] overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#1e3a5f] via-[#0F172A] to-[#1e3a5f] flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={`${p.title} dashboard screenshot`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <BarChart3 size={64} className="text-white/10 relative z-0" />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                <div className="p-6 flex flex-col flex-1 relative">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-display font-semibold">
                      {p.title}
                    </h3>
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent transition shrink-0 mt-1" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-accent mb-2 font-medium">Key Insights</p>
                    <ul className="space-y-1.5">
                      {p.features.map((f) => (
                        <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/15 text-foreground/90 border border-primary/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-accent pt-3 border-t border-white/5">
                    <Github size={15} />
                    View GitHub
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
