"use client";

import { skills } from "@/data/skills";
import React from "react";

export const TechBackground = () => {
  const backgroundSkills = skills;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {backgroundSkills.map((skill, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;

        const top = 10 + row * 25 + (index % 2) * 5;
        const left = 10 + col * 30 + (row % 2) * 15;

        const rotate = -15 + ((index * 10) % 30);

        const scale = 1.2 + (index % 2) * 0.3;

        return (
          <div
            key={index}
            className="absolute opacity-5"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              transform: `rotate(${rotate}deg) scale(${scale})`,
            }}
          >
            {React.cloneElement(skill.icon, {
              className: "w-16 h-16 text-foreground",
            })}
          </div>
        );
      })}
    </div>
  );
};
