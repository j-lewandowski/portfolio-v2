import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProjectDetails = ({ project }: { project: any }) => {
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
          <p>Web Application</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">
            Timeline
          </h3>
          <p>2023</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">
            Role
          </h3>
          <p>Full-stack Developer</p>
        </div>
      </CardContent>
    </Card>
  );
};
