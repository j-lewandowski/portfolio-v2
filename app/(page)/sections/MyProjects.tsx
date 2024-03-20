import ProjectComponent from "../_components/ProjectComponent";

import PinnedProjects from "@/data/PinnedProjects.json";

const MyProjects = () => {
  return (
    <section className="w-full h-full text-white flex flex-col items-center justify-start pb-12">
      <span className="font-bold text-lg md:text-4xl">My Projects</span>
      <div className="flex items-center justify-center flex-col w-full mt-8 px-4 md:px-48 gap-y-6">
        {PinnedProjects.map((project) => (
          <ProjectComponent
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
