import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero/hero";
import { Skills } from "@/components/sections/skills/skills";
import { Timeline } from "@/components/sections/timeline/timeline";
import { getSkills } from "@/lib/queries";

export default async function Home() {
  const skillsPageContent = await getSkills();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About skillsPageContent={skillsPageContent} />
        <Skills skillsPageContent={skillsPageContent} />
        <Timeline />
        <FeaturedProjects />
      </main>
    </div>
  );
}
