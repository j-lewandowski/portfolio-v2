import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IProject } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export const ProjectLinks = ({ project }: { project: IProject }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {project.github && (
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </a>
          </Button>
        )}

        {project.deploymentUrl && (
          <Button variant="outline" className="w-full justify-start" asChild>
            <a
              href={project.deploymentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Live Site
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
