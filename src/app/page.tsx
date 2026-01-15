"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code, Palette, Rocket, Star, CheckCircle2, Quote, ChevronDown, Plus, Minus, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function Home() {
  const { t, lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {lang === "ar" ? (
                <>أصنع <span className="gradient-text">مستقبل الويب</span> <br /> بلمسة فنية إبداعية</>
              ) : (
                <>Crafting the <span className="gradient-text">Future of Web</span> <br /> with Creative Touch</>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-10 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/projects"
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-xl w-full sm:w-auto"
              >
                {t.hero.cta_primary}
                {lang === "ar" ? (
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </Link>
              <a
                href={t.hero.cv_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card text-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary/10 transition-all border border-border flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <Download className="w-5 h-5 group-hover:bounce transition-transform" />
                {t.hero.download_cv}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.items.map((stat: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-secondary text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section (Added) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto md:mx-0"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative z-10 w-full h-full bg-card rounded-[2.5rem] overflow-hidden border-8 border-background shadow-2xl">
                <img 
                  src="/me.jpeg" 
                  alt="Taha Hussein" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: lang === "ar" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {lang === "ar" ? "من هو " : "Who is "}
                <span className="gradient-text">طه حسين؟</span>
              </h2>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                {t.about.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {t.about.skills.slice(0, 2).map((skill: any, i: number) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-bold">{skill.title}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
              >
                {t.hero.cta_secondary}
                {lang === "ar" ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-8 rounded-3xl shadow-lg border border-foreground/5 hover:border-primary/50 transition-all group"
              >
                <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {index === 0 && <Code className="w-10 h-10 text-primary" />}
                  {index === 1 && <Palette className="w-10 h-10 text-accent" />}
                  {index === 2 && <Rocket className="w-10 h-10 text-green-500" />}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-secondary leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {lang === "ar" ? "مهاراتي التقنية" : "Technical Skills"}
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.about.skills_grid.map((skill: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-6 rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-all group"
              >
                <div className="flex justify-between mb-4 items-center">
                  <span className="font-bold text-lg">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary rounded-full group-hover:bg-accent transition-colors"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
              <div className="w-20 h-1.5 bg-accent rounded-full" />
            </div>
            <Link href="/projects" className="text-primary font-bold hover:underline flex items-center gap-2">
              {t.projects.view_all} {lang === "ar" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {t.projects.items.slice(0, 2).map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-3xl aspect-video bg-card border border-border shadow-sm hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 p-8 flex flex-col justify-end">
                  <div className="flex gap-2 mb-4">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-0.5 bg-primary text-white rounded-full uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-foreground/80 mb-6 line-clamp-2">{project.desc}</p>
                  <div className="flex gap-4">
                    <Link href={`/projects`} className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary/90 transition-colors text-sm">
                      {t.projects.details}
                    </Link>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-foreground px-4 py-2 rounded-full font-bold hover:bg-white/20 transition-colors text-sm flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            {t.experience.items.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex gap-8 mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10 bg-card">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="w-0.5 h-full bg-border absolute top-10" />
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
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-3xl border border-border shadow-sm relative group"
              >
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
                <p className="text-secondary italic mb-8 relative z-10">"{item.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-xs text-secondary">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.faq.title}</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-right gap-4 hover:bg-secondary/5 transition-colors"
                >
                  <span className="font-bold text-lg text-start">{item.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-primary flex-shrink-0" /> : <Plus className="w-5 h-5 text-primary flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-secondary leading-relaxed border-t border-border/50">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-accent p-12 md:p-20 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">
              {lang === "ar" ? "هل أنت مستعد لبدء مشروعك القادم؟" : "Ready to start your next project?"}
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto relative z-10">
              {lang === "ar" 
                ? "دعنا نحول فكرتك إلى حقيقة رقمية ملموسة. أنا متاح للمشاريع الجديدة والتعاون الإبداعي." 
                : "Let's turn your idea into a tangible digital reality. I'm available for new projects and creative collaborations."}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link
                href="/contact"
                className="bg-white text-primary px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all"
              >
                {t.nav.cta}
              </Link>
              <Link
                href="/projects"
                className="bg-transparent border-2 border-white/30 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all"
              >
                {t.projects.view_all}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
