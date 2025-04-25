import { ProjectsFilter } from "@/components/projects/projects-filter";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProjectsHeader } from "@/components/projects/projects-header";

export default function ProjectsPage() {
  return (
    <div className="flex-1 container mx-auto px-4 py-16 md:py-24">
      <ProjectsHeader />
      <ProjectsFilter />
      <ProjectsGrid />
    </div>
  );
}
