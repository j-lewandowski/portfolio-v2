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
    icon: <SiTypescript className="h-12 w-12 text-primary" />,
  },
  {
    name: "React",
    icon: <SiReact className="h-12 w-12 text-primary" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="h-12 w-12 text-primary" />,
  },

  // Backend
  {
    name: "Node.js",
    icon: <SiNodedotjs className="h-12 w-12 text-primary" />,
  },
  {
    name: "NestJS",
    icon: <SiNestjs className="h-12 w-12 text-primary" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="h-12 w-12 text-primary" />,
  },

  // Databases
  {
    name: "Prisma",
    icon: <SiPrisma className="h-12 w-12 text-primary" />,
  },
  {
    name: "Postgres",
    icon: <SiPostgresql className="h-12 w-12 text-primary" />,
  },
  {
    name: "MongoDb",
    icon: <SiMongodb className="h-12 w-12 text-primary" />,
  },

  // DevOps & Infrastructure
  {
    name: "Docker",
    icon: <SiDocker className="h-12 w-12 text-primary" />,
  },
  {
    name: "CircleCI",
    icon: <SiCircleci className="h-12 w-12 text-primary" />,
  },
  {
    name: "Ansible",
    icon: <SiAnsible className="h-12 w-12 text-primary" />,
  },
  {
    name: "Terraform",
    icon: <SiTerraform className="h-12 w-12 text-primary" />,
  },

  // Other Languages
  {
    name: "Python",
    icon: <SiPython className="h-12 w-12 text-primary" />,
  },

  // Testing
  {
    name: "Jest",
    icon: <SiJest className="h-12 w-12 text-primary" />,
  },
];
