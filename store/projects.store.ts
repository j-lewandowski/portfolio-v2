import { Project } from "@/types";
import { create } from "zustand";

export type ProjectsState = {
  projects: Project[];
  allProjects: Project[];
  filters: string[];

  setProjects: (projects: Project[]) => void;
  toggleFilter: (filter: string) => void;
};

export const useProjects = create<ProjectsState>((set, get) => ({
  projects: [],
  allProjects: [],
  filters: ["All"],

  setProjects: (projects) => set({ projects, allProjects: projects }),

  toggleFilter: (tech) => {
    const { filters, allProjects } = get();
    let newFilters: string[];

    if (tech === "All") {
      newFilters = ["All"];
    } else {
      newFilters = filters.filter((f) => f !== "All");
      const isAlreadyActive = newFilters.includes(tech);

      if (isAlreadyActive) {
        newFilters = newFilters.filter((f) => f !== tech);
      } else {
        newFilters = [...newFilters, tech];
      }

      if (newFilters.length === 0) {
        newFilters = ["All"];
      }
    }

    const filteredProjects = newFilters.includes("All")
      ? allProjects
      : allProjects.filter((project) =>
          project.technologies.some((t) => newFilters.includes(t))
        );

    set({
      filters: newFilters,
      projects: filteredProjects,
    });
  },
}));
