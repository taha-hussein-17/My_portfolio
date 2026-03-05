"use client";

import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.blog.title}</h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg md:text-xl">
            {lang === "ar" 
              ? "نشارككم خبراتنا ورؤيتنا حول أحدث تقنيات تطوير الويب وتصميم الواجهات." 
              : "We share our experiences and insights on the latest web development technologies and UI design."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {t.blog.items.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-[2.5rem] border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-primary/90 text-white px-4 py-2 rounded-xl text-sm font-bold backdrop-blur-md">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 text-secondary text-sm mb-4 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-secondary text-lg mb-8 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 font-bold text-primary group/link text-lg"
                >
                  {lang === "ar" ? "اقرأ المزيد" : "Read More"}
                  {lang === "ar" ? (
                    <ArrowLeft className="w-5 h-5 group-hover/link:-translate-x-2 transition-transform" />
                  ) : (
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                  )}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 bg-card rounded-[3rem] border border-border text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === "ar" ? "اشترك في نشرتنا البريدية" : "Subscribe to our Newsletter"}
          </h2>
          <p className="text-secondary text-lg mb-10 max-w-xl mx-auto">
            {lang === "ar" 
              ? "احصل على أحدث المقالات والنصائح التقنية مباشرة في بريدك الإلكتروني." 
              : "Get the latest articles and technical tips directly in your inbox."}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={lang === "ar" ? "بريدك الإلكتروني" : "Your email address"}
              className="flex-grow px-6 py-4 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all"
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg whitespace-nowrap"
            >
              {lang === "ar" ? "اشترك الآن" : "Subscribe Now"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
