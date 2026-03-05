"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectItem } from "@/types";
import { useMemo, useState } from "react";
import Script from "next/script";
import Link from "next/link";

export default function ProjectsPage() {
  const { t, lang } = useLanguage();
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState<"alpha" | "tags">("alpha");

  const allTags = useMemo(() => {
    const set = new Set<string>();
    t.projects.items.forEach((p: ProjectItem) => p.tags.forEach(tag => set.add(tag)));
    return Array.from(set).sort();
  }, [t.projects.items]);

  const filtered = useMemo(() => {
    let items = t.projects.items.slice();
    if (selectedTags.length > 0) {
      items = items.filter((p: ProjectItem) =>
        selectedTags.every(tag => p.tags.includes(tag))
      );
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter((p: ProjectItem) =>
        [p.title, p.desc, p.problem, p.solution, p.result, ...p.tags].some(v =>
          v.toLowerCase().includes(q)
        )
      );
    }
    if (sort === "alpha") {
      items.sort((a: ProjectItem, b: ProjectItem) => a.title.localeCompare(b.title));
    } else {
      items.sort((a: ProjectItem, b: ProjectItem) => b.tags.length - a.tags.length);
    }
    return items;
  }, [t.projects.items, selectedTags, query, sort]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <Script
          id="ld-projects"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: filtered.map((p: ProjectItem, i: number) => ({
                "@type": "CreativeWork",
                position: i + 1,
                name: p.title,
                description: p.desc,
                url: p.demo && p.demo !== "#" ? p.demo : p.link,
                keywords: p.tags.join(", "),
              })),
            }),
          }}
        />
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

        {/* Controls */}
        <div className="bg-card border border-border rounded-3xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <input
              aria-label={lang === "ar" ? "ابحث في المشاريع" : "Search projects"}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={lang === "ar" ? "ابحث بالعنوان أو التقنية..." : "Search by title or tech..."}
              className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="flex items-center gap-3">
              <label className="text-sm text-secondary font-bold">{lang === "ar" ? "الترتيب" : "Sort"}</label>
              <select
                aria-label={lang === "ar" ? "ترتيب المشاريع" : "Sort projects"}
                value={sort}
                onChange={(e) => setSort(e.target.value as "alpha" | "tags")}
                className="px-3 py-2 rounded-xl border border-border bg-background"
              >
                <option value="alpha">{lang === "ar" ? "أبجدي" : "Alphabetical"}</option>
                <option value="tags">{lang === "ar" ? "الأكثر تقنيات" : "Most tags"}</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setSelectedTags([])}
              className={`px-3 py-1 rounded-full text-xs font-bold border ${selectedTags.length === 0 ? "bg-primary text-white border-primary" : "bg-card border-border text-foreground"}`}
            >
              {lang === "ar" ? "الكل" : "All"}
            </button>
            {allTags.map((tname) => (
              <button
                key={tname}
                onClick={() => toggleTag(tname)}
                className={`px-3 py-1 rounded-full text-xs font-bold border ${selectedTags.includes(tname) ? "bg-primary text-white border-primary" : "bg-card border-border text-foreground"}`}
              >
                {tname}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                aria-label={lang === "ar" ? "مسح الفلتر" : "Clear filter"}
                onClick={() => setSelectedTags([])}
                className="ml-auto flex items-center gap-1 text-xs font-bold text-secondary hover:text-foreground"
              >
                <X className="w-3 h-3" /> {lang === "ar" ? "مسح الفلتر" : "Clear"}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project: ProjectItem, index: number) => (
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  <Link href={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
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
                <div className="flex justify-between items-center mt-auto">
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
                  <Link href={`/projects/${project.id}`} className="text-primary font-bold text-sm flex items-center gap-1 group/more">
                    {lang === 'ar' ? 'التفاصيل' : 'Details'}
                    {lang === 'ar' ? <ArrowLeft className="w-4 h-4 group-hover/more:-translate-x-1 transition-transform" /> : <ArrowRight className="w-4 h-4 group-hover/more:translate-x-1 transition-transform" />}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
