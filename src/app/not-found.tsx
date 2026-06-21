"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-8xl md:text-9xl font-display font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            404
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl text-muted-foreground mb-8 font-display"
        >
          Lost among the stars
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <MagneticButton href="/" variant="primary">
            <Home className="w-5 h-5" />
            Back Home
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
