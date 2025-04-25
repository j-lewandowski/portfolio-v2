"use client";

import { ProjectCard } from "@/components/ui/project-card";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const featuredProjects = [
  {
    id: "1",
    name: "Project One",
    description: "A brief description of Project One.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
  },
  {
    id: "2",
    name: "Project Two",
    description: "A brief description of Project Two.",
    technologies: ["Next.js", "Prisma", "TypeScript"],
  },
  {
    id: "3",
    name: "Project Three",
    description: "A brief description of Project Three.",
    technologies: ["Python", "Flask", "SQLAlchemy"],
  },
];

export function ProjectsGrid() {
  const [projects, setProjects] = useState(featuredProjects);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
