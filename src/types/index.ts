export interface NavLink {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  services: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blog: any;
  home: string;
  projects: string;
  about: string;
  contact: string;
  cta: string;
}

export interface Hero {
  name: string;
  role: string;
  title: string;
  subtitle: string;
  cta_primary: string;
  cta_secondary: string;
  download_cv: string;
  cv_link: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  link: string;
  demo: string;
  image: string;
  full_desc?: string;
  features?: string[];
  architecture?: string;
  performance?: string;
  technique?: string;
  screenshots?: string[];
  metrics?: { label: string; value: string }[];
  architecture_decisions?: { title: string; desc: string }[];
  before_after?: { label: string; before: string; after: string; type: 'image' | 'text' }[];
}

export interface SkillItem {
  title: string;
  desc: string;
}

export interface SkillGridItem {
  name: string;
  level: number;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  desc: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  desc: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating?: number;
  image?: string;
}

export interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
}

export interface TranslationContent {
  nav: NavLink;
  hero: Hero;
  services: {
    title: string;
    items: ServiceItem[];
  };
  projects: {
    title: string;
    view_all: string;
    details: string;
    preview: string;
    code: string;
    items: ProjectItem[];
  };
  blog: {
    title: string;
    view_all: string;
    items: BlogPost[];
  };
  about: {
    title: string;
    desc: string;
    skills: SkillItem[];
    skills_grid: SkillGridItem[];
  };
  stats: {
    items: StatItem[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  testimonials: {
    title: string;
    items: TestimonialItem[];
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  cta_section: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      placeholders: {
        name: string;
        email: string;
        subject: string;
        message: string;
      };
    };
  };
  footer: {
    desc: string;
    rights: string;
  };
}
