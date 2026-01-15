import { TranslationContent } from "@/types";

export const translations: { ar: TranslationContent; en: TranslationContent } = {
  ar: {
    nav: {
      home: "الرئيسية",
      projects: "أعمالي",
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
      cv_link: "https://drive.google.com/file/d/1Py9thhoGXQLWvO4-Nfm9xI1HU9tCoxx1/view?usp=drive_link",
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
          title: "أكاديمية T.H التعليمية (V2)",
          desc: "النسخة المتطورة من منصة التعليم الإلكتروني لإدارة الكورسات والطلاب.",
          problem: "الحاجة لنظام تعليمي متكامل يدعم البث المباشر والاختبارات التفاعلية بشكل أسرع.",
          solution: "استخدام React 19 مع Firebase لتوفير تجربة لحظية وسلسة للطلاب والمعلمين.",
          result: "تحقيق استقرار في النظام بنسبة 99% مع دعم أكثر من 5000 طالب متزامن.",
          tags: ["React 19", "Firebase", "Tailwind CSS"],
          link: "https://github.com/taha-hussein-17/T.H_academy",
          demo: "#",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "نظام Trezo الإداري المتكامل",
          desc: "لوحة تحكم ضخمة لإدارة الموارد البشرية والعملاء (ERP/CRM).",
          problem: "تشتت البيانات الإدارية في الشركات الكبيرة وصعوبة استخراج التقارير الدقيقة.",
          solution: "بناء Dashboard ذكية باستخدام Next.js توفر رؤية شاملة لكل أقسام الشركة.",
          result: "توفير 30% من الوقت المستغرق في إعداد التقارير الشهرية للإدارة.",
          tags: ["Next.js", "TypeScript", "Redux", "Ant Design"],
          link: "https://github.com/taha-hussein-17",
          demo: "#",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "مدير كلمات المرور الآمن",
          desc: "تطبيق لتخزين وإدارة كلمات المرور بشكل مشفر وآمن تماماً.",
          problem: "تعرض المستخدمين لسرقة البيانات بسبب استخدام كلمات مرور ضعيفة أو متكررة.",
          solution: "تطوير تطبيق يستخدم تشفير AES-256 لحماية البيانات مع خاصية المزامنة السحابية.",
          result: "حماية بيانات أكثر من 100 ألف مستخدم (حسب تحميلات المتجر) وضمان خصوصيتهم.",
          tags: ["Mobile Dev", "Security", "Encryption", "Cloud Sync"],
          link: "https://github.com/taha-hussein-17",
          demo: "#",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "التعرف على الحروف اليدوية (AI)",
          desc: "مشروع يعتمد على الذكاء الاصطناعي لتحويل الخط اليدوي إلى نص رقمي.",
          problem: "صعوبة أرشفة المستندات المكتوبة بخط اليد يدوياً وتوفير الوقت والجهد.",
          solution: "استخدام خوارزميات Deep Learning و Image Processing لتحليل الصور بدقة.",
          result: "نسبة دقة تصل إلى 95% في التعرف على الحروف والأرقام المختلفة.",
          tags: ["Matlab", "AI", "Neural Networks", "Image Processing"],
          link: "https://github.com/taha-hussein-17",
          demo: "#",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
        },
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
          company: "شركة الحلول الذكية",
          role: "Senior Frontend Developer",
          period: "2023 - الحالي",
          desc: "بناء تطبيقات ويب عالية الأداء وتطوير تجربة المستخدم.",
        },
        {
          company: "وكالة الإبداع الرقمي",
          role: "Web Developer",
          period: "2021 - 2023",
          desc: "تطوير مواقع شركات ولوحات تحكم مخصصة.",
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
      cv_link: "https://drive.google.com/file/d/1Py9thhoGXQLWvO4-Nfm9xI1HU9tCoxx1/view?usp=drive_link",
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
          title: "T.H Academy (V2)",
          desc: "Advanced e-learning platform for course and student management.",
          problem: "Need for an integrated educational system supporting live streaming and interactive exams faster.",
          solution: "Leveraged React 19 with Firebase to provide a real-time, seamless experience for students and teachers.",
          result: "Achieved 99% system stability supporting over 5000 concurrent students.",
          tags: ["React 19", "Firebase", "Tailwind CSS"],
          link: "https://github.com/taha-hussein-17/T.H_academy",
          demo: "#",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Trezo Integrated Admin",
          desc: "Massive dashboard for HR and CRM management (ERP/CRM).",
          problem: "Scattered administrative data in large companies and difficulty in extracting accurate reports.",
          solution: "Built a smart Dashboard using Next.js providing a comprehensive view of all company departments.",
          result: "Saved 30% of the time spent on monthly reporting for management.",
          tags: ["Next.js", "TypeScript", "Redux", "Ant Design"],
          link: "https://github.com/taha-hussein-17",
          demo: "#",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Secure Password Manager",
          desc: "Application for storing and managing passwords with full encryption.",
          problem: "Users facing data theft due to weak or repeated passwords.",
          solution: "Developed an application using AES-256 encryption to protect data with cloud synchronization.",
          result: "Protected data for over 100k users (based on store downloads) and ensured their privacy.",
          tags: ["Mobile Dev", "Security", "Encryption", "Cloud Sync"],
          link: "https://github.com/taha-hussein-17",
          demo: "#",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Hand-Written Character Recognition (AI)",
          desc: "AI project to convert handwriting into digital text.",
          problem: "Difficulty in archiving hand-written documents manually and saving time and effort.",
          solution: "Used Deep Learning algorithms and Image Processing to analyze images accurately.",
          result: "Achieved 95% accuracy in recognizing different characters and numbers.",
          tags: ["Matlab", "AI", "Neural Networks", "Image Processing"],
          link: "https://github.com/taha-hussein-17",
          demo: "#",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
        },
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
          company: "Smart Solutions",
          role: "Senior Frontend Developer",
          period: "2023 - Present",
          desc: "Building high-performance web applications and enhancing user experience.",
        },
        {
          company: "Digital Creativity Agency",
          role: "Web Developer",
          period: "2021 - 2023",
          desc: "Developing corporate websites and custom dashboards.",
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
