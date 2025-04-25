"use client";

import { motion } from "framer-motion";

export const ProjectsHeader = () => {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          My Projects
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          A collection of projects I&apos;ve worked on, from web applications to
          design systems. Each project represents a unique challenge and
          showcases different skills and technologies I&apos;ve mastered along
          my journey as a developer.
        </p>
      </motion.div>
    </div>
  );
};
