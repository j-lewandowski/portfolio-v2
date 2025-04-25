import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";

export const ProjectHeader = ({ project }: { project: any }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
        {project.name}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          <span>Last updated: {formatDate(new Date())}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span>Status: Completed</span>
        </div>
      </div>

      <p className="text-lg text-muted-foreground max-w-3xl mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech: string) => (
          <Badge key={tech} variant="outline" className="capitalize">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};
