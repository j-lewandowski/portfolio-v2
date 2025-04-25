import { ProjectsFilter } from "@/components/projects/projects-filter";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProjectsHeader } from "@/components/projects/projects-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Jakub Lewandowski - Fullstack Developer",
  description:
    "Explore Jakub Lewandowski's portfolio of web development projects, including React applications, Next.js websites, and full-stack solutions.",
  keywords: [
    "React projects",
    "Next.js portfolio",
    "web development",
    "fullstack developer",
    "Jakub Lewandowski",
  ],
  openGraph: {
    title: "Projects | Jakub Lewandowski - Fullstack Developer",
    description:
      "Explore Jakub Lewandowski's portfolio of web development projects, including React applications, Next.js websites, and full-stack solutions.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jakub Lewandowski's Projects",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex-1 container mx-auto px-4 py-16 md:py-24">
      <ProjectsHeader />
      <ProjectsFilter />
      <ProjectsGrid />
    </div>
  );
}
