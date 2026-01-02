import { sanity } from "./sanity";

export const getHeroContent = async (): Promise<HeroPageContent> => {
  return sanity.fetch<HeroPageContent>(`
    *[_type == "heroPage"][0] {
      title,
      image,
      techStack
    }
  `);
};

export const getAboutMeContent = async (): Promise<AboutMePageContent> => {
  return sanity.fetch<AboutMePageContent>(`
    *[_type == "aboutMePage"][0] {
      content
    }`);
};

export const getSkills = async (): Promise<SkillsPageContent> => {
  return sanity.fetch<SkillsPageContent>(`
    *[_type == "skillsPage"][0]{
      skills[]{
        name,
        "iconUrl": icon.asset->url
      }
    }
  `);
};
