import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineMotion } from "./timeline-motion";
import { getExperience } from "@/lib/queries";

export async function Timeline() {
  const experiencePageContent = await getExperience();

  return (
    <section id="timeline" className="py-20 md:py-32 bg-mesh-gradient relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

      <div className="container px-4 mx-auto relative z-10">
        <SectionHeading>Career Timeline</SectionHeading>
        <TimelineMotion experiencePageContent={experiencePageContent} />
      </div>
    </section>
  );
}
