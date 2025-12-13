import {
  SiAnsible,
  SiCircleci,
  SiDocker,
  SiExpress,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

export interface ISkill {
  name: string;
  icon: JSX.Element;
}

export const skills: ISkill[] = [
  // Frontend
  {
    name: "Typescript",
    icon: <SiTypescript className="text-primary" />,
  },
  {
    name: "React",
    icon: <SiReact className="text-primary" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-primary" />,
  },

  // Backend
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-primary" />,
  },
  {
    name: "NestJS",
    icon: <SiNestjs className="text-primary" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-primary" />,
  },

  // Databases
  {
    name: "Prisma",
    icon: <SiPrisma className="text-primary" />,
  },
  {
    name: "Postgres",
    icon: <SiPostgresql className="text-primary" />,
  },
  {
    name: "MongoDb",
    icon: <SiMongodb className="text-primary" />,
  },

  // DevOps & Infrastructure
  {
    name: "Docker",
    icon: <SiDocker className="text-primary" />,
  },
  {
    name: "CircleCI",
    icon: <SiCircleci className="text-primary" />,
  },
  {
    name: "Ansible",
    icon: <SiAnsible className="text-primary" />,
  },
  {
    name: "Terraform",
    icon: <SiTerraform className="text-primary" />,
  },

  // Other Languages
  {
    name: "Python",
    icon: <SiPython className="text-primary" />,
  },

  // Testing
  {
    name: "Jest",
    icon: <SiJest className="text-primary" />,
  },
];
