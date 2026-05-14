"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, ExternalLink, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PrivateCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoLink: string;
}

export default function PrivateCodeModal({ isOpen, onClose, demoLink }: PrivateCodeModalProps) {
  const { t, lang } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-card border border-border w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl pointer-events-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-secondary/10 rounded-full transition-colors group"
              >
                <X className="w-6 h-6 text-secondary group-hover:text-primary" />
              </button>

              <div className="p-10 text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Lock className="w-10 h-10 text-primary" />
                </div>

                {/* Text */}
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">
                  {t.projects.private_code_title}
                </h2>
                <p className="text-secondary text-lg font-medium leading-relaxed mb-10">
                  {t.projects.private_code_message}
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-4">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {t.projects.visit_live}
                  </a>
                  <button
                    onClick={onClose}
                    className="w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm text-secondary hover:text-primary transition-colors flex items-center justify-center gap-2"
                  >
                    {t.projects.stay_here}
                    <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
