import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "./Reveal";

const EMAILJS_SERVICE_ID = "service_s7rmb3t";
const EMAILJS_TEMPLATE_ID = "template_fq1yrtf";
const EMAILJS_PUBLIC_KEY = "VOpPSOT6poPfuXy-2";

const infos = [
  { icon: Mail, label: "Email", value: "aarthinagaraj2005@gmail.com", href: "mailto:aarthinagaraj2005@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9943986878", href: "tel:+919943986878" },
  { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu, India" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aarthi-n-j", href: "https://www.linkedin.com/in/aarthi-n-j" },
  { icon: Github, label: "GitHub", value: "github.com/Aarthi2005", href: "https://github.com/Aarthi2005" },
];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const loading = status === "loading";

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Say hello</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              I'm currently open to data science & analyst opportunities. Reach out and let's build something insightful.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 h-full">
              <h3 className="font-display font-semibold text-lg mb-5">Contact Information</h3>
              <ul className="space-y-4">
                {infos.map((i) => {
                  const C = i.href ? "a" : "div";
                  return (
                    <li key={i.label}>
                      <C
                        {...(i.href ? { href: i.href, target: i.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
                        className="flex items-start gap-3 group"
                      >
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-gradient-brand group-hover:border-transparent transition">
                          <i.icon size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">{i.label}</p>
                          <p className="text-sm text-foreground/90 break-words group-hover:text-accent transition">{i.value}</p>
                        </div>
                      </C>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <form ref={formRef} onSubmit={onSubmit} className="glass rounded-2xl p-6 h-full space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground">Name</label>
                  <input
                    required name="name" type="text" placeholder="Your name" maxLength={100}
                    className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Email</label>
                  <input
                    required name="email" type="email" placeholder="you@email.com" maxLength={255}
                    className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Subject</label>
                <input
                  name="subject" type="text" placeholder="What's this about?" maxLength={150}
                  className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Message</label>
                <textarea
                  required name="message" rows={5} placeholder="Tell me about the role or project..." maxLength={2000}
                  className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-xl font-medium glow hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="inline-flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle2 size={16} /> Message sent! I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="inline-flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={16} /> {errorMsg || "Failed to send. Please try again."}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
