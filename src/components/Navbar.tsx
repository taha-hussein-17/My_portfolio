"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Mail, Sun, Moon, Languages } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: t.nav.home, href: "/", icon: <Home className="w-4 h-4" /> },
    { name: t.nav.projects, href: "/projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: t.nav.about, href: "/about", icon: <User className="w-4 h-4" /> },
    { name: t.nav.contact, href: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-background/70 backdrop-blur-xl shadow-2xl border-b border-white/10 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-lg"
            >
              <Image 
                src="/me.png" 
                alt="Logo" 
                fill 
                className="object-cover"
              />
            </motion.div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              {lang === "ar" ? "طه حسين" : "Taha Hussein"}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-all flex items-center gap-2 font-medium relative group"
                >
                  {link.icon}
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          
          <div className="h-6 w-[1px] bg-border mx-2" />

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-secondary/10 transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            {!mounted && <div className="w-5 h-5" />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="p-2 rounded-full hover:bg-secondary/10 transition-colors flex items-center gap-2 font-bold text-sm text-foreground"
          >
            <Languages className="w-5 h-5" />
            {lang === "ar" ? "EN" : "عربي"}
          </button>

          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-foreground/5"
          >
            {mounted && (theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            {!mounted && <div className="w-5 h-5" />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t mt-4 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-3 text-lg"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setLang(lang === "ar" ? "en" : "ar");
                  setIsOpen(false);
                }}
                className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-3 text-lg"
              >
                <Languages className="w-5 h-5" />
                {lang === "ar" ? "English" : "العربية"}
              </button>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white text-center px-6 py-3 rounded-xl hover:bg-primary/90 transition-all"
              >
                {t.nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
