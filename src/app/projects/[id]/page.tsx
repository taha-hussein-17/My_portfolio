"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2, Layout, Shield, Zap, Cpu, Gauge, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";

export default function ProjectDetails() {
  const { t, lang } = useLanguage();
  const { id } = useParams();
  const router = useRouter();

  const project = useMemo(() => {
    return t.projects.items.find((p) => p.id === id);
  }, [t.projects.items, id]);

  if (!project) {
    return (
      <div className="py-20 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">
          {lang === "ar" ? "المشروع غير موجود" : "Project Not Found"}
        </h1>
        <Link href="/projects" className="text-primary font-bold hover:underline">
          {lang === "ar" ? "العودة للمشاريع" : "Back to Projects"}
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-12 font-bold group"
        >
          {lang === "ar" ? (
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          ) : (
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          )}
          {lang === "ar" ? "العودة" : "Back"}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Project Image - Refined Sticky */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-border shadow-2xl group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Quick Stats Overlay (Optional/Subtle) */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {project.tags.slice(0, 2).map((tag, i) => (
                <div key={i} className="bg-card/50 backdrop-blur-sm border border-border p-4 rounded-2xl text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Tech</div>
                  <div className="text-sm font-bold text-primary">{tag}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-4 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-secondary text-xl leading-relaxed">
                {project.full_desc || project.desc}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                {t.projects.preview}
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card text-foreground border border-border px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-secondary/10 transition-all"
              >
                <Github className="w-5 h-5" />
                {t.projects.code}
              </a>
            </div>

            {/* Metrics Section */}
            {project.metrics && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="bg-card p-6 rounded-3xl border border-border text-center group hover:border-primary transition-all">
                    <div className="text-2xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                      {metric.value}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-secondary">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Architecture Decisions */}
            {project.architecture_decisions && (
              <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter">
                  {lang === "ar" ? "قرارات المعمارية البرمجية" : "Architecture Decisions"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.architecture_decisions.map((decision, i) => (
                    <div key={i} className="bg-card p-8 rounded-[2rem] border border-border hover:shadow-xl transition-all">
                      <h4 className="text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {decision.title}
                      </h4>
                      <p className="text-secondary leading-relaxed font-medium">
                        {decision.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Before / After */}
            {project.before_after && (
              <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter">
                  {lang === "ar" ? "قبل وبعد التحسين" : "Before & After Optimization"}
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {project.before_after.map((item, i) => (
                    <div key={i} className="bg-card p-8 rounded-[2rem] border border-border overflow-hidden relative group">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="text-center md:text-left flex-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2 block">Before</span>
                          <div className="text-3xl font-black text-red-500/50">{item.before}</div>
                        </div>
                        <div className="h-12 w-[1px] bg-border hidden md:block" />
                        <div className="text-center flex-1">
                          <div className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-2">{item.label}</div>
                          <div className="w-12 h-1 bg-primary mx-auto" />
                        </div>
                        <div className="h-12 w-[1px] bg-border hidden md:block" />
                        <div className="text-center md:text-right flex-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2 block">After</span>
                          <div className="text-3xl font-black text-green-500">{item.after}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem/Solution Grid */}
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  icon: <Shield className="w-6 h-6 text-red-500" />, 
                  title: lang === "ar" ? "المشكلة" : "The Problem", 
                  content: project.problem,
                  bg: "bg-red-500/5"
                },
                { 
                  icon: <Zap className="w-6 h-6 text-yellow-500" />, 
                  title: lang === "ar" ? "الحل التقني" : "The Solution", 
                  content: project.solution,
                  bg: "bg-yellow-500/5"
                },
                ...(project.technique ? [{
                  icon: <Wrench className="w-6 h-6 text-orange-500" />, 
                  title: lang === "ar" ? "التكنيك المستخدم" : "The Technique", 
                  content: project.technique,
                  bg: "bg-orange-500/5"
                }] : []),
                { 
                  icon: <Layout className="w-6 h-6 text-green-500" />, 
                  title: lang === "ar" ? "النتيجة النهائية" : "The Result", 
                  content: project.result,
                  bg: "bg-green-500/5"
                },
                ...(project.architecture ? [{
                  icon: <Cpu className="w-6 h-6 text-blue-500" />, 
                  title: lang === "ar" ? "الهيكل البرمجي (Architecture)" : "Architecture", 
                  content: project.architecture,
                  bg: "bg-blue-500/5"
                }] : []),
                ...(project.performance ? [{
                  icon: <Gauge className="w-6 h-6 text-purple-500" />, 
                  title: lang === "ar" ? "الأداء (Performance)" : "Performance", 
                  content: project.performance,
                  bg: "bg-purple-500/5"
                }] : []),
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-[2rem] border border-border/50 ${item.bg}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {item.icon}
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-secondary leading-relaxed text-lg">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Features List */}
            {project.features && (
              <div className="bg-card p-10 rounded-[2.5rem] border border-border shadow-inner">
                <h3 className="text-2xl font-bold mb-8">
                  {lang === "ar" ? "أبرز المميزات" : "Key Features"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="font-bold text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Screenshots Grid */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">
                  {lang === "ar" ? "لقطات الشاشة" : "Project Screenshots"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.screenshots.map((shot, i) => (
                    <div key={i} className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-shadow group">
                      <Image
                        src={shot}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
