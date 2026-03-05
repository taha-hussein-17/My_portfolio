import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أعمالي | طه حسين",
  description:
    "مختارات من أعمالي في تطوير واجهات أمامية باستخدام React و Next.js مع تركيز على الأداء والتصميم.",
  alternates: {
    canonical: "https://taha-portfolio.com/projects",
  },
  openGraph: {
    title: "أعمالي | طه حسين",
    description:
      "مشاريع مختارة توضح أسلوبي في بناء واجهات حديثة وسريعة التحميل.",
    url: "https://taha-portfolio.com/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "أعمالي | طه حسين",
    description:
      "تعرّف على أفضل مشاريعي في تطوير الواجهات الأمامية باستخدام Next.js.",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

