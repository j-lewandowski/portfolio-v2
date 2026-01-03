import { SectionHeading } from "@/components/ui/section-heading";
import { SkillsMotion } from "./skills-motion";
import { SkillsPageContent } from "@/types";

export function Skills({
  skillsPageContent,
}: {
  skillsPageContent: SkillsPageContent;
}) {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <SectionHeading>Skills</SectionHeading>
        <SkillsMotion skills={skillsPageContent.skills} />
      </div>
    </section>
  );
}
