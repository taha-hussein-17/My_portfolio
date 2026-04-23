'use client';

import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function Loading() {
  const codeLines = [
    "Initializing portfolio engine...",
    "Compiling Next.js modules...",
    "Optimizing shaders for UI animations...",
    "Warming up React server components...",
    "Loading projects, services and case studies...",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 h-24 rounded-3xl bg-card border border-primary/30 shadow-[0_0_40px_rgba(59,130,246,0.35)] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
          <div className="absolute inset-1 rounded-2xl bg-background/90 flex items-center justify-center">
            <motion.div
              initial={{ y: -6 }}
              animate={{ y: [ -4, 4, -4 ] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="flex items-center gap-1 text-primary"
            >
              <Code className="w-7 h-7" />
            </motion.div>
          </div>
        </motion.div>

        <div className="w-[320px] md:w-[420px] rounded-2xl bg-black/90 border border-primary/40 shadow-2xl overflow-hidden">
          <div className="px-4 py-2 flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/30 text-xs font-mono">
            <span className="text-white/80">taha@dev-portfolio</span>
            <span className="text-white/60">building interface...</span>
          </div>
          <div className="px-4 py-3 space-y-1.5 text-[11px] md:text-xs font-mono text-green-300/90">
            {codeLines.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.25 }}
                className="flex items-center gap-2"
              >
                <span className="text-green-500">➜</span>
                <span className="truncate">{line}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: codeLines.length * 0.25 }}
              className="flex items-center gap-2 mt-2"
            >
              <span className="text-green-500">➜</span>
              <span className="truncate text-white/80">
                Ready in &lt;1s — deploying clean UI...
              </span>
              <span className="inline-block w-2 h-3 bg-green-400 animate-pulse" />
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm md:text-base text-secondary font-medium text-center"
        >
          Preparing{" "}
          <span className="font-semibold text-primary">
            SaaS Dashboard & Scalable Architecture Expert
          </span>{" "}
          experience...
        </motion.p>
      </div>
    </div>
  );
}



