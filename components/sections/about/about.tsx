import { TechBackground } from "@/components/ui/tech-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { AboutMotion } from "./about-motion";

export async function About({
  skillsPageContent,
}: {
  skillsPageContent: SkillsPageContent;
}) {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <TechBackground skills={skillsPageContent.skills} />

      <div className="container px-4 mx-auto relative z-10">
        <SectionHeading>About Me</SectionHeading>

        <AboutMotion />
      </div>
    </section>
  );
}
