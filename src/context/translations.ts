import { TranslationContent } from "@/types";
import { getProjects } from "@/data/projects";

export const translations: { ar: TranslationContent; en: TranslationContent } = {
  ar: {
    nav: {
      home: "الرئيسية",
      projects: "أعمالي",
      services: "خدماتي",
      blog: "المدونة",
      about: "عني",
      contact: "تواصل معي",
      cta: "أطلب شغلك الان",
    },
    hero: {
      name: "طه حسين",
      role: "Senior Frontend Architect & SaaS Specialist",
      title: "ابنِ لوحات تحكم (Dashboards) ذكية تدفع نمو شركتك",
      subtitle: "أقوم بتحويل البيانات المعقدة إلى واجهات تفاعلية ولحظية باستخدام React & Next.js. معمارية قابلة للتوسع، أداء فائق، وتركيز كامل على تجربة المستخدم والتحويل.",
      cta_primary: "شاهد سجل النجاح",
      cta_secondary: "ابدأ مشروعك الآن",
      download_cv: "تحميل السيرة الذاتية",
      cv_link: "https://drive.google.com/file/d/1xY4l3lsZtNV-5l572-FSRZLRUVQQpMKJ/view?usp=sharing",
    },
    services: {
      title: "إزاي أقدر أساعدك؟",
      items: [
        {
          title: "SaaS Dashboards",
          desc: "بناء لوحات تحكم معقدة تتعامل مع البيانات الضخمة (Large-scale data) مع تحسين كامل للأداء والسرعة.",
        },
        {
          title: "Scalable Architecture",
          desc: "تصميم وتنفيذ معمارية برمجية قوية تضمن استقرار الموقع مع زيادة عدد المستخدمين والبيانات.",
        },
        {
          title: "Real-time Solutions",
          desc: "تكامل الأنظمة اللحظية (Real-time) لضمان تحديث البيانات فوراً دون الحاجة لإعادة تحميل الصفحة.",
        },
      ],
    },
    projects: {
      title: "مشاريع مختارة",
      view_all: "استكشف كافة المشاريع",
      details: "تفاصيل المشروع",
      preview: "معاينة حية",
      code: "المصدر",
      items: getProjects('ar'),
      private_code_title: "الكود خاص",
      private_code_message: "كود هذا المشروع ملك لشركة خاصة ولا يمكن عرضه للعامة. هل ترغب في زيارة النسخة الحية للمشروع؟",
      visit_live: "زيارة الموقع الحي",
      stay_here: "البقاء هنا",
    },
    blog: {
      title: "المدونة",
      view_all: "عرض كل المقالات",
      items: [
        {
          id: "build-saas-dashboard-nextjs",
          title: "دليلك الشامل لبناء لوحة تحكم SaaS احترافية باستخدام Next.js",
          date: "2024-04-28",
          excerpt: "تعلم كيفية بناء لوحات تحكم قابلة للتوسع، سريعة، ولحظية باستخدام أحدث تقنيات Next.js و React.",
          content: `في عالم الـ SaaS، تعتبر لوحة التحكم (Dashboard) هي قلب المنتج. إذا كانت بطيئة أو صعبة الاستخدام، ستفقد عملائك بسرعة. في هذا الدليل، سأشاركك خبرتي في بناء لوحات تحكم عالمية المستوى.

**1. لماذا Next.js هو الخيار الأفضل للـ SaaS؟**
Next.js ليس مجرد إطار عمل لـ React، بل هو منظومة متكاملة توفر:
- **Server Components:** لتقليل حجم الـ Bundle وتحسين سرعة التحميل الأولية.
- **Streaming:** لعرض البيانات فور توفرها دون انتظار تحميل الصفحة بالكامل.
- **API Routes:** لبناء Backend بسيط وسريع داخل نفس المشروع.

**2. المعمارية البرمجية (Architecture)**
لبناء لوحة تحكم قابلة للتوسع، يجب تقسيم الكود إلى:
- **Modules:** كل ميزة (مثل الفواتير، الإحصائيات) يجب أن تكون موديول منفصل.
- **Shared Components:** مكونات UI موحدة لضمان اتساق التصميم.
- **State Management:** استخدام TanStack Query لإدارة البيانات اللحظية ومزامنتها.

**3. الأداء هو المفتاح**
في لوحات التحكم التي تحتوي على آلاف السجلات، نستخدم تقنيات مثل:
- **Windowing/Virtualization:** لتحميل الصفوف الظاهرة فقط في الجداول الضخمة.
- **Optimistic Updates:** لتحديث الواجهة فوراً قبل انتظار رد السيرفر، مما يعطي إحساساً بالسرعة الفائقة.

**4. الأمان وصلاحيات المستخدمين (RBAC)**
تأكد من استخدام Middleware في Next.js للتحقق من صلاحيات المستخدم قبل عرض أي صفحة حساسة.

**الخلاصة:**
بناء لوحة تحكم SaaS ليس مجرد ربط واجهات ببيانات، بل هو فن موازنة الأداء، الأمان، وتجربة المستخدم. إذا كنت تبحث عن خبير يساعدك في تحويل فكرتك إلى واقع، فلا تتردد في التواصل معي.`,
          image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=1000&auto=format&fit=crop",
          category: "SaaS Development"
        },
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
      title: "قالوا عني",
      items: [
        {
          name: "م. محمد كمال",
          role: "Team Lead @ WAKP",
          content: "طه مش مجرد مطور واجهات، هو مهندس برمجيات حقيقي. قدر يحسن أداء المنصة بنسبة 40% وقدم حلول ذكية في الـ state management وفرت علينا وقت كبير في التطوير.",
        },
        {
          name: "أحمد علي",
          role: "SaaS Founder",
          content: "كنت محتاج داشبورد معقدة تتعامل مع بيانات ضخمة في وقت حقيقي. طه نفذ ده باحترافية وبسرعة تفوق توقعاتي، والنتيجة كانت مبهرة للمستثمرين.",
        },
        {
          name: "Sarah Johnson",
          role: "Product Manager",
          content: "His attention to detail in component architecture and performance optimization is outstanding. He doesn't just build features; he builds scalable systems.",
        },
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          q: "ليه أختارك لمشروعي؟",
          a: "لأني مش بس ببرمج، أنا بركز على الجانب التقني العميق (Architecture) والسرعة اللي بتفيد البيزنس وتوفر في تكاليف السيرفرات.",
        },
      ]
    },
    cta_section: {
      title: "جاهز تبني الـ SaaS Frontend القادم؟",
      subtitle: "متاح حالياً للمشاريع الحرّة والاستشارات التقنية. خلّينا نحول فكرتك لواقع رقمي فائق الأداء.",
      primary: "احجز مكالمة استشارية",
      secondary: "شوف شغلي",
    },
    contact: {
      title: "أطلب شغلك الان",
      subtitle: "جاهز تحول فكرتك لواقع؟ ابعتلي دلوقتي ونبدأ فوراً.",
      email: "capootaha17@gmail.com",
      phone: "+201122889897",
      location: "القاهرة، مصر",
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
      role: "Senior Frontend Architect & SaaS Specialist",
      title: "Build Intelligent Dashboards That Drive Business Growth",
      subtitle: "I transform complex data into intuitive, real-time React & Next.js interfaces. Scalable architecture, lightning-fast performance, and a relentless focus on UX and conversion.",
      cta_primary: "View Case Studies",
      cta_secondary: "Start Your Project",
      download_cv: "Download CV",
      cv_link: "https://drive.google.com/file/d/1xY4l3lsZtNV-5l572-FSRZLRUVQQpMKJ/view?usp=sharing",
    },
    services: {
      title: "How I Can Help",
      items: [
        {
          title: "SaaS Dashboards",
          desc: "Building complex dashboards handling large-scale data with full performance optimization.",
        },
        {
          title: "Scalable Architecture",
          desc: "Designing robust software architecture that ensures stability with increasing users and data.",
        },
        {
          title: "Real-time Solutions",
          desc: "Integrating real-time systems to ensure data updates instantly without page reloads.",
        },
      ],
    },
    projects: {
      title: "Selected Projects",
      view_all: "Explore All Projects",
      details: "Project Details",
      preview: "Live Preview",
      code: "Source Code",
      items: getProjects('en'),
      private_code_title: "Private Codebase",
      private_code_message: "This project's codebase is private and owned by a specific company. It cannot be shared publicly. Would you like to visit the live site instead?",
      visit_live: "Visit Live Site",
      stay_here: "Stay on Website",
    },
    blog: {
      title: "Blog",
      view_all: "View All Articles",
      items: [
        {
          id: "build-saas-dashboard-nextjs",
          title: "The Ultimate Guide to Building Scalable SaaS Dashboards with Next.js",
          date: "2024-04-28",
          excerpt: "Learn how to build scalable, fast, and real-time dashboards using the latest Next.js and React features.",
          content: `In the SaaS world, the dashboard is the heart of your product. If it's slow or hard to use, you'll lose customers fast. In this guide, I'll share my experience in building world-class dashboards.

**1. Why Next.js is the Best Choice for SaaS?**
Next.js isn't just a React framework; it's a complete ecosystem that provides:
- **Server Components:** To reduce bundle size and improve initial load speed.
- **Streaming:** To display data as soon as it's available without waiting for the full page load.
- **API Routes:** To build a fast and simple backend within the same project.

**2. Scalable Architecture**
To build a dashboard that scales, you must organize your code into:
- **Modules:** Each feature (like billing, analytics) should be a separate module.
- **Shared Components:** Unified UI components to ensure design consistency.
- **State Management:** Using TanStack Query for real-time data management and synchronization.

**3. Performance is Key**
In dashboards containing thousands of records, we use techniques like:
- **Windowing/Virtualization:** To load only visible rows in massive tables.
- **Optimistic Updates:** To update the UI immediately before waiting for the server response, giving a lightning-fast feel.

**4. Security and User Permissions (RBAC)**
Ensure you use Next.js Middleware to verify user permissions before rendering any sensitive page.

**Conclusion:**
Building a SaaS dashboard is not just about connecting interfaces to data; it's the art of balancing performance, security, and user experience. If you're looking for an expert to help turn your idea into reality, don't hesitate to reach out.`,
          image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=1000&auto=format&fit=crop",
          category: "SaaS Development"
        },
        {
          id: "nextjs-seo",
          title: "How to Improve SEO in Next.js Applications",
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
          name: "Eng. Mohamed Kamal",
          role: "Team Lead @ WAKP",
          content: "Taha is not just a frontend developer; he is a true software engineer. He improved platform performance by 40% and provided smart state management solutions that saved us significant development time.",
        },
        {
          name: "Ahmed Ali",
          role: "SaaS Founder",
          content: "I needed a complex dashboard handling massive real-time data. Taha executed this professionally and faster than I expected. The result was impressive to investors.",
        },
        {
          name: "Sarah Johnson",
          role: "Product Manager",
          content: "His attention to detail in component architecture and performance optimization is outstanding. He doesn't just build features; he builds scalable systems.",
        },
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Why choose me?",
          a: "Because I don't just code; I focus on deep technical architecture and speed that benefits the business and saves on server costs.",
        },
      ]
    },
    cta_section: {
      title: "Ready to build your next SaaS Frontend?",
      subtitle: "Currently available for freelance projects and technical consulting. Let's turn your idea into a high-performance digital reality.",
      primary: "Book a Strategy Call",
      secondary: "View My Works",
    },
    contact: {
      title: "Hire Me",
      subtitle: "Ready to turn your idea into reality? Contact me now and let's get started.",
      email: "capootaha17@gmail.com",
      phone: "+201122889897",
      location: "Cairo, Egypt",
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
