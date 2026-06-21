"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { resumeData } from "@/lib/data/resume";

function CertificationCard({
  cert,
  idx,
}: {
  cert: (typeof resumeData.certifications)[0];
  idx: number;
}) {
  const icons = {
    course: BookOpen,
    training: Award,
    internship: GraduationCap,
  };
  const Icon = icons[cert.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="p-5 rounded-xl bg-surface border border-[var(--card-border)] shadow-[var(--shadow-card-sm)] hover:shadow-[var(--shadow-card)] hover:border-[var(--primary)]/20 transition-all duration-500"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-indigo-600 dark:text-blue-400" />
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground text-sm">{cert.title}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">{cert.provider}</p>
          <p className="text-xs text-indigo-500/70 dark:text-blue-400/70 mt-0.5">{cert.date}</p>
          <ul className="mt-3 space-y-1">
            {cert.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function Education() {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="relative py-24 md:py-32 bg-surface-alt">
      <div className="absolute inset-0 bg-[var(--section-overlay-alt)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Academic foundation and continuous professional development."
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu) => (
            <motion.div
              key={`${edu.institution}-${edu.degree}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-surface border border-[var(--card-border)] shadow-[var(--shadow-card)] mb-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-sm text-indigo-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                    <span>
                      {edu.startDate} — {edu.endDate}
                    </span>
                  </div>
                  {edu.gpa && (
                    <div className="mt-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span className="text-sm font-medium text-foreground">
                        GPA: {edu.gpa}%
                      </span>
                      {edu.achievement && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
                          {edu.achievement}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
              Certifications & Training
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <CertificationCard key={cert.title} cert={cert} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
