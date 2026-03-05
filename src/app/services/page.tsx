"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function ServicesPage() {
  const { t, lang } = useLanguage();

  const icons = [
    <Code key="0" className="w-12 h-12 text-primary" />,
    <Palette key="1" className="w-12 h-12 text-accent" />,
    <Rocket key="2" className="w-12 h-12 text-green-500" />,
  ];

  const features = [
    [
      lang === "ar" ? "تحسين محركات البحث (SEO)" : "SEO Optimization",
      lang === "ar" ? "سرعة تحميل فائقة" : "Blazing Fast Speed",
      lang === "ar" ? "تصميم متجاوب بالكامل" : "Fully Responsive Design",
    ],
    [
      lang === "ar" ? "تصميم واجهة مستخدم حديث" : "Modern UI Design",
      lang === "ar" ? "تجربة مستخدم سلسة" : "Seamless UX",
      lang === "ar" ? "هوية بصرية قوية" : "Strong Visual Identity",
    ],
    [
      lang === "ar" ? "تحليل البيانات" : "Data Analytics",
      lang === "ar" ? "تكامل مع أدوات التسويق" : "Marketing Tools Integration",
      lang === "ar" ? "دعم فني مستمر" : "Ongoing Support",
    ],
  ];

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.services.title}</h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg md:text-xl">
            {lang === "ar" 
              ? "نقدم حلولاً رقمية متكاملة تساعد عملك على النمو والازدهار في العالم الرقمي." 
              : "We provide integrated digital solutions that help your business grow and thrive in the digital world."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card p-10 rounded-[2.5rem] border border-border shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-10 -mt-10 transition-all group-hover:scale-110" />
              
              <div className="mb-8 p-5 bg-background rounded-3xl w-fit shadow-inner border border-border group-hover:scale-110 transition-transform">
                {icons[index]}
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-secondary mb-8 leading-relaxed text-lg">
                {service.desc}
              </p>

              <ul className="space-y-4 mb-10">
                {features[index].map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-bold text-primary group/link"
              >
                {lang === "ar" ? "احصل على استشارة مجانية" : "Get a free consultation"}
                {lang === "ar" ? (
                  <ArrowLeft className="w-5 h-5 group-hover/link:-translate-x-2 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 bg-primary p-12 md:p-20 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mb-32" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">
            {lang === "ar" ? "جاهز لبدء مشروعك القادم؟" : "Ready to start your next project?"}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg md:text-xl relative z-10">
            {lang === "ar" 
              ? "دعنا نناقش كيف يمكن لخبراتنا التقنية أن تحول رؤيتك إلى واقع رقمي مبهر." 
              : "Let's discuss how our technical expertise can turn your vision into a stunning digital reality."}
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-white/90 transition-all inline-flex items-center gap-3 relative z-10 shadow-xl"
          >
            {t.nav.cta}
            {lang === "ar" ? <ArrowLeft className="w-6 h-6" /> : <ArrowRight className="w-6 h-6" />}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
