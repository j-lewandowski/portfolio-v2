"use client";

import { Button } from "@/components/ui/button";
import { getPossibleFilters } from "@/lib/projects";
import { useProjects } from "@/store/projects.store";
import { motion } from "framer-motion";
import { useState } from "react";

export const ProjectsFilter = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const technologies = getPossibleFilters();
  const { toggleFilter, filters } = useProjects();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-8"
    >
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Button
            key={tech}
            variant={filters.includes(tech) ? "default" : "outline"}
            size="sm"
            onClick={() => toggleFilter(tech)}
            className="capitalize"
          >
            {tech}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};
