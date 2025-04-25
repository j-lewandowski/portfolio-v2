import { projects } from "@/data/projects";

export function getFeaturedProjects() {
  return projects.filter((project) => project.isPinned);
}

export function getPossibleFilters() {
  const filters = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((technology) => {
      filters.add(technology);
    });
  });
  return ["All", ...Array.from(filters)];
}

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.id === slug);
}
