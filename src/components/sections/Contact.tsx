"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { resumeData } from "@/lib/data/resume";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const { personalInfo } = resumeData;

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[var(--section-overlay-alt)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or just want to say hello? Let's connect."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-[var(--card-border)] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-2 focus:ring-[var(--primary)]/10 transition-all shadow-[var(--shadow-card-sm)] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-[var(--card-border)] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-2 focus:ring-[var(--primary)]/10 transition-all shadow-[var(--shadow-card-sm)] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-[var(--card-border)] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-2 focus:ring-[var(--primary)]/10 transition-all shadow-[var(--shadow-card-sm)] disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-[var(--card-border)] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-2 focus:ring-[var(--primary)]/10 transition-all shadow-[var(--shadow-card-sm)] resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <MagneticButton variant="primary" type="submit" disabled={status === "loading"}>
                {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === "success" && <CheckCircle className="w-5 h-5" />}
                {status === "error" && <AlertCircle className="w-5 h-5" />}
                {(status === "idle" || status === "error") && <Send className="w-5 h-5" />}
                <span>
                  {status === "loading" && "Sending..."}
                  {status === "success" && "Sent!"}
                  {status === "error" && "Failed"}
                  {(status === "idle" || status === "error") && "Send Message"}
                </span>
              </MagneticButton>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-surface border border-[var(--card-border)] shadow-[var(--shadow-card)]">
              <h3 className="font-display font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-hover transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-indigo-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm text-foreground font-medium">{personalInfo.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-hover transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm text-foreground font-medium">{personalInfo.phone}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-[var(--card-border)] shadow-[var(--shadow-card-sm)]">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Social Links
              </h3>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-[var(--card-border)] text-muted-foreground hover:text-foreground hover:bg-surface-hover hover:border-[var(--primary)]/30 transition-all shadow-[var(--shadow-card-sm)]"
                >
                  <SocialIcon name="github" className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-[var(--card-border)] text-muted-foreground hover:text-foreground hover:bg-surface-hover hover:border-[var(--primary)]/30 transition-all shadow-[var(--shadow-card-sm)]"
                >
                  <SocialIcon name="linkedin" className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}