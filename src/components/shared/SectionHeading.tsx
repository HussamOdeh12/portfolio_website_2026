"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("text-center mb-16", className)}
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
    </motion.div>
  );
}
