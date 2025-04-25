import { IProject } from "@/data/projects";
import { getAllProjects } from "@/lib/projects";
import { create } from "zustand";

export type ProjectsState = {
  projects: IProject[];
  filters: string[];

  toggleFilter: (filter: string) => void;
};

export const useProjects = create<ProjectsState>((set, get) => ({
  projects: getAllProjects(),
  filters: ["All"],

  toggleFilter: (tech) => {
    const { filters } = get();
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
      ? getAllProjects()
      : getAllProjects().filter((project) =>
          project.technologies.some((t) => newFilters.includes(t))
        );

    set({
      filters: newFilters,
      projects: filteredProjects,
    });
  },
}));
