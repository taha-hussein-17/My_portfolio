"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code, Palette, Rocket, CheckCircle2, Quote, Plus, Minus, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { StatItem, SkillItem, SkillGridItem, ProjectItem, ExperienceItem, TestimonialItem, FAQItem, ServiceItem } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const { t, lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [displayedRole, setDisplayedRole] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullRole = t.hero.role;

  useEffect(() => {
    if (!fullRole) return;

    const isAtEnd = charIndex === fullRole.length;
    const isAtStart = charIndex === 0;

    const typingSpeed = isDeleting ? 60 : 120;
    const pauseDuration = 1600;

    const timeoutDuration =
      !isDeleting && isAtEnd ? pauseDuration : typingSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < fullRole.length) {
        const nextIndex = charIndex + 1;
        setDisplayedRole(fullRole.slice(0, nextIndex));
        setCharIndex(nextIndex);
      } else if (!isDeleting && isAtEnd) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        const nextIndex = charIndex - 1;
        setDisplayedRole(fullRole.slice(0, nextIndex));
        setCharIndex(nextIndex);
      } else if (isDeleting && isAtStart) {
        setIsDeleting(false);
      }
    }, timeoutDuration);

    return () => clearTimeout(timeout);
  }, [charIndex, fullRole, isDeleting]);

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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                <span>{displayedRole || fullRole}</span>
                <span className="inline-block w-[2px] h-4 md:h-5 bg-primary animate-pulse" />
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight">
              {lang === 'ar' ? 'أنا ' : "I'm "}<span className="gradient-text">{t.hero.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-foreground/80">
              {t.hero.title}
            </h2>

            <p className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
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
              <Link
                href="/contact"
                className="bg-accent text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group shadow-xl w-full sm:w-auto"
              >
                {t.hero.cta_secondary}
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
            {t.stats.items.map((stat: StatItem, i: number) => (
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
              <div className="relative z-10 w-full h-full bg-card rounded-[2.5rem] overflow-hidden border-8 border-background shadow-2xl min-h-[400px]">
                <Image 
                  src="/me.png" 
                  alt="Taha Hussein" 
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
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
                {t.about.skills.slice(0, 2).map((skill: SkillItem, i: number) => (
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
            {t.services.items.map((service: ServiceItem, index: number) => (
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
            {t.projects.items.slice(0, 2).map((project: ProjectItem, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-3xl aspect-video bg-card border border-border shadow-sm hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 p-6 flex flex-col justify-end">
                  <div className="flex gap-2 mb-3">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-0.5 bg-primary text-white rounded-full uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-[10px] text-foreground/90 leading-tight"><span className="font-bold text-primary">{lang === 'ar' ? 'المشكلة: ' : 'Problem: '}</span>{project.problem}</p>
                    <p className="text-[10px] text-foreground/90 leading-tight"><span className="font-bold text-primary">{lang === 'ar' ? 'الحل: ' : 'Solution: '}</span>{project.solution}</p>
                    <p className="text-[10px] text-foreground/90 leading-tight"><span className="font-bold text-primary">{lang === 'ar' ? 'النتيجة: ' : 'Result: '}</span>{project.result}</p>
                  </div>

                  <div className="flex gap-3">
                    <Link href={`/projects`} className="bg-primary text-white px-5 py-2 rounded-full font-bold hover:bg-primary/90 transition-colors text-xs">
                      {t.projects.details}
                    </Link>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-foreground px-4 py-2 rounded-full font-bold hover:bg-white/20 transition-colors text-xs flex items-center gap-2">
                      <Code className="w-3 h-3" />
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
