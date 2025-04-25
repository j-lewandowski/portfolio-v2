"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export const ProjectsFilter = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const technologies = [
    "All",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "JavaScript",
  ];

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
            variant={
              activeFilter === tech.toLowerCase() ? "default" : "outline"
            }
            size="sm"
            onClick={() => setActiveFilter(tech.toLowerCase())}
            className="capitalize"
          >
            {tech}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};
