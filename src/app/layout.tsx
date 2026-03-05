import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://taha-portfolio.com"),
  title: "طه بورتفوليو | مطور واجهات أمامية محترف",
  description:
    "اكتشف أعمال طه في تطوير تطبيقات الويب والواجهات الأمامية باستخدام Next.js و React. تصاميم عصرية وأداء عالٍ.",
  keywords: [
    "مطور ويب",
    "برمجة",
    "Next.js",
    "React",
    "بورتفوليو",
    "تصميم واجهات",
    "Landing Pages",
    "Dashboards",
    "Figma to Code",
  ],
  authors: [{ name: "طه حسين" }, { name: "Taha Hussein" }],
  icons: {
    icon: "/me.png",
    apple: "/me.png",
  },
  openGraph: {
    title: "طه بورتفوليو | مطور واجهات أمامية محترف",
    description:
      "بورتفوليو احترافي يعرض أعمال Next.js و React مع تركيز على الأداء والتحويل.",
    url: "https://taha-portfolio.com",
    siteName: "طه بورتفوليو",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "طه بورتفوليو | مطور واجهات أمامية محترف",
    description:
      "بورتفوليو احترافي يعرض أعمال Next.js و React مع تركيز على الأداء والتحويل.",
  },
  robots: {
    index: true,
    follow: true,
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
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Taha Hussein",
              alternateName: "طه حسين",
              jobTitle: "Frontend Developer",
              url: "https://taha-portfolio.com",
              sameAs: [
                "https://github.com/taha-hussein-17"
              ]
            }),
          }}
        />
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
