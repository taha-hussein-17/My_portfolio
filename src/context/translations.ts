import { TranslationContent } from "@/types";

export const translations: { ar: TranslationContent; en: TranslationContent } = {
  ar: {
    nav: {
      home: "الرئيسية",
      projects: "أعمالي",
      services: "خدماتي",
      blog: "المدونة",
      about: "عني",
      contact: "تواصل معي",
      cta: "خلّينا نشتغل",
    },
    hero: {
      name: "طه حسين",
      role: "Frontend Developer • Next.js Expert",
      title: "بصمّم وببرمج مواقع سريعة وشيك بتساعد البيزنس يبيع أكتر",
      subtitle: "React • Next.js • Clean UI",
      cta_primary: "شاهد أعمالي",
      cta_secondary: "خلّينا نشتغل",
      download_cv: "تحميل السيرة الذاتية",
      cv_link: "https://drive.google.com/file/d/1oPimDWjUYF3fMJMNvlfB-iYKXDZmh-I1/view",
    },
    services: {
      title: "إزاي أقدر أساعدك؟",
      items: [
        {
          title: "Landing Pages",
          desc: "تصميم وبرمجة صفحات هبوط (Landing Pages) احترافية وعالية التحويل لتحويل الزوار إلى عملاء.",
        },
        {
          title: "Figma to Code",
          desc: "تحويل تصميمات Figma و Adobe XD إلى كود Next.js نظيف، متجاوب، وسريع جداً.",
        },
        {
          title: "Dashboards & Web Apps",
          desc: "بناء لوحات تحكم (Dashboards) معقدة وتطبيقات ويب مخصصة لإدارة عملك بكفاءة.",
        },
      ],
    },
    projects: {
      title: "مشاريع مختارة",
      view_all: "استكشف كافة المشاريع",
      details: "تفاصيل المشروع",
      preview: "معاينة حية",
      code: "المصدر",
      items: [
        {
          id: "wakp-academy",
          title: "أكاديمية WAKP التعليمية المتكاملة",
          desc: "منصة تعليمية حديثة ومتقدمة مصممة لتقديم تجربة تعليمية متميزة، تدعم تعدد اللغات والسمات البصرية.",
          problem: "الحاجة لنظام تعليمي متكامل يجمع بين سهولة الاستخدام، تعدد اللغات، وإدارة المحتوى والطلاب بكفاءة.",
          solution: "بناء منصة باستخدام React 18 و Firebase مع دعم كامل للـ RTL (العربية) ونظام لوحات تحكم متقدم.",
          result: "توفير تجربة تعليمية سلسة لآلاف الطلاب مع نظام إدارة شامل للمحاضرين والمديرين.",
          tags: ["React 18", "Firebase", "Redux Toolkit", "Tailwind 4.0"],
          link: "https://github.com/anzma-mosta/nms-Frontend",
          demo: "https://app.wakp.net",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
          full_desc: "أكاديمية WAKP هي مشروع ضخم يهدف لتوفير بيئة تعليمية متكاملة للطلاب والمحاضرين. تم التركيز في هذا المشروع على الأداء العالي ودعم اللغات المختلفة بشكل أساسي.",
          features: ["نظام إدارة محتوى متطور", "دعم كامل للغة العربية والإنجليزية", "لوحة تحكم ذكية للمحاضرين", "نظام اختبارات تفاعلي"]
        },
        {
          id: "wakp-dashboard",
          title: "لوحة تحكم WAKP الإدارية (Dashboard)",
          desc: "داشبورد تعليمية ضخمة لإدارة المستخدمين، المدفوعات، والمحتوى التعليمي بدقة عالية وتقارير لحظية.",
          problem: "صعوبة إدارة العمليات التعليمية والمالية الضخمة يدوياً وتشتت البيانات الإدارية.",
          solution: "تطوير لوحة تحكم ذكية توفر رؤية شاملة لكل أقسام المنصة مع أدوات تحكم إدارية دقيقة.",
          result: "تحسين كفاءة الإدارة بنسبة 40% وتقليل الأخطاء البشرية في إدارة البيانات والمدفوعات.",
          tags: ["Next.js", "TypeScript", "TanStack Query", "Dashboard"],
          link: "https://github.com/anzma-mosta/nms-Frontend",
          demo: "https://app.wakp.net",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
          full_desc: "تم تصميم لوحة التحكم لتكون القلب النابض للمنصة، حيث تمكن الإدارة من متابعة كل صغيرة وكبيرة في النظام.",
          features: ["تقارير مالية مفصلة", "إدارة المستخدمين والأدوار", "تتبع تقدم الطلاب", "نظام إشعارات لحظي"]
        },
        {
          id: "pharmeasy",
          title: "PharmEasy - منصة الرعاية الصحية الشاملة",
          desc: "منصة رائدة لطلب الأدوية ومنتجات الرعاية الصحية وحجز الاختبارات التشخيصية عبر الإنترنت.",
          problem: "صعوبة الوصول للأدوية وإدارة الاحتياجات الصحية الشهرية بشكل منتظم في المدن المزدحمة.",
          solution: "تطوير نظام توصيل ذكي يغطي آلاف المدن مع خدمة اشتراك لإعادة تعبئة الأدوية تلقائياً.",
          result: "خدمة أكثر من 5 مليون عميل وتسهيل الوصول للرعاية الصحية بأسعار مناسبة وبضغطة زر.",
          tags: ["E-commerce", "Healthcare", "Subscription", "Scale"],
          link: "https://pharmeasy.in/",
          demo: "https://pharmeasy.in/",
          image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop",
          full_desc: "مشروع ضخم في الهند يهدف لتسهيل الوصول للرعاية الصحية. ساهمت في تطوير أجزاء حيوية من تجربة المستخدم.",
          features: ["نظام بحث ذكي عن الأدوية", "جدولة الطلبات الشهرية", "تكامل مع المعامل الطبية", "محفظة رقمية للمدفوعات"]
        },
        {
          id: "dr-nano",
          title: "دكتور نانو سيراميك (Dr. Nano)",
          desc: "أكبر مركز متخصص في حماية السيارات وتكنولوجيا النانو سيراميك في مصر باستخدام تقنيات ألمانية.",
          problem: "حاجة أصحاب السيارات لحماية طلاء سياراتهم من العوامل الجوية والخدوش بأعلى جودة ممكنة.",
          solution: "بناء واجهة رقمية متطورة تعرض خدمات النانو سيراميك وأفلام الحماية مع نظام فروع متكامل.",
          result: "التوسع لأكثر من 11 فرعاً في مصر وتقديم الخدمة لنخبة من الفنانين والمشاهير.",
          tags: ["Automotive", "Nano Technology", "Landing Page", "German Tech"],
          link: "https://drnanoceramic.com/en/",
          demo: "https://drnanoceramic.com/en/",
          image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop",
          full_desc: "موقع متخصص يعكس جودة وفخامة الخدمات المقدمة في مراكز Dr. Nano. تم التركيز على الصور العالية الجودة وسهولة الحجز.",
          features: ["نظام حجز مواعيد", "معرض صور قبل وبعد", "خريطة تفاعلية للفروع", "معلومات تقنية مفصلة"]
        },
      ]
    },
    blog: {
      title: "المدونة",
      view_all: "عرض كل المقالات",
      items: [
        {
          id: "nextjs-seo",
          title: "كيفية تحسين SEO في تطبيقات Next.js",
          date: "2024-03-01",
          excerpt: "تعرف على أفضل الممارسات لتحسين ظهور موقعك في محركات البحث باستخدام Next.js 14.",
          content: "Next.js يوفر أدوات قوية للـ SEO مثل Metadata API و Server Component. في هذا المقال سنتناول بالتفصيل كيفية استخدامها...",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
          category: "تطوير الويب"
        },
        {
          id: "tailwind-4",
          title: "ما الجديد في Tailwind CSS 4.0؟",
          date: "2024-02-15",
          excerpt: "نظرة سريعة على التحديثات الجديدة في Tailwind CSS وكيفية الاستفادة منها.",
          content: "Tailwind CSS 4.0 يأتي بمحرك جديد أسرع ودعم أفضل للـ CSS Variables. سنتعرف على كيفية الترقية...",
          image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
          category: "تصميم"
        }
      ]
    },
    about: {
      title: "من أنا؟",
      desc: "أنا طه حسين، متخصص في تحويل الأفكار إلى واقع رقمي ملموس. أركز على بناء مواقع لا تبدو جميلة فحسب، بل تحقق نتائج حقيقية للبيزنس.",
      skills: [
        { title: "Landing Pages", desc: "خبير في بناء صفحات هبوط ترفع معدل التحويل (Conversion Rate)." },
        { title: "Performance", desc: "تحسين سرعة المواقع للحصول على تجربة مستخدم مثالية ونتائج SEO أفضل." },
        { title: "Clean Code", desc: "كتابة كود نظيف وقابل للتطوير باستخدام أحدث التقنيات مثل Next.js." },
      ],
      skills_grid: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Figma to Code", level: 90 },
        { name: "Performance Optimization", level: 85 },
        { name: "UI/UX", level: 85 },
      ]
    },
    stats: {
      items: [
        { label: "سنوات الخبرة", value: "+4" },
        { label: "مشاريع ناجحة", value: "+50" },
        { label: "زيادة المبيعات", value: "40%" },
        { label: "سرعة الأداء", value: "100%" },
      ]
    },
    experience: {
      title: "المسار المهني",
      items: [
        {
          company: "WAKP Academy",
          role: "Senior Frontend Developer",
          period: "2023 - الحالي",
          desc: "بناء وتطوير منصة WAKP التعليمية المتكاملة (app.wakp.net) باستخدام React 18 و Firebase، مع دعم كامل لتعدد اللغات والسمات البصرية.",
        },
        {
          company: "PharmEasy & Dr. Nano",
          role: "Frontend Developer (Contract)",
          period: "2021 - 2023",
          desc: "تطوير واجهات مستخدم متقدمة لمنصة PharmEasy للرعاية الصحية وموقع Dr. Nano Ceramic لحماية السيارات، مع التركيز على الأداء وتجربة المستخدم.",
        },
      ]
    },
    education: {
      title: "التعليم",
      items: [
        {
          school: "جامعة القاهرة",
          degree: "بكالوريوس هندسة الحاسبات",
          period: "2016 - 2020",
          desc: "تخصص في هندسة البرمجيات.",
        },
      ]
    },
    testimonials: {
      title: "آراء العملاء",
      items: [
        {
          name: "أحمد علي",
          role: "صاحب عمل",
          content: "طه حول فكرتي لموقع احترافي ساعدني جداً في الوصول لعملاء أكتر.",
        },
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          q: "ليه أختارك لمشروعي؟",
          a: "لأني مش بس ببرمج، أنا بركز على الجانب التسويقي والسرعة اللي بتفيد شغلك.",
        },
      ]
    },
    contact: {
      title: "خلّينا نشتغل",
      subtitle: "جاهز تحول فكرتك لواقع؟ ابعتلي دلوقتي ونبدأ فوراً.",
      email: "راسلني",
      phone: "اتصل بي",
      location: "موقع العمل",
      form: {
        name: "اسمك",
        email: "بريدك",
        subject: "الموضوع",
        message: "تفاصيل المشروع",
        send: "ارسل الآن",
        placeholders: {
          name: "طه حسين",
          email: "taha@example.com",
          subject: "مشروع جديد",
          message: "احكيلي عن مشروعك...",
        }
      }
    },
    footer: {
      desc: "بناء مواقع سريعة وشيك تساعد البيزنس يبيع أكتر.",
      rights: "جميع الحقوق محفوظة طه حسين.",
    }
  },
  en: {
    nav: {
      home: "Home",
      projects: "Works",
      services: "Services",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      cta: "Hire Me",
    },
    hero: {
      name: "Taha Hussein",
      role: "Frontend Developer • Next.js Expert",
      title: "I build fast, modern websites that convert visitors into customers.",
      subtitle: "React • Next.js • Clean UI",
      cta_primary: "View Projects",
      cta_secondary: "Hire Me",
      download_cv: "Download CV",
      cv_link: "https://drive.google.com/file/d/1oPimDWjUYF3fMJMNvlfB-iYKXDZmh-I1/view",
    },
    services: {
      title: "How I Can Help",
      items: [
        {
          title: "Landing Pages",
          desc: "High-converting landing pages designed to turn visitors into loyal customers.",
        },
        {
          title: "Figma to Code",
          desc: "Pixel-perfect conversion of Figma/Adobe XD designs into clean, responsive Next.js code.",
        },
        {
          title: "Dashboards & Web Apps",
          desc: "Custom-built web applications and dashboards to streamline your business operations.",
        },
      ],
    },
    projects: {
      title: "Selected Works",
      view_all: "View All Projects",
      details: "Project Details",
      preview: "Live Demo",
      code: "Source",
      items: [
        {
          id: "wakp-academy",
          title: "WAKP Academy - Advanced Learning Platform",
          desc: "A modern educational platform designed for a superior learning experience, supporting multi-language and dynamic themes.",
          problem: "The need for an integrated educational system that combines ease of use, multi-language support, and efficient management of content and students.",
          solution: "Built a platform using React 18 and Firebase with full RTL/LTR support and an advanced dashboard system.",
          result: "Provided a seamless learning experience for thousands of students with a comprehensive management system for instructors and admins.",
          tags: ["React 18", "Firebase", "Redux Toolkit", "Tailwind 4.0"],
          link: "https://github.com/anzma-mosta/nms-Frontend",
          demo: "https://app.wakp.net",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
          full_desc: "WAKP Academy is a massive project aimed at providing an integrated learning environment. Focus was on high performance and multi-language support.",
          features: ["Advanced CMS", "Full RTL/LTR Support", "Instructor Dashboard", "Interactive Quizzes"]
        },
        {
          id: "wakp-dashboard",
          title: "WAKP Administrative Dashboard",
          desc: "A massive educational dashboard for high-precision management of users, payments, and educational content with real-time reporting.",
          problem: "Difficulty in manually managing large-scale educational and financial operations and scattered administrative data.",
          solution: "Developed a smart dashboard providing a comprehensive view of all platform departments with precise administrative control tools.",
          result: "Improved management efficiency by 40% and reduced human errors in data and payment management.",
          tags: ["Next.js", "TypeScript", "TanStack Query", "Dashboard"],
          link: "https://github.com/anzma-mosta/nms-Frontend",
          demo: "https://app.wakp.net",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
          full_desc: "The dashboard was designed to be the heart of the platform, enabling management to monitor every detail of the system.",
          features: ["Detailed Financial Reports", "User & Role Management", "Student Progress Tracking", "Real-time Notifications"]
        },
        {
          id: "pharmeasy",
          title: "PharmEasy - Comprehensive Healthcare Platform",
          desc: "A leading platform for ordering medicines, healthcare products, and booking diagnostic tests online.",
          problem: "Difficulty in accessing medicines and managing regular monthly health needs in crowded cities.",
          solution: "Developed a smart delivery system covering thousands of cities with an automatic refill subscription service.",
          result: "Served over 5 million customers, making healthcare accessible and affordable with just a click.",
          tags: ["E-commerce", "Healthcare", "Subscription", "Scale"],
          link: "https://pharmeasy.in/",
          demo: "https://pharmeasy.in/",
          image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop",
          full_desc: "A major project in India aimed at facilitating access to healthcare. Contributed to developing vital parts of the UX.",
          features: ["Smart Medicine Search", "Monthly Order Scheduling", "Lab Integration", "Digital Wallet"]
        },
        {
          id: "dr-nano",
          title: "Dr. Nano Ceramic",
          desc: "The largest specialized center for car protection and nano-ceramic technology in Egypt using German tech.",
          problem: "Car owners' need to protect their vehicle paint from weather elements and scratches with the highest quality.",
          solution: "Built a sophisticated digital interface showcasing nano-ceramic and protection film services with an integrated branch system.",
          result: "Expanded to over 11 branches in Egypt, serving elite artists and public figures.",
          tags: ["Automotive", "Nano Technology", "Landing Page", "German Tech"],
          link: "https://drnanoceramic.com/en/",
          demo: "https://drnanoceramic.com/en/",
          image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop",
          full_desc: "A specialized website reflecting the quality and luxury of services provided at Dr. Nano centers.",
          features: ["Booking System", "Before & After Gallery", "Interactive Branch Map", "Detailed Tech Info"]
        },
      ]
    },
    blog: {
      title: "Blog",
      view_all: "View All Articles",
      items: [
        {
          id: "nextjs-seo",
          title: "How to Optimize SEO in Next.js Apps",
          date: "2024-03-01",
          excerpt: "Learn best practices for improving your site's search engine visibility with Next.js 14.",
          content: "Next.js provides powerful SEO tools like Metadata API and Server Components. In this article, we'll cover how to use them...",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
          category: "Development"
        },
        {
          id: "tailwind-4",
          title: "What's New in Tailwind CSS 4.0?",
          date: "2024-02-15",
          excerpt: "A quick look at the new updates in Tailwind CSS and how to benefit from them.",
          content: "Tailwind CSS 4.0 comes with a faster engine and better CSS Variables support. We'll explore how to upgrade...",
          image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
          category: "Design"
        }
      ]
    },
    about: {
      title: "Who Am I?",
      desc: "I'm Taha Hussein, a specialist in turning ideas into tangible digital realities. I focus on building websites that don't just look good, but drive real business results.",
      skills: [
        { title: "Landing Pages", desc: "Expert in building high-converting landing pages." },
        { title: "Performance", desc: "Optimizing websites for perfect user experience and better SEO results." },
        { title: "Clean Code", desc: "Writing clean, scalable code using modern technologies like Next.js." },
      ],
      skills_grid: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Figma to Code", level: 90 },
        { name: "Performance Optimization", level: 85 },
        { name: "UI/UX", level: 85 },
      ]
    },
    stats: {
      items: [
        { label: "Years Experience", value: "+4" },
        { label: "Successful Projects", value: "+50" },
        { label: "Sales Increase", value: "40%" },
        { label: "Performance", value: "100%" },
      ]
    },
    experience: {
      title: "Career Path",
      items: [
        {
          company: "WAKP Academy",
          role: "Senior Frontend Developer",
          period: "2023 - Present",
          desc: "Building and developing the WAKP integrated educational platform (app.wakp.net) using React 18 and Firebase, with full multi-language and dynamic theming support.",
        },
        {
          company: "PharmEasy & Dr. Nano",
          role: "Frontend Developer (Contract)",
          period: "2021 - 2023",
          desc: "Developing advanced user interfaces for the PharmEasy healthcare platform and the Dr. Nano Ceramic car protection website, with a focus on performance and UX.",
        },
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          school: "Cairo University",
          degree: "B.Sc. Computer Engineering",
          period: "2016 - 2020",
          desc: "Specialized in Software Engineering.",
        },
      ]
    },
    testimonials: {
      title: "Testimonials",
      items: [
        {
          name: "Ahmed Ali",
          role: "Business Owner",
          content: "Taha transformed my idea into a professional website that helped me reach more customers.",
        },
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Why choose me?",
          a: "Because I don't just code; I focus on the marketing aspect and speed that benefits your business.",
        },
      ]
    },
    contact: {
      title: "Hire Me",
      subtitle: "Ready to turn your idea into reality? Contact me now and let's get started.",
      email: "Email Me",
      phone: "Call Me",
      location: "Work Location",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Project Details",
        send: "Send Now",
        placeholders: {
          name: "Taha Hussein",
          email: "taha@example.com",
          subject: "New Project",
          message: "Tell me about your project...",
        }
      }
    },
    footer: {
      desc: "Building fast, modern websites that convert visitors into customers.",
      rights: "All rights reserved to Taha Hussein.",
    }
  }
};
