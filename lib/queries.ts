import {
  AboutMePageContent,
  ExperiencePageContent,
  HeroPageContent,
  Project,
  SkillsPageContent,
} from "@/types";
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

export const getExperience = async (): Promise<ExperiencePageContent> => {
  return sanity.fetch<ExperiencePageContent>(`
    *[_type == "experiencePage"][0]{
      professionalExperience,
      educationalExperience
    }
  `);
};

export const getFeaturedProjects = async (): Promise<Project[]> => {
  return sanity.fetch<Project[]>(`
    *[_type == "project" && featured == true] {
      "slug": slug.current,
      name,
      description,
      featured,
      type,
      timeline,
      status,
      "technologies": coalesce(technologies, []),
      "githubUrl": github,
      "liveUrl": deploymentUrl,
      "images": coalesce(images[].asset->url, [])
    }
  `);
};

export const getProjects = async (): Promise<Project[]> => {
  return sanity.fetch<Project[]>(`
    *[_type == "project"] {
      "slug": slug.current,
      name,
      description,
      featured,
      type,
      timeline,
      status,
      "technologies": coalesce(technologies, []),
      "githubUrl": github,
      "liveUrl": deploymentUrl,
      "images": coalesce(images[].asset->url, [])
    }
  `);
};

export const getProject = async (slug: string): Promise<Project> => {
  return sanity.fetch<Project>(
    `
    *[_type == "project" && slug.current == $slug][0] {
      "slug": slug.current,
      name,
      description,
      featured,
      type,
      timeline,
      status,
      "technologies": coalesce(technologies, []),
      "githubUrl": github,
      "liveUrl": deploymentUrl,
      "images": coalesce(images[].asset->url, []),
      features,
      technicalDetails,
      challenges,
      outcome
    }
  `,
    { slug }
  );
};
