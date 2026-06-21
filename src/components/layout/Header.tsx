"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 border rounded-2xl",
          scrolled
            ? "top-3 bg-glass-bg backdrop-blur-xl border-glass-border shadow-glass"
            : "top-0 bg-transparent border-transparent"
        )}
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            className="font-display text-xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              HO
            </span>
            <span className="text-[var(--text-label)]">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface-hover transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://flowcv.com/resume/dok2182n94"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[var(--shadow-btn)] hover:shadow-[var(--shadow-btn-hover)] transition-all duration-300"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </a>

            <ThemeToggle />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 rounded-xl bg-glass-bg border border-glass-border hover:bg-surface-hover transition-all backdrop-blur-xl"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-16 bg-glass-bg backdrop-blur-2xl z-40"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6 p-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-display font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume/Hussam_Odeh_Resume.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold"
              >
                <FileDown className="w-5 h-5" />
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
