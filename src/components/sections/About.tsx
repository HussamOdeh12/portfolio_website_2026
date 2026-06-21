"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Brain, Target } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { resumeData } from "@/lib/data/resume";

const values = [
  {
    icon: Code2,
    label: "Clean Code",
    desc: "Writing maintainable, scalable, and performant code is my standard.",
  },
  {
    icon: Zap,
    label: "User First",
    desc: "Every pixel and interaction should serve a purpose and delight users.",
  },
  {
    icon: Brain,
    label: "AI Driven",
    desc: "Exploring how AI can augment development and shape the future of tech.",
  },
  {
    icon: Target,
    label: "Continuous Growth",
    desc: "Learning never stops. Every project is an opportunity to level up.",
  },
];

export function About() {
  const { personalInfo } = resumeData;

  return (
    <section id="about" className="relative py-24 md:py-32 bg-surface-alt">
      <div className="absolute inset-0 bg-[var(--section-overlay-alt)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A developer who builds for impact, writes clean code, and thinks about the user first."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-square max-w-sm mx-auto rounded-2xl bg-surface border border-[var(--card-border)] shadow-[var(--shadow-card)] flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                    <span className="font-display text-3xl font-bold text-white">HO</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Your next developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently based in <span className="text-foreground font-medium">Abu Dhabi, UAE</span>,
              I bridge the gap between technical support and full-stack development, bringing a
              user-centric mindset to every project I build.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { end: 2, label: "Years Exp", suffix: "+" },
                { end: 10, label: "Projects", suffix: "+" },
                { end: 84, label: "GPA", suffix: "%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-surface border border-[var(--card-border)] shadow-[var(--shadow-card-sm)]"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {values.map((value) => (
            <div
              key={value.label}
              className="group p-6 rounded-2xl bg-surface border border-[var(--card-border)] shadow-[var(--shadow-card-sm)] hover:shadow-[var(--shadow-card)] hover:border-[var(--primary)]/20 hover:-translate-y-1 transition-all duration-500"
            >
              <value.icon className="w-8 h-8 text-indigo-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold text-foreground mb-2">{value.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
