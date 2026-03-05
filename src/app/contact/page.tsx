"use client";

import { motion } from "framer-motion";
import { Send, Phone, MapPin, Mail, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree for a simple, working solution without a backend key
      // Formspree will automatically send messages to your email: capootaha17@gmail.com
      const response = await fetch("https://formspree.io/f/xvgzovzw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _to: "capootaha17@gmail.com",
          _subject: `Portfolio Message: ${formData.subject}`
        }),
      });

      if (response.ok) {
        Swal.fire({
          title: lang === "ar" ? "تم الإرسال بنجاح!" : "Message Sent!",
          text: lang === "ar" 
            ? "شكراً لتواصلك معي. هرد عليك في أقرب وقت ممكن." 
            : "Thank you for reaching out. I'll get back to you as soon as possible.",
          icon: "success",
          confirmButtonText: lang === "ar" ? "حسناً" : "OK",
          confirmButtonColor: "#3b82f6",
          customClass: {
            popup: 'rounded-3xl border-border',
          }
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      Swal.fire({
        title: lang === "ar" ? "عذراً!" : "Oops!",
        text: lang === "ar" 
          ? "حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى." 
          : "An error occurred while sending the message. Please try again.",
        icon: "error",
        confirmButtonText: lang === "ar" ? "حسناً" : "OK",
        confirmButtonColor: "#3b82f6",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-secondary max-w-xl mx-auto text-lg">
            {t.contact.subtitle}
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 ${lang === "ar" ? "text-right" : "text-left"}`}>
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-8">
            {[
              { icon: <Mail className="w-6 h-6" />, title: t.contact.email, value: "capootaha17@gmail.com" },
              { icon: <Phone className="w-6 h-6" />, title: t.contact.phone, value: "+201122889897" },
              { icon: <MapPin className="w-6 h-6" />, title: t.contact.location, value: lang === "ar" ? "القاهرة، مصر" : "Cairo, Egypt" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex gap-4 items-center ${lang === "ar" ? "justify-end" : "justify-start"}`}
              >
                {lang === "en" && (
                  <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                    {item.icon}
                  </div>
                )}
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-secondary">{item.value}</p>
                </div>
                {lang === "ar" && (
                  <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                    {item.icon}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="md:col-span-2">
            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-xl space-y-6 relative overflow-hidden"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-sm font-bold block ${lang === "ar" ? "mr-2" : "ml-2"}`}>{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.placeholders.name}
                    className="w-full px-6 py-3 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-sm font-bold block ${lang === "ar" ? "mr-2" : "ml-2"}`}>{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.placeholders.email}
                    className="w-full px-6 py-3 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-bold block ${lang === "ar" ? "mr-2" : "ml-2"}`}>{t.contact.form.subject}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.placeholders.subject}
                  className="w-full px-6 py-3 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-bold block ${lang === "ar" ? "mr-2" : "ml-2"}`}>{t.contact.form.message}</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.placeholders.message}
                  className="w-full px-6 py-3 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    {t.contact.form.send}
                    <Send className={`w-5 h-5 ${lang === "ar" ? "rotate-180" : ""}`} />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
