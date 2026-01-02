import { FeaturedProjectsMotion } from "./featured-projects-motion";
import { Project } from "@/types";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return <FeaturedProjectsMotion projects={projects} />;
}
