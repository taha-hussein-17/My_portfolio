"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, FileText } from "lucide-react";
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

          <div className="flex gap-6">
            <a 
              href={t.hero.cv_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-secondary hover:text-primary transition-colors flex items-center gap-1"
              title={t.hero.download_cv}
            >
              <FileText className="w-6 h-6" />
            </a>
            <a href="https://github.com/taha-hussein-17" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-secondary text-sm">
          <p>© {new Date().getFullYear()} {lang === "ar" ? "طه بورتفوليو" : "Taha Portfolio"}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
