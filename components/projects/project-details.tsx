import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IProject } from "@/data/projects";

export const ProjectDetails = ({ project }: { project: IProject }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">
            Project Type
          </h3>
          <p>{project.type}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">
            Timeline
          </h3>
          <p>{project.timeline}</p>
        </div>
      </CardContent>
    </Card>
  );
};
