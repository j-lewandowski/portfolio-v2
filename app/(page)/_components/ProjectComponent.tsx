import Link from "next/link";
import Slider from "../projects/_components/Slider";

interface ProjectComponentProps {
  id: string;
  name: string;
  image: string[];
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
      className="flex flex-col-reverse md:flex-row w-full md:min-h-64 md:p-12 max-w-screen-lg rounded-lg duration-150 md:hover:bg-primary-light/60"
    >
      <div className="bg-cover h-44 rounded-md w-full md:w-fit bg-center border-2 border-secondary/60">
        <Slider images={image} auto={false} />
      </div>
      <div className="w-full md:w-2/3 md:pl-12">
        <div>
          <span className="font-bold text-base md:text-[28px]">{name}</span>
          <p className="text text-sm md:text-2xl font-light text-secondary">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-start w-full max-w-screen-sm flex-wrap gap-y-2 py-3 md:py-6 text-sm md:text-base gap-x-1">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="p-1 px-3 md:p-2 md:px-4 text-bagde-text/90 bg-badge-bg/10 rounded-full"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectComponent;
