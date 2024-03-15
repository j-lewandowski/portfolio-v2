import Image from "next/image";
import SkillItem from "../_components/SkillItem";

const Logos = [
  {
    src: "./images/JS.svg",
    alt: "JS",
  },
  {
    src: "./images/HTML.svg",
    alt: "HTML",
  },
  {
    src: "./images/Typescript.svg",
    alt: "Typescript",
  },
  {
    src: "./images/React.svg",
    alt: "React",
  },
  {
    src: "./images/Nextjs.svg",
    alt: "Nextjs",
  },
  {
    src: "./images/Tailwind.svg",
    alt: "Tailiwnd",
  },
  {
    src: "./images/Prisma.svg",
    alt: "Prisma",
  },
  {
    src: "./images/Nodejs.svg",
    alt: "Nodejs",
  },
  {
    src: "./images/Python.svg",
    alt: "Python",
  },
];

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-white mb-16 md:mb-32">
      <span className="font-bold text-lg md:text-4xl mb-6">Skills</span>
      <div className="grid grid-cols-3 grid-rows-3 gap-3">
        {Logos.map((logo) => (
          <SkillItem key={logo.alt}>
            <Image src={logo.src} alt={logo.alt} height={56} width={56} />
          </SkillItem>
        ))}
      </div>
    </div>
  );
};

export default Skills;
