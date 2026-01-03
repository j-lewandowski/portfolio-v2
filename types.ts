export type HeroPageContent = {
  title: string;
  imageUrl: string;
  techStack: string[];
};

export type AboutMePageContent = {
  content: string;
};

export type SkillItem = {
  name: string;
  iconUrl: string;
};

export type SkillsPageContent = {
  skills: SkillItem[];
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export type ExperiencePageContent = {
  professionalExperience: TimelineItem[];
  educationalExperience: TimelineItem[];
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  featured: boolean;
  type: string;
  timeline: string;
  status: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
  features?: string[];
  technicalDetails?: string;
  challenges?: string;
  outcome?: string;
};
