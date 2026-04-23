"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold gradient-text">
              {lang === "ar" ? "طه حسين" : "Taha Hussein"}
            </Link>
            <p className="mt-4 text-secondary max-w-xs">
              {t.footer.desc}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="space-y-4 text-center md:text-right">
              <h3 className="font-bold text-lg">{lang === "ar" ? "روابط سريعة" : "Quick Links"}</h3>
              <ul className="space-y-2">
                <li><Link href="/projects" className="text-secondary hover:text-primary transition-colors">{t.nav.projects}</Link></li>
                <li><Link href="/services" className="text-secondary hover:text-primary transition-colors">{t.nav.services}</Link></li>
                <li><Link href="/blog" className="text-secondary hover:text-primary transition-colors">{t.nav.blog}</Link></li>
                <li><Link href="/faq" className="text-secondary hover:text-primary transition-colors">{t.faq.title}</Link></li>
              </ul>
            </div>
            <div className="space-y-4 text-center md:text-right">
              <h3 className="font-bold text-lg">{lang === "ar" ? "تواصل معي" : "Connect"}</h3>
              <div className="flex gap-4 justify-center md:justify-end">
                <a href="https://github.com/taha-hussein-17" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/10 rounded-xl text-secondary hover:text-primary transition-all hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="p-2 bg-secondary/10 rounded-xl text-secondary hover:text-primary transition-all hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/taha-hussein-9abab3201" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/10 rounded-xl text-secondary hover:text-primary transition-all hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://wa.me/201122889897" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/10 rounded-xl text-secondary hover:text-primary transition-all hover:scale-110">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="mailto:capootaha17@gmail.com" className="p-2 bg-secondary/10 rounded-xl text-secondary hover:text-primary transition-all hover:scale-110">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-secondary text-sm">
          <p>© {new Date().getFullYear()} {lang === "ar" ? "طه بورتفوليو" : "Taha Portfolio"}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
