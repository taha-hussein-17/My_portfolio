import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/context/Providers";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "طه بورتفوليو | مطور واجهات أمامية محترف",
  description: "اكتشف أعمال طه في تطوير تطبيقات الويب والواجهات الأمامية باستخدام Next.js و React. تصاميم عصرية وأداء عالٍ.",
  keywords: ["مطور ويب", "برمجة", "Next.js", "React", "بورتفوليو", "تصميم واجهات"],
  authors: [{ name: "طه" }],
  icons: {
    icon: "/me.png",
    apple: "/me.png",
  },
  openGraph: {
    title: "طه بورتفوليو | مطور واجهات أمامية محترف",
    description: "أجمل بورتفوليو في العالم مصمم بأحدث التقنيات",
    url: "https://taha-portfolio.com",
    siteName: "طه بورتفوليو",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} antialiased font-sans bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Providers > 
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
