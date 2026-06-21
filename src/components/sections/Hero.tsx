"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { TypingEffect } from "@/components/shared/TypingEffect";
import { resumeData } from "@/lib/data/resume";

const Hero3D = dynamic(
  () => import("@/components/three/HeroBackground").then((m) => ({ default: m.Hero3D })),
  { ssr: false }
);

export function Hero() {
  const { personalInfo } = resumeData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <Hero3D />

      <div className="absolute inset-0 bg-[var(--hero-overlay)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--badge-text)] animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        >
          <span className="text-foreground">
            {personalInfo.name}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6"
        >
          <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-display">
            <TypingEffect
              words={[
                "Full Stack Web Developer",
                "MERN Stack Specialist",
                "AI Enthusiast",
                "UI/UX Craftsman",
              ]}
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-2xl mx-auto text-[var(--text-secondary)] text-lg leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#contact" variant="primary">
            <Mail className="w-5 h-5" />
            Get in Touch
          </MagneticButton>
          <MagneticButton href="https://flowcv.com/resume/dok2182n94" download variant="secondary">
            <FileDown className="w-5 h-5" />
            Resume
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/HussamOdeh12"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-surface border border-[var(--card-border)] text-muted-foreground hover:text-foreground hover:bg-surface-hover hover:border-[var(--primary)]/30 transition-all shadow-[var(--shadow-card-sm)]"
            aria-label="GitHub"
          >
            <SocialIcon name="github" className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/hussam-odeh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-surface border border-[var(--card-border)] text-muted-foreground hover:text-foreground hover:bg-surface-hover hover:border-[var(--primary)]/30 transition-all shadow-[var(--shadow-card-sm)]"
            aria-label="LinkedIn"
          >
            <SocialIcon name="linkedin" className="w-5 h-5" />
          </a>
          
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
