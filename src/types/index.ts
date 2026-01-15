export interface NavLink {
  home: string;
  projects: string;
  about: string;
  contact: string;
  cta: string;
}

export interface Hero {
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
  title: string;
  desc: string;
  tags: string[];
  link: string;
  demo: string;
  image: string;
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
}

export interface FAQItem {
  q: string;
  a: string;
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
