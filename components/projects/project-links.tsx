import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";

export const ProjectLinks = ({ project }: { project: Project }) => {
  if (!project.links || project.links.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {project.links.map((link) => (
          <Button
            key={link._key}
            variant="outline"
            className="w-full justify-start"
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.type === "github" ? (
                <Github className="mr-2 h-4 w-4" />
              ) : (
                <ExternalLink className="mr-2 h-4 w-4" />
              )}
              {link.label ||
                (link.type === "github"
                  ? "View Source Code"
                  : "Visit Live Site")}
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};
