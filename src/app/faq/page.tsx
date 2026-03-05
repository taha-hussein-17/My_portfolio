"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import Link from "next/link";

export default function FAQPage() {
  const { t, lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex p-3 bg-primary/10 text-primary rounded-2xl mb-6">
            <HelpCircle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.faq.title}</h1>
          <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {lang === "ar" 
              ? "هل لديك أسئلة؟ لقد جمعنا لك أكثر الأسئلة الشائعة التي قد تدور في ذهنك حول خدماتنا وعملية التطوير." 
              : "Have questions? We've gathered the most frequently asked questions about our services and the development process."}
          </p>
        </motion.div>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-card rounded-3xl border border-border overflow-hidden transition-all duration-300 ${
                openIndex === index ? "ring-2 ring-primary/20 shadow-xl" : "hover:border-primary/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-right gap-6 hover:bg-secondary/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                      <span className="text-sm font-bold">{index + 1}</span>
                   </div>
                   <h3 className={`text-xl font-bold transition-colors ${lang === "ar" ? "text-right" : "text-left"} ${openIndex === index ? "text-primary" : "text-foreground"}`}>
                    {item.q}
                  </h3>
                </div>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-primary shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-secondary shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`px-8 pb-8 text-secondary text-lg leading-relaxed border-t border-border/50 pt-6 ${lang === "ar" ? "text-right" : "text-left"}`}>
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-10 bg-secondary/5 rounded-[2.5rem] border border-border text-center"
        >
          <div className="inline-flex p-4 bg-primary/10 text-primary rounded-2xl mb-6">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {lang === "ar" ? "لسه عندك أسئلة؟" : "Still have questions?"}
          </h2>
          <p className="text-secondary text-lg mb-8 max-w-xl mx-auto">
            {lang === "ar" 
              ? "إذا لم تجد الإجابة التي تبحث عنها، لا تتردد في التواصل معي مباشرة." 
              : "If you didn't find the answer you're looking for, feel free to contact me directly."}
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all inline-flex items-center gap-3 shadow-lg"
          >
            {t.nav.contact}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
