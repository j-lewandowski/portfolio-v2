import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ProjectComponentProps {
  id: string;
  name: string;
  image: string;
  description: string;
  technologies: string[];
}

const ProjectComponent = ({
  id,
  name,
  image,
  description,
  technologies,
}: ProjectComponentProps) => {
  return (
    <Link
      href={`/projects/${id}`}
      className="group group-hover:duration-150 flex flex-col justify-around w-full md:min-h-64 md:p-6 md:pb-0  max-w-screen-lg rounded-lg duration-150 border-2 border-secondary/10 hover:border-secondary"
    >
      <div className="flex md:flex-row flex-col p-2 md:p-0">
        <div
          className="bg-cover h-44 rounded-md w-full md:w-2/5 bg-center border-2 border-secondary/60 mb-2 md:mb-0"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="w-full md:w-2/3 md:pl-12">
          <div>
            <span className="font-bold text-white text-base md:text-[28px]">
              {name}
            </span>
            <p className="text text-sm md:text-2xl font-light text-secondary">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full items-between pt-4 pb-1 px-2 md:px-0 ">
        <div className="flex items-center justify-start w-full py-3 md:py-6 text-sm md:text-base gap-1 md:gap-x-1 flex-wrap">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="p-1 px-3 md:p-2 md:px-4 text-bagde-text/90 bg-badge-bg/10 rounded-full"
            >
              {tech}
            </div>
          ))}
        </div>
        <span className="text-white flex items-center justify-end md:justify-normal text-nowrap invisible group-hover:visible group-hover:animate-slideFromRight">
          Show project <FaArrowRight className="ml-3" />
        </span>
      </div>
    </Link>
  );
};

export default ProjectComponent;
