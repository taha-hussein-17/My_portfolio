"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectItem } from "@/types";

export default function ProjectsPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.title}</h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            {t.projects.view_all}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project: ProjectItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg group hover:shadow-2xl transition-all"
            >
              <div className="aspect-video relative overflow-hidden border-b border-border">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-8">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary mb-4 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="space-y-3 mb-6 bg-secondary/5 p-4 rounded-2xl">
                  <p className="text-xs text-secondary leading-relaxed">
                    <span className="font-bold text-primary block mb-1">{lang === 'ar' ? 'المشكلة:' : 'The Problem:'}</span>
                    {project.problem}
                  </p>
                  <p className="text-xs text-secondary leading-relaxed">
                    <span className="font-bold text-primary block mb-1">{lang === 'ar' ? 'الحل:' : 'The Solution:'}</span>
                    {project.solution}
                  </p>
                  <p className="text-xs text-secondary leading-relaxed">
                    <span className="font-bold text-primary block mb-1">{lang === 'ar' ? 'النتيجة:' : 'The Result:'}</span>
                    {project.result}
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    {t.projects.preview}
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                    {t.projects.code}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
