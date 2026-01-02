import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";

export const ProjectLinks = ({ project }: { project: Project }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {project.githubUrl && (
          <Button variant="outline" className="w-full justify-start" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </a>
          </Button>
        )}

        {project.liveUrl && (
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Live Site
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
