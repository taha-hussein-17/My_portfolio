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
          <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">
            {lang === "ar" ? "معرض الأعمال" : "Portfolio"}
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">{t.projects.title}</h1>
          <p className="text-secondary max-w-2xl mx-auto text-xl font-medium">
            {t.projects.view_all}
          </p>
        </motion.div>

        {/* Controls - Refined */}
        <div className="bg-card/50 backdrop-blur-md border border-border rounded-[2rem] p-8 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <input
                aria-label={lang === "ar" ? "ابحث في المشاريع" : "Search projects"}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={lang === "ar" ? "ابحث بالعنوان أو التقنية..." : "Search by title or tech..."}
                className="w-full px-6 py-4 rounded-2xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary font-medium"
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-black uppercase tracking-widest text-secondary">{lang === "ar" ? "الترتيب" : "Sort"}</span>
              <select
                aria-label={lang === "ar" ? "ترتيب المشاريع" : "Sort projects"}
                value={sort}
                onChange={(e) => setSort(e.target.value as "alpha" | "tags")}
                className="px-4 py-3 rounded-xl border border-border bg-background font-bold text-sm"
              >
                <option value="alpha">{lang === "ar" ? "أبجدي" : "Alphabetical"}</option>
                <option value="tags">{lang === "ar" ? "الأكثر تقنيات" : "Most tags"}</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => setSelectedTags([])}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border transition-all ${selectedTags.length === 0 ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-card border-border text-foreground hover:border-primary/50"}`}
            >
              {lang === "ar" ? "الكل" : "All"}
            </button>
            {allTags.map((tname) => (
              <button
                key={tname}
                onClick={() => toggleTag(tname)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border transition-all ${selectedTags.includes(tname) ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-card border-border text-foreground hover:border-primary/50"}`}
              >
                {tname}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((project: ProjectItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-[2.5rem] overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl cursor-pointer active:border-primary/50"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 group-active:grayscale-0 group-active:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-8">
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-primary group-active:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary mb-8 text-sm leading-relaxed font-medium line-clamp-2">
                    {project.desc}
                  </p>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-border">
                    <div className="flex gap-6">
                      <div className="text-foreground/40 hover:text-primary transition-colors" title={t.projects.preview}>
                        <ExternalLink className="w-5 h-5" />
                      </div>
                      <div className="text-foreground/40 hover:text-primary transition-colors" title={t.projects.code}>
                        <Github className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 group/more">
                      {lang === 'ar' ? 'التفاصيل' : 'Details'}
                      <ArrowRight className={`w-4 h-4 group-hover/more:translate-x-2 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
