import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { PowerBIProjects } from "@/components/portfolio/PowerBIProjects";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarthi N J — Data Scientist & Analyst Portfolio" },
      { name: "description", content: "Portfolio of Aarthi N J — Data Science M.Sc. student at PSG College of Technology. Power BI, Python, SQL, Machine Learning, and BI dashboard projects." },
      { property: "og:title", content: "Aarthi N J — Data Scientist & Analyst" },
      { property: "og:description", content: "Data Scientist | Data Analyst | Power BI Developer. Featured ML, NLP, and analytics projects." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <PowerBIProjects />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
