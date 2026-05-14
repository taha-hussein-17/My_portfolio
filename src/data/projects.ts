import { ProjectItem } from "@/types";

export interface ProjectData {
  id: string;
  tags: string[];
  link: string;
  demo: string;
  image: string;
  screenshots?: string[];
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
    id: "wakp-academy",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
    link: "https://github.com/anzma-mosta/nms-Frontend",
    demo: "https://nms-frontend-rho.vercel.app/",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403001835-46147d1766a4?q=80&w=1000&auto=format&fit=crop"
    ],
    ar: {
      title: "WAKP Academy Website",
      desc: "Built a high-conversion educational platform serving 50,000+ students with optimized rendering and global scalability.",
      problem: "بطء التحميل وضعف أداء الـ SEO مما أثر على وصول الطلاب للمحتوى التعليمي وتجربة المستخدم.",
      solution: "استخدام Next.js مع Server-side Rendering (SSR) وتحسين الصور لضمان أسرع وقت تحميل ممكن.",
      technique: "Next.js SSR & ISR, Image Optimization, Edge Middleware for global performance.",
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
      solution: "Implemented Next.js with Server-side Rendering (SSR) and image optimization for the fastest possible load times.",
      technique: "Next.js SSR & ISR, Image Optimization, Edge Middleware for global performance.",
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
    link: "https://github.com/anzma-mosta/nms-Frontend",
    demo: "https://app.wakp.net/login",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
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
    ...p[lang]
  }));
};
