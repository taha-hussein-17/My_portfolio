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
  title: "Taha Hussein | SaaS Dashboard & Scalable Architecture Expert",
  description:
    "I build high-performance SaaS dashboards with real-time data and scalable architecture using Next.js and React. Specialized in large-scale web applications.",
  keywords: [
    "SaaS Dashboard",
    "Scalable Architecture",
    "Real-time Data",
    "Next.js Expert",
    "React Developer",
    "Large-scale Apps",
    "Frontend Architecture",
    "High-performance UI",
  ],
  authors: [{ name: "طه حسين" }, { name: "Taha Hussein" }],
  icons: {
    icon: "/me.png",
    apple: "/me.png",
  },
  openGraph: {
    title: "Taha Hussein | SaaS Dashboard & Scalable Architecture Expert",
    description:
      "I build high-performance SaaS dashboards with real-time data and scalable architecture using Next.js and React.",
    url: "https://taha-portfolio.com",
    siteName: "Taha Hussein Portfolio",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/me.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Hussein | SaaS Dashboard & Scalable Architecture Expert",
    description:
      "I build high-performance SaaS dashboards with real-time data and scalable architecture using Next.js and React.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "vQeAcGZbpyKH39W63nQ6LTab0Ac8MqjseMePeJlyMi8",
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
              jobTitle: "SaaS Dashboard & Scalable Architecture Expert",
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
