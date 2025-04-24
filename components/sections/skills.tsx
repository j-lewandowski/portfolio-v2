"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "@/components/ui/skill-card";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Cpu,
  Database,
  FileCode,
  Globe,
  Layout,
  Palette,
  Server,
  Terminal,
} from "lucide-react";
import { useRef } from "react";

// Using Lucide icons instead of images
const skills = [
  { name: "JavaScript", icon: <FileCode className="h-12 w-12 text-primary" /> },
  { name: "HTML", icon: <Code className="h-12 w-12 text-primary" /> },
  { name: "TypeScript", icon: <Terminal className="h-12 w-12 text-primary" /> },
  { name: "React", icon: <Layout className="h-12 w-12 text-primary" /> },
  { name: "Next.js", icon: <Globe className="h-12 w-12 text-primary" /> },
  {
    name: "Tailwind CSS",
    icon: <Palette className="h-12 w-12 text-primary" />,
  },
  { name: "Prisma", icon: <Database className="h-12 w-12 text-primary" /> },
  { name: "Node.js", icon: <Server className="h-12 w-12 text-primary" /> },
  { name: "Python", icon: <Cpu className="h-12 w-12 text-primary" /> },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <SectionHeading>Skills</SectionHeading>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <SkillCard>
                <div className="mx-auto mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-center font-medium">{skill.name}</h3>
              </SkillCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
