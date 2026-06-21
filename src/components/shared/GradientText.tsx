"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  from?: string;
  via?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  as: Tag = "span",
  from = "from-blue-400",
  via = "via-purple-400",
  to = "to-cyan-400",
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        `bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent`,
        className
      )}
    >
      {children}
    </Tag>
  );
}
