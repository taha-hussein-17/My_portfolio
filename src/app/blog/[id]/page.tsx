"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Tag, Clock, User } from "lucide-react";

export default function BlogPost() {
  const { t, lang } = useLanguage();
  const { id } = useParams();

  const post = t.blog.items.find((item) => item.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8 group"
          >
            {lang === "ar" ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            {lang === "ar" ? "العودة للمدونة" : "Back to Blog"}
          </Link>

          <div className="flex items-center gap-4 text-secondary text-sm mb-6">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>10 min read</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-12 pb-12 border-b border-border">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
              <Image src="/me.png" alt="Taha Hussein" fill className="object-cover" />
            </div>
            <div>
              <div className="font-bold">{lang === "ar" ? "طه حسين" : "Taha Hussein"}</div>
              <div className="text-secondary text-sm">Senior Frontend Architect</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video mb-16 rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div className="whitespace-pre-wrap leading-relaxed text-secondary-foreground">
            {post.content}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-primary/5 rounded-[2rem] border border-primary/10 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            {lang === "ar" ? "هل تبحث عن بناء لوحة تحكم SaaS لشركتك؟" : "Looking to build a SaaS dashboard for your business?"}
          </h3>
          <p className="text-secondary mb-8 max-w-xl mx-auto">
            {lang === "ar" 
              ? "بساعد الشركات الناشئة على بناء منتجات رقمية قابلة للتوسع وسريعة الأداء." 
              : "I help startups build scalable, high-performance digital products."}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg"
          >
            {lang === "ar" ? "تواصل معي الآن" : "Let's Talk"}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
