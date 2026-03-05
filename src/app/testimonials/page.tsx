"use client";

import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function TestimonialsPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.testimonials.title}</h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg md:text-xl">
            {lang === "ar" 
              ? "فخور جداً بثقة عملائي، وهذا ما يقولونه عن تجربتهم في العمل معي." 
              : "I am very proud of my clients' trust, and this is what they say about their experience working with me."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-lg relative group hover:shadow-2xl transition-all"
            >
              <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < (testimonial.rating || 5) ? "fill-yellow-400 text-yellow-400" : "text-border"}`} />
                ))}
              </div>

              <p className="text-secondary text-lg mb-8 leading-relaxed italic relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {testimonial.image ? (
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      fill 
                      className="object-cover"
                    />
                  ) : (
                    <User className="w-8 h-8 text-primary/40" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-secondary font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-border">
          {[
            { label: lang === "ar" ? "عملاء سعداء" : "Happy Clients", value: "50+" },
            { label: lang === "ar" ? "معدل التقييم" : "Avg Rating", value: "4.9/5" },
            { label: lang === "ar" ? "مشاريع ناجحة" : "Total Projects", value: "80+" },
            { label: lang === "ar" ? "سنوات الخبرة" : "Years Exp", value: "4+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-secondary font-bold text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
