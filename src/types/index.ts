export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
  summary: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies?: string[];
}

export interface Project {
  title: string;
  date?: string;
  description: string;
  technologies: string[];
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPlaceholder?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Languages"
  | "Frameworks"
  | "Databases"
  | "Tools"
  | "Design"
  | "Soft Skills";

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  gpa?: string;
  achievement?: string;
}

export interface Certification {
  title: string;
  provider: string;
  date: string;
  description: string[];
  type: "course" | "internship" | "training";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education[];
  certifications: Certification[];
  socialLinks: SocialLink[];
}
