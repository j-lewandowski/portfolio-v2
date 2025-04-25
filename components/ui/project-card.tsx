import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IProject } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Card className="overflow-hidden group border-primary/10 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
      <div className="aspect-video relative overflow-hidden bg-secondary">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent relative">
          <Image
            src={project.images[0]}
            alt="Project image"
            className="aspect-video relative overflow-hidden bg-secondary"
            fill
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-muted-foreground line-clamp-2 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <Badge
              key={tech}
              variant="outline"
              className="capitalize border-primary/20 bg-primary/5 text-primary-foreground"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 text-primary-foreground"
            >
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link
          href={`/projects/${project.id}`}
          className="text-sm font-medium text-primary flex items-center group-hover:underline"
        >
          View Project
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
};
