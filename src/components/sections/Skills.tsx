"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { resumeData } from "@/lib/data/resume";
import type { SkillCategory } from "@/types";

const categoryColors: Record<SkillCategory, { from: string; to: string }> = {
  Frontend: { from: "#4f46e5", to: "#06b6d4" },
  Backend: { from: "#7c3aed", to: "#6366f1" },
  Languages: { from: "#f59e0b", to: "#ef4444" },
  Frameworks: { from: "#10b981", to: "#06b6d4" },
  Databases: { from: "#f97316", to: "#f59e0b" },
  Tools: { from: "#6366f1", to: "#7c3aed" },
  Design: { from: "#ec4899", to: "#f97316" },
  "Soft Skills": { from: "#14b8a6", to: "#10b981" },
};

function SkillRing({ level, label, color }: { level: number; label: string; color: { from: string; to: string } }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={radius} fill="none" stroke="var(--skill-bar)" strokeWidth="5" />
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke={`url(#grad-${label.replace(/\s/g, "")})`}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id={`grad-${label.replace(/\s/g, "")}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color.from} />
              <stop offset="100%" stopColor={color.to} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-sm font-bold text-foreground">{level}%</span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors">
        {label}
      </span>
    </div>
  );
}

export function Skills() {
  const categories = resumeData.skills.reduce<Record<SkillCategory, typeof resumeData.skills>>(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<SkillCategory, typeof resumeData.skills>
  );

  const categoryMeta: Record<SkillCategory, { icon: string }> = {
    Frontend: { icon: "🎨" },
    Backend: { icon: "⚙️" },
    Languages: { icon: "🔤" },
    Frameworks: { icon: "📦" },
    Databases: { icon: "🗄️" },
    Tools: { icon: "🛠️" },
    Design: { icon: "✨" },
    "Soft Skills": { icon: "💡" },
  };

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[var(--section-overlay)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(categories).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-surface border border-[var(--card-border)] shadow-[var(--shadow-card-sm)] hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all duration-500"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-lg">{categoryMeta[category as SkillCategory]?.icon}</span>
                <h3 className="font-display font-semibold text-foreground text-lg">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill) => (
                  <SkillRing
                    key={skill.name}
                    level={skill.level}
                    label={skill.name}
                    color={categoryColors[skill.category]}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
