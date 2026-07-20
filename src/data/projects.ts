import { ProjectItem } from "@/types";
import img1 from "@/assets/images/kaily-p/Screenshot 2026-07-20 143604.png";
import img2 from "@/assets/images/kaily-p//Screenshot 2026-07-20 143723.png";
export interface ProjectData {
  id: string;
  tags: string[];
  link: string;
  demo: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: string | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  screenshots?: string[] | any[];
  metrics?: { label: string; value: string }[];
  architecture_decisions?: { title: string; desc: string }[];
  before_after?: { label: string; before: string; after: string; type: 'image' | 'text' }[];
  ar: {
    title: string;
    desc: string;
    problem: string;
    solution: string;
    result: string;
    full_desc?: string;
    features?: string[];
    architecture?: string;
    performance?: string;
    technique?: string;
  };
  en: {
    title: string;
    desc: string;
    problem: string;
    solution: string;
    result: string;
    full_desc?: string;
    features?: string[];
    architecture?: string;
    performance?: string;
    technique?: string;
  };
}

export const projectsData: ProjectData[] = [
  {
  id: "kaily-p",
  tags: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "REST API",
    "Performance Optimization"
  ],
  link: "https://kaily-p.com/home",
  demo: "https://kaily-p.com/home",
  image: img1,
  screenshots: [img2, img1],

  metrics: [
    { label: "Responsive", value: "100%" },
    { label: "Pages", value: "20+" },
    { label: "Performance", value: "95+" },
    { label: "SEO Score", value: "90+" }
  ],

  architecture_decisions: [
    {
      title: "Next.js App Router",
      desc: "Used for scalable routing, server rendering, and improved performance."
    },
    {
      title: "Component-Based Architecture",
      desc: "Built reusable UI components to simplify maintenance and feature development."
    },
    {
      title: "API Integration",
      desc: "Integrated backend APIs for products, authentication, orders, and dynamic content."
    }
  ],

  before_after: [
    {
      label: "Lighthouse Performance",
      before: "72",
      after: "95",
      type: "text"
    },
    {
      label: "First Load JS",
      before: "320 KB",
      after: "145 KB",
      type: "text"
    }
  ],

  ar: {
    title: "Kaily-P E-commerce Platform",
    desc: "منصة تجارة إلكترونية حديثة توفر تجربة تسوق سريعة وسلسة مع أداء عالٍ وتصميم متجاوب.",
    problem:
      "كان التحدي هو بناء متجر إلكتروني سريع وقابل للتوسع مع الحفاظ على تجربة مستخدم ممتازة على جميع الأجهزة.",
    solution:
      "تم تطوير المشروع باستخدام Next.js وReact مع تحسين الأداء، وتقسيم المكونات، وتحسين تحميل الصور والبيانات.",
    technique:
      "Next.js App Router، Server Components، Tailwind CSS، TypeScript، Dynamic API Integration، Image Optimization.",
    result:
      "تحسين سرعة تحميل الصفحات، وتجربة مستخدم أكثر سلاسة، مع أداء مرتفع وتوافق كامل مع الهواتف والأجهزة المختلفة.",
    architecture:
      "معمارية تعتمد على مكونات قابلة لإعادة الاستخدام مع فصل واضح بين واجهة المستخدم وطبقة البيانات.",
    performance:
      "تحسين Core Web Vitals وتقليل حجم الملفات وتحميل المحتوى بشكل ديناميكي لتحقيق تجربة استخدام أسرع.",
    full_desc:
      "منصة تجارة إلكترونية متكاملة تضم صفحات المنتجات، التصنيفات، البحث، العروض، وسلة التسوق مع واجهة حديثة وسهلة الاستخدام.",
    features: [
      "Responsive Design",
      "Dynamic Product Catalog",
      "Authentication",
      "Shopping Cart",
      "Wishlist",
      "Performance Optimization",
      "SEO Friendly"
    ]
  },

  en: {
    title: "Kaily-P E-commerce Platform",
    desc: "A modern e-commerce platform delivering a fast, scalable, and responsive shopping experience.",
    problem:
      "The challenge was to build a scalable online store with excellent performance while maintaining a seamless user experience across all devices.",
    solution:
      "Developed the application using Next.js and React with optimized rendering, reusable components, image optimization, and efficient API integration.",
    technique:
      "Next.js App Router, Server Components, Tailwind CSS, TypeScript, Dynamic API Integration, and Image Optimization.",
    result:
      "Delivered faster page loads, improved responsiveness, and a highly optimized shopping experience across desktop and mobile devices.",
    architecture:
      "A modular component-based architecture with reusable UI elements and clean separation between presentation and data layers.",
    performance:
      "Optimized Core Web Vitals, reduced bundle size, and improved loading performance through modern rendering techniques.",
    full_desc:
      "A full-featured e-commerce platform including product browsing, categories, search, promotions, shopping cart, authentication, and a responsive user interface.",
    features: [
      "Responsive Design",
      "Product Catalog",
      "Authentication",
      "Shopping Cart",
      "Wishlist",
      "SEO Optimization",
      "Performance Optimization"
    ]
  }
},
  {
    id: "wakp-academy",
    tags: ["React", "Tailwind CSS", "Framer Motion", "SEO", "performance optimization"],
    link: "https://website.wakp.net/",
    demo: "https://website.wakp.net/",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403001835-46147d1766a4?q=80&w=1000&auto=format&fit=crop"
    ],
    metrics: [
      { label: "Concurrent Users", value: "50,000+" },
      { label: "Initial Load Reduction", value: "40%" },
      { label: "Lighthouse Score", value: "98/100" },
      { label: "SEO Visibility", value: "+60%" }
    ],
    architecture_decisions: [
      { title: "React Router", desc: "Used for better routing and built-in optimization like streaming and server components." },
      { title: "ISR (Incremental Static Regeneration)", desc: "To serve static content while keeping it updated without rebuilding the entire site." },
      { title: "Tailwind CSS", desc: "For a highly maintainable and scalable design system with zero runtime CSS." }
    ],
    before_after: [
      { label: "Lighthouse Performance", before: "65", after: "98", type: "text" },
      { label: "Initial Bundle Size", before: "250kb", after: "85kb", type: "text" }
    ],
    ar: {
      title: "WAKP Academy Website",
      desc: "Built a high-conversion educational platform serving 50,000+ students with optimized rendering and global scalability.",
      problem: "بطء التحميل وضعف أداء الـ SEO مما أثر على وصول الطلاب للمحتوى التعليمي وتجربة المستخدم.",
      solution: "استخدام Next.js مع Server-side Rendering (SSR) وتحسين الصور لضمان أسرع وقت تحميل ممكن.",
      technique: "React Router for client-side routing, Next.js SSR & ISR, Image Optimization, Edge Middleware for global performance.",
      result: "تحقيق تقييم 4.9/5 من الطلاب وزيادة بنسبة 30% في التسجيل في الكورسات مع Lighthouse score 95+.",
      architecture: "SSR/ISR based architecture for dynamic and fast content delivery, utilizing a unified Design System.",
      performance: "95+ Lighthouse score with optimized Core Web Vitals and lightning-fast response times.",
      full_desc: "الموقع الرسمي لأكاديمية WAKP، تم تصميمه ليكون واجهة جذابة وسريعة للطلاب الجدد، مع التركيز على تحويل الزوار إلى مشتركين.",
      features: ["دعم كامل للـ SEO", "تصميم متجاوب 100%", "نظام لغات ديناميكي", "سرعة تحميل فائقة"],
    },
    en: {
      title: "WAKP Academy Website",
      desc: "Built a high-conversion educational platform serving 50,000+ students with optimized rendering and global scalability.",
      problem: "Slow load times and poor SEO visibility which hindered student access to educational content and user experience.",
      solution: "Implemented React Router for better routing and Next.js with Server-side Rendering (SSR) and image optimization for the fastest possible load times.",
      technique: "React Router for client-side routing, Next.js SSR & ISR, Image Optimization, Edge Middleware for global performance.",
      result: "Achieved a 4.9/5 student rating and a 30% increase in course enrollments with a Lighthouse score of 95+.",
      architecture: "SSR/ISR based architecture for dynamic and fast content delivery, utilizing a unified Design System.",
      performance: "95+ Lighthouse score with optimized Core Web Vitals and lightning-fast response times.",
      full_desc: "The official website for WAKP Academy, designed to be an attractive and fast interface for new students, focusing on conversion optimization.",
      features: ["Full SEO Optimization", "100% Responsive Design", "Dynamic Language System", "Ultra-fast Load Times"],
    }
  },
  {
    id: "wakp-dashboard",
    tags: ["React 18", "Firebase", "TanStack Query", "SaaS"],
    link: "https://app.wakp.net/login",
    demo: "https://app.wakp.net/login",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    ],
    metrics: [
      { label: "Data Points/sec", value: "1,000+" },
      { label: "State Sync", value: "Real-time" },
      { label: "Table Rendering", value: "Virtualized" },
      { label: "Efficiency Gain", value: "40%" }
    ],
    architecture_decisions: [
      { title: "TanStack Query", desc: "Implemented for powerful server-state management, caching, and optimistic updates." },
      { title: "Firebase Real-time", desc: "Used for instant data synchronization across all connected clients." },
      { title: "Modular Store", desc: "Designed a modular state management system to handle complex business logic without performance hits." }
    ],
    before_after: [
      { label: "Data Latency", before: "2.5s", after: "150ms", type: "text" },
      { label: "Table FPS", before: "15-20", after: "60", type: "text" }
    ],
    ar: {
      title: "WAKP Real-time SaaS Dashboard",
      desc: "Built a real-time monitoring dashboard handling large-scale data with optimized rendering, improving performance and usability.",
      problem: "صعوبة إدارة بيانات 50,000 طالب والمدفوعات المعقدة يدوياً مع تأخر لحظي في عرض التقارير المالية.",
      solution: "تطوير داشبورد SaaS باستخدام TanStack Query و Firebase لضمان تزامن البيانات بشكل لحظي (Real-time).",
      technique: "TanStack Query for State Sync, Firebase Real-time Listeners, Virtualized Lists for heavy data tables.",
      result: "تحسين كفاءة الإدارة بنسبة 40% وتوفير رؤية دقيقة لحظية لكافة العمليات المالية دون تأخير.",
      architecture: "Modular architecture based on centralized State Management and Real-time Listeners for instant updates.",
      performance: "Sub-second load times for massive data tables with a 30% reduction in resource consumption.",
      full_desc: "لوحة تحكم متكاملة لإدارة المحتوى، الطلاب، المدرسين، والمدفوعات. تعتبر العقل المدبر لمنصة WAKP.",
      features: ["تقارير مالية لحظية", "إدارة صلاحيات المستخدمين", "تتبع تقدم الطلاب بدقة", "إشعارات فورية"],
    },
    en: {
      title: "WAKP Real-time SaaS Dashboard",
      desc: "Built a real-time monitoring dashboard handling large-scale data with optimized rendering, improving performance and usability.",
      problem: "Difficulty in manually managing 50,000+ student records and complex payment flows, with delays in real-time financial reporting.",
      solution: "Developed a SaaS dashboard using TanStack Query and Firebase to ensure real-time data synchronization.",
      technique: "TanStack Query for State Sync, Firebase Real-time Listeners, Virtualized Lists for heavy data tables.",
      result: "Improved administrative efficiency by 40% and provided real-time visibility into all financial operations without delay.",
      architecture: "Modular architecture based on centralized State Management and Real-time Listeners for instant updates.",
      performance: "Sub-second load times for massive data tables with a 30% reduction in resource consumption.",
      full_desc: "An integrated dashboard for managing content, students, instructors, and payments. It serves as the brain of the platform.",
      features: ["Real-time Financial Reports", "User Role Management", "Precise Student Tracking", "Instant Notifications"],
    }
  },
  {
    id: "pharmeasy",
    tags: ["E-commerce", "Healthcare", "Subscription", "Scale"],
    link: "https://pharmeasy.in/",
    demo: "https://pharmeasy.in/",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop",
    ar: {
      title: "PharmEasy - منصة الرعاية الصحية الشاملة",
      desc: "منصة رائدة لطلب الأدوية ومنتجات الرعاية الصحية وحجز الاختبارات التشخيصية عبر الإنترنت.",
      problem: "صعوبة الوصول للأدوية وإدارة الاحتياجات الصحية الشهرية بشكل منتظم في المدن المزدحمة.",
      solution: "تطوير نظام توصيل ذكي يغطي آلاف المدن مع خدمة اشتراك لإعادة تعبئة الأدوية تلقائياً.",
      result: "خدمة أكثر من 5 مليون عميل وتسهيل الوصول للرعاية الصحية بأسعار مناسبة وبضغطة زر.",
      full_desc: "مشروع ضخم في الهند يهدف لتسهيل الوصول للرعاية الصحية. ساهمت في تطوير أجزاء حيوية من تجربة المستخدم.",
      features: ["نظام بحث ذكي عن الأدوية", "جدولة الطلبات الشهرية", "تكامل مع المعامل الطبية", "محفظة رقمية للمدفوعات"]
    },
    en: {
      title: "PharmEasy - Comprehensive Healthcare Platform",
      desc: "A leading platform for ordering medicines, healthcare products, and booking diagnostic tests online.",
      problem: "Difficulty in accessing medicines and managing regular monthly health needs in crowded cities.",
      solution: "Developed a smart delivery system covering thousands of cities with an automatic refill subscription service.",
      result: "Served over 5 million customers, making healthcare accessible and affordable with just a click.",
      full_desc: "A major project in India aimed at facilitating access to healthcare. Contributed to developing vital parts of the UX.",
      features: ["Smart Medicine Search", "Monthly Order Scheduling", "Lab Integration", "Digital Wallet"]
    }
  },
  {
    id: "dr-nano",
    tags: ["Automotive", "Nano Technology", "Landing Page", "German Tech"],
    link: "https://drnanoceramic.com/en/",
    demo: "https://drnanoceramic.com/en/",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop",
    ar: {
      title: "دكتور نانو سيراميك (Dr. Nano)",
      desc: "أكبر مركز متخصص في حماية السيارات وتكنولوجيا النانو سيراميك في مصر باستخدام تقنيات ألمانية.",
      problem: "حاجة أصحاب السيارات لحماية طلاء سياراتهم من العوامل الجوية والخدوش بأعلى جودة ممكنة.",
      solution: "بناء واجهة رقمية متطورة تعرض خدمات النانو سيراميك وأفلام الحماية مع نظام فروع متكامل.",
      result: "التوسع لأكثر من 11 فرعاً في مصر وتقديم الخدمة لنخبة من الفنانين والمشاهير.",
      full_desc: "موقع متخصص يعكس جودة وفخامة الخدمات المقدمة في مراكز Dr. Nano. تم التركيز على الصور العالية الجودة وسهولة الحجز.",
      features: ["نظام حجز مواعيد", "معرض صور قبل وبعد", "خريطة تفاعلية للفروع", "معلومات تقنية مفصلة"]
    },
    en: {
      title: "Dr. Nano Ceramic",
      desc: "The largest specialized center for car protection and nano-ceramic technology in Egypt using German tech.",
      problem: "Car owners' need to protect their vehicle paint from weather elements and scratches with the highest quality.",
      solution: "Built a sophisticated digital interface showcasing nano-ceramic and protection film services with an integrated branch system.",
      result: "Expanded to over 11 branches in Egypt, serving elite artists and public figures.",
      full_desc: "A specialized website reflecting the quality and luxury of services provided at Dr. Nano centers.",
      features: ["Booking System", "Before & After Gallery", "Interactive Branch Map", "Detailed Tech Info"]
    }
  }
];

export const getProjects = (lang: 'ar' | 'en'): ProjectItem[] => {
  return projectsData.map(p => ({
    id: p.id,
    tags: p.tags,
    link: p.link,
    demo: p.demo,
    image: p.image,
    screenshots: p.screenshots,
    metrics: p.metrics,
    architecture_decisions: p.architecture_decisions,
    before_after: p.before_after,
    ...p[lang]
  }));
};
