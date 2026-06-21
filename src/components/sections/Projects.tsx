"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { resumeData } from "@/lib/data/resume";

const gradients = [
  "from-indigo-500/20 via-purple-500/20 to-cyan-500/20",
  "from-purple-500/20 via-pink-500/20 to-indigo-500/20",
  "from-cyan-500/20 via-indigo-500/20 to-purple-500/20",
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[var(--section-overlay)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications I've built from the ground up."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-2xl bg-surface border border-[var(--card-border)] shadow-[var(--shadow-card-sm)] overflow-hidden hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="h-32 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-cyan-500/5 flex items-center justify-center">
                <Code2 className="w-10 h-10 text-indigo-300 dark:text-indigo-500/50" />
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  {project.date && (
                    <p className="text-xs text-muted-foreground mb-3">{project.date}</p>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.features && (
                    <ul className="space-y-1.5 mb-4">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="mt-1 w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-surface-hover text-muted-foreground border border-[var(--card-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <SocialIcon name="github" className="w-3.5 h-3.5" />
                      Source
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
