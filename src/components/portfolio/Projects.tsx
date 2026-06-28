import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  {
    title: "Natural Disaster Prediction",
    desc: "ML framework with SMOTE for class imbalance, differential privacy via Laplacian noise, and interpretability through LIME/SHAP. Random Forest + XGBoost for predictive analytics.",
    tech: ["Python", "XGBoost", "Random Forest", "SHAP", "LIME", "SMOTE"],
  },
  {
    title: "Legal Document Classification & Summarization",
    desc: "AI-powered legal document pipeline using Legal BERT for classification and BART for summarization. Auto-categorizes contracts, judgments, and land records.",
    tech: ["Legal BERT", "BART", "NLP", "Python"],
  },
  {
    title: "Customer Emotion Analysis System",
    desc: "NLP-powered sentiment and topic analysis platform using RoBERTa, TextBlob, and spaCy to extract emotions, sentiment scores, and customer insights from feedback.",
    tech: ["RoBERTa", "TextBlob", "spaCy", "NLP"],
  },
  {
    title: "Image Finder",
    desc: "Intelligent fashion search engine supporting image and text queries. Uses OpenAI CLIP, Pinecone, MongoDB GridFS, Flask, and deep-learning similarity search.",
    tech: ["CLIP", "Pinecone", "Flask", "MongoDB"],
  },
  {
    title: "E-Library Management System",
    desc: "Complete library management solution with role-based access for administrators and students using PHP and MySQL.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Selected work</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120}>
              <article className="group glass rounded-2xl p-6 h-full flex flex-col hover:border-accent/50 hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
                <div className="flex items-start justify-between gap-4 relative">
                  <div className="p-2.5 rounded-xl bg-gradient-brand text-white">
                    <FolderGit2 size={18} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/Aarthi2005"
                      target="_blank" rel="noreferrer"
                      aria-label="GitHub"
                      className="p-2 rounded-lg glass hover:border-accent/50 transition"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href="#"
                      aria-label="Live demo"
                      className="p-2 rounded-lg glass hover:border-accent/50 transition"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-display font-semibold relative">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5 relative">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-primary/15 text-foreground/90 border border-primary/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
