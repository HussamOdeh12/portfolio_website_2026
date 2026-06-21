"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  download?: string | boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  download,
  target,
  rel,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleReset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[var(--shadow-btn)] hover:shadow-[var(--shadow-btn-hover)] hover:scale-105",
    secondary:
      "bg-white text-[#111827] border-2 border-[#111827]/20 shadow-[var(--shadow-btn)] hover:shadow-[var(--shadow-card)] hover:border-[#111827]/40 hover:scale-[1.02]",
    ghost:
      "text-muted-foreground hover:text-foreground hover:bg-surface-hover",
  };

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleReset}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-xl" />
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return <button onClick={onClick} type={type} disabled={disabled} className="inline-block">{content}</button>;
}
