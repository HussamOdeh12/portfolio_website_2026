"use client";

import { Mail, ArrowUp, Heart } from "lucide-react";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--border)] bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="#hero" className="font-display text-2xl font-bold">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                HO
              </span>
              <span className="text-[var(--text-label)]">.</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full Stack Web Developer crafting modern digital experiences with the MERN stack and a
              passion for AI.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/HussamOdeh12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-[var(--card-border)] text-muted-foreground hover:text-foreground hover:bg-surface-hover hover:border-[var(--primary)]/30 transition-all bg-surface shadow-[var(--shadow-card-sm)]"
                aria-label="GitHub"
              >
                <SocialIcon name="github" className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/hussam-odeh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-[var(--card-border)] text-muted-foreground hover:text-foreground hover:bg-surface-hover hover:border-[var(--primary)]/30 transition-all bg-surface shadow-[var(--shadow-card-sm)]"
                aria-label="LinkedIn"
              >
                <SocialIcon name="linkedin" className="w-5 h-5" />
              </a>
              
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Hussam Odeh. Made with <Heart className="w-4 h-4 text-red-500" />.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
