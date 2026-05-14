"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-background border-t border-border py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
            <Link href="/" className="text-3xl font-black uppercase tracking-tighter">
              {lang === "ar" ? "طه حسين" : "Taha Hussein"}
            </Link>
            <p className="mt-6 text-secondary text-lg font-medium leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h3 className="font-black uppercase tracking-[0.2em] text-xs text-primary">{lang === "ar" ? "روابط سريعة" : "Quick Links"}</h3>
              <ul className="space-y-4">
                <li><Link href="/projects" className="text-secondary font-black uppercase tracking-widest text-[10px] hover:text-primary transition-colors">{t.nav.projects}</Link></li>
                <li><Link href="/services" className="text-secondary font-black uppercase tracking-widest text-[10px] hover:text-primary transition-colors">{t.nav.services}</Link></li>
                <li><Link href="/blog" className="text-secondary font-black uppercase tracking-widest text-[10px] hover:text-primary transition-colors">{t.nav.blog}</Link></li>
                <li><Link href="/faq" className="text-secondary font-black uppercase tracking-widest text-[10px] hover:text-primary transition-colors">{t.faq.title}</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="font-black uppercase tracking-[0.2em] text-xs text-primary">{lang === "ar" ? "تواصل معي" : "Connect"}</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/taha-hussein-17" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/taha-hussein-9abab3201" },
                  { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/201122889897" },
                  { icon: <Mail className="w-5 h-5" />, href: "mailto:capootaha17@gmail.com" },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-card border border-border rounded-xl text-secondary hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-secondary font-black uppercase tracking-[0.2em] text-[10px]">
          <p>© {new Date().getFullYear()} {lang === "ar" ? "طه بورتفوليو" : "Taha Portfolio"}. {t.footer.rights}</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
