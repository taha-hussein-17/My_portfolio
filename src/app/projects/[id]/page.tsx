"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2, Layout, Shield, Zap } from "lucide-react";
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
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-video rounded-[2.5rem] overflow-hidden border-8 border-card shadow-2xl sticky top-32"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                { 
                  icon: <Layout className="w-6 h-6 text-green-500" />, 
                  title: lang === "ar" ? "النتيجة النهائية" : "The Result", 
                  content: project.result,
                  bg: "bg-green-500/5"
                },
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
