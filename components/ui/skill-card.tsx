import { Card, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";

export const SkillCard = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-md">
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
};
