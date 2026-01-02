"use client";

import { ProjectCard } from "@/components/ui/project-card";
import { useProjects } from "@/store/projects.store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Project } from "@/types";

export const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  const { projects: filteredProjects, setProjects } = useProjects();

  useEffect(() => {
    setProjects(projects);
  }, [projects, setProjects]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
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
};
