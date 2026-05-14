"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code, Palette, Rocket, CheckCircle2, Quote, Plus, Minus, Download, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { StatItem, SkillItem, SkillGridItem, ProjectItem, ExperienceItem, TestimonialItem, FAQItem, ServiceItem } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const { t, lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Redesigned to match brand image */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
        {/* Background Patterns (Subtle) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute top-1/4 left-1/4 rotate-12">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10,10 L90,90 M90,10 L10,90" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-1/4 -rotate-12">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="75" cy="75" r="50" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M200,50 L350,300 L50,300 Z" />
            </svg>
          </div>
        </div>

        {/* Left Side: Social Icons */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 hidden sm:flex">
          {[
            { icon: <Facebook className="w-5 h-5" />, href: "#" },
            { icon: <Twitter className="w-5 h-5" />, href: "#" },
            { icon: <Instagram className="w-5 h-5" />, href: "#" },
            { icon: <Linkedin className="w-5 h-5" />, href: "#" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-foreground/40 hover:text-primary transition-colors p-2"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Right Side: Scroll Down Indicator */}
        <div className="absolute right-6 md:right-12 bottom-12 z-20 hidden sm:block">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] rotate-90 origin-center translate-y-[-40px]">
              {lang === "ar" ? "انزل للأسفل" : "Scroll Down"}
            </span>
            <div className="w-[1px] h-12 bg-foreground/20 relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-primary" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Left: Numbering */}
        <div className="absolute left-6 md:left-12 bottom-12 z-20 hidden sm:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-end gap-2"
          >
            <span className="text-6xl md:text-8xl font-black text-foreground/5 dark:text-white/10 leading-none">01</span>
            <div className="h-[2px] w-12 bg-primary mb-4" />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
            {/* Profile Image with Blob */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[320px] md:max-w-[450px] aspect-square lg:order-1"
            >
              {/* Blob Background */}
              <div className="absolute inset-0 bg-secondary/10 dark:bg-white/5 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-blob" />
              <div className="absolute inset-4 bg-primary/10 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] animate-blob animation-delay-2000" />
              
              {/* Image Container */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-4 border-background shadow-2xl">
                <Image
                  src="/me.png"
                  alt={t.hero.name}
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={lang === "ar" ? "lg:text-right" : ""}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-4 uppercase">
                  <span className="block text-foreground">{lang === 'ar' ? 'مطور' : 'Creative'}</span>
                  <span className="block gradient-text">{lang === 'ar' ? 'مبدع' : 'Developer'}</span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-secondary font-medium tracking-[0.2em] uppercase mb-10"
                >
                  {t.hero.role}
                </motion.p>

                <div className={`flex flex-col sm:flex-row gap-6 justify-start items-center ${lang === "ar" ? "lg:justify-start" : "lg:justify-start"}`}>
                  <Link
                    href="/projects"
                    className="relative group overflow-hidden bg-foreground text-background px-10 py-4 rounded-none font-bold text-sm tracking-widest uppercase transition-all hover:bg-primary hover:text-white"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t.hero.cta_primary}
                      {lang === "ar" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="text-foreground/60 hover:text-primary font-bold text-sm tracking-widest uppercase transition-colors flex items-center gap-2 group"
                  >
                    {t.hero.cta_secondary}
                    <div className="w-8 h-[1px] bg-foreground/20 group-hover:w-12 group-hover:bg-primary transition-all" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Brand Refined */}
      <section className="py-20 border-y border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {t.stats.items.map((stat: StatItem, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                <div className="text-secondary text-xs md:text-sm font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section - Refined for Branding */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10 aspect-square overflow-hidden rounded-[2rem] border-8 border-card shadow-2xl">
                <Image 
                  src="/me.png" 
                  alt="Taha Hussein" 
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-full shadow-2xl z-20 hidden sm:block"
              >
                <div className="text-center">
                  <span className="block text-3xl font-black leading-none">+4</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'ar' ? 'سنوات خبرة' : 'Years Exp'}</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: lang === "ar" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">
                {lang === "ar" ? "من أنا؟" : "Who is Taha?"}
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                {lang === "ar" ? "أنا متخصص في بناء " : "Specialized in Building "}
                <span className="gradient-text">{lang === 'ar' ? 'لوحات تحكم ذكية' : 'Intelligent Dashboards'}</span>
              </h2>
              <p className="text-secondary text-xl mb-10 leading-relaxed font-medium">
                {t.about.desc}
              </p>
              
              <div className="space-y-6 mb-12">
                {t.about.skills.slice(0, 3).map((skill: SkillItem, i: number) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="font-black uppercase text-sm tracking-widest mb-1">{skill.title}</h3>
                      <p className="text-secondary text-sm">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-4 text-foreground font-black uppercase tracking-widest text-sm hover:gap-6 transition-all group"
              >
                {lang === 'ar' ? 'اقرأ المزيد عني' : 'Read More About Me'}
                <div className="w-12 h-[2px] bg-primary group-hover:w-16 transition-all" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services/Features Section - Brand Refined */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">
                {lang === "ar" ? "خدماتنا" : "Our Services"}
              </span>
              <h2 className="text-4xl md:text-5xl font-black">
                {lang === "ar" ? "حلول تقنية " : "Digital Solutions for "}
                <span className="gradient-text">{lang === 'ar' ? 'مبتكرة' : 'Your Business'}</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.items.map((service: ServiceItem, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-10 rounded-[2.5rem] border border-border hover:border-primary/50 transition-all group shadow-xl hover:shadow-primary/5"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {index === 0 && <Code className="w-8 h-8 text-primary" />}
                  {index === 1 && <Palette className="w-8 h-8 text-primary" />}
                  {index === 2 && <Rocket className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-secondary leading-relaxed font-medium">
                  {service.desc}
                </p>
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
            {t.about.skills_grid.map((skill: SkillGridItem, i: number) => (
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

      {/* Projects Section - Brand Refined */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">
                {lang === "ar" ? "أعمال مختارة" : "Selected Works"}
              </span>
              <h2 className="text-4xl md:text-5xl font-black">
                {lang === "ar" ? "مشاريع تعكس " : "Projects that reflect "}
                <span className="gradient-text">{lang === 'ar' ? 'القيمة والجودة' : 'Value & Quality'}</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-foreground font-black uppercase tracking-widest text-sm hover:text-primary transition-colors flex items-center gap-2 group"
            >
              {t.projects.view_all}
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-2 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {t.projects.items.slice(0, 4).map((project: ProjectItem, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-background border border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-2 mb-4">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-primary text-white rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-white">{project.title}</h3>
                    <Link 
                      href={`/projects`}
                      className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary hover:text-white transition-colors"
                    >
                      {lang === 'ar' ? 'تفاصيل المشروع' : 'View Project'}
                      <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    </Link>
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
            {t.experience.items.map((exp: ExperienceItem, i: number) => (
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
            {t.testimonials.items.map((item: TestimonialItem, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-3xl border border-border shadow-sm relative group"
              >
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
                <p className="text-secondary italic mb-8 relative z-10">&quot;{item.content}&ldquo;</p>
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
            {t.faq.items.map((item: FAQItem, i: number) => (
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
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-card border border-border/50 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl overflow-hidden group"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {lang === "ar" ? "متاح لمشاريع جديدة" : "Available for new projects"}
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                {t.cta_section.title}
              </h2>
              
              <p className="text-xl md:text-2xl text-secondary mb-12 leading-relaxed">
                {t.cta_section.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group/btn w-full sm:w-auto"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover/btn:opacity-100 transition duration-500" />
                  <Link
                    href="/contact"
                    className="relative bg-primary text-white px-10 py-5 rounded-full text-xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-primary/90"
                  >
                    {t.cta_section.primary}
                    {lang === "ar" ? <ArrowLeft className="w-6 h-6" /> : <ArrowRight className="w-6 h-6" />}
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="https://wa.me/201122889897"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-secondary/10 border-2 border-border text-foreground px-10 py-5 rounded-full text-xl font-bold flex items-center justify-center gap-3 transition-all"
                  >
                    <Rocket className="w-6 h-6 text-accent" />
                    {t.cta_section.secondary}
                  </Link>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 pt-12 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: lang === "ar" ? "خبرة" : "Experience", value: "+4 Years" },
                  { label: lang === "ar" ? "مشروع" : "Projects", value: "+50" },
                  { label: lang === "ar" ? "رضا العملاء" : "Satisfaction", value: "100%" },
                  { label: lang === "ar" ? "دعم" : "Support", value: "24/7" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-foreground">{item.value}</div>
                    <div className="text-sm text-secondary font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
