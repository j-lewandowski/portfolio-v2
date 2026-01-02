"use client";

export const TechBackground = ({ skills }: { skills: SkillItem[] }) => {
  if (!skills) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {skills.map((skill, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;

        const top = 10 + row * 25 + (index % 2) * 5;
        const left = 10 + col * 30 + (row % 2) * 15;

        const rotate = -15 + ((index * 10) % 30);
        const scale = 1.2 + (index % 2) * 0.3;

        return (
          <div
            key={skill.name}
            className="absolute opacity-10 z-0"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              transform: `rotate(${rotate}deg) scale(${scale})`,
            }}
          >
            <img
              src={skill.iconUrl}
              alt={skill.name}
              width={48}
              height={48}
              className="object-contain invert"
            />
          </div>
        );
      })}
    </div>
  );
};
