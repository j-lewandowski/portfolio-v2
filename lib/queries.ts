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
