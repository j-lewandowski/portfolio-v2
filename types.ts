type HeroPageContent = {
  title: string;
  imageUrl: string;
  techStack: string[];
};

type AboutMePageContent = {
  content: string;
};

type SkillItem = {
  name: string;
  iconUrl: string;
};

type SkillsPageContent = {
  skills: SkillItem[];
};

type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

type ExperiencePageContent = {
  professionalExperience: TimelineItem[];
  educationalExperience: TimelineItem[];
};
