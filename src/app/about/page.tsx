"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Code2, GraduationCap, Award, CheckCircle2, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SkillItem, ExperienceItem, EducationItem } from "@/types";

export default function AboutPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto min-h-[400px]">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative z-10 w-full h-full bg-card rounded-3xl overflow-hidden border-4 border-white dark:border-border shadow-2xl">
                 <Image 
                   src="/me.png" 
                   alt="Taha Hussein" 
                   fill
                   priority
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                 />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              {lang === "ar" ? (
                <>شغف بالتطوير، عين على <span className="gradient-text">الإبداع</span></>
              ) : (
                <>Passion for Development, Eye for <span className="gradient-text">Creativity</span></>
              )}
            </h1>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              {t.about.desc}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={t.hero.cv_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-all flex items-center gap-2 group shadow-lg"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                {t.hero.download_cv}
              </a>
            </div>
            
            <div className="space-y-6">
              {t.about.skills.map((item: SkillItem, i: number) => (
                <div key={i} className={`flex gap-4 items-start ${lang === "ar" ? "text-right" : "text-left"}`}>
                  <div className="p-3 bg-card rounded-2xl shadow-sm border border-border">
                    {i === 0 && <Code2 className="text-primary" />}
                    {i === 1 && <GraduationCap className="text-accent" />}
                    {i === 2 && <Award className="text-green-500" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline in About Page */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {t.experience.items.map((exp: ExperienceItem, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex gap-8"
              >
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10 bg-card">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  {i !== t.experience.items.length - 1 && (
                    <div className="w-0.5 h-full bg-border absolute top-10" />
                  )}
                </div>

                <div className="bg-card p-8 rounded-3xl border border-border shadow-sm flex-grow hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-secondary leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.education.title}</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.education.items.map((edu: EducationItem, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <GraduationCap className="w-10 h-10 text-primary" />
                  <span className="text-xs font-bold px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <p className="text-primary font-medium mb-4">{edu.school}</p>
                <p className="text-secondary text-sm leading-relaxed">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
