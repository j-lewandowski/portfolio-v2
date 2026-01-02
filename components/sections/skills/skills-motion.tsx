"use client";

import { SkillCard } from "@/components/ui/skill-card";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export function SkillsMotion({ skills }: { skills: SkillItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (!skills) return null;

  return (
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
              <img
                src={skill.iconUrl}
                alt={skill.name}
                className="h-12 w-12 object-contain invert"
              />
            </div>
            <h3 className="text-center font-medium">{skill.name}</h3>
          </SkillCard>
        </motion.div>
      ))}
    </div>
  );
}
