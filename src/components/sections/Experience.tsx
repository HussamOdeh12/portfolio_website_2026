"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { resumeData } from "@/lib/data/resume";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-surface-alt">
      <div className="absolute inset-0 bg-[var(--section-overlay-alt)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey building digital solutions and supporting government services."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

          <div className="space-y-8">
            {resumeData.experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.startDate}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative pl-16"
              >
                <div className="absolute left-5 top-1 w-7 h-7 rounded-full bg-surface border-[3px] border-indigo-500 flex items-center justify-center shadow-[var(--shadow-card-sm)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                </div>

                <div className="p-6 rounded-2xl bg-surface border border-[var(--card-border)] shadow-[var(--shadow-card-sm)] hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all duration-500">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-indigo-600 dark:text-blue-400" />
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-indigo-600 dark:text-blue-400">{exp.company}</span>
                    <span>•</span>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
