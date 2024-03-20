import ProjectComponent from "./_components/ProjectComponent";

import PinnedProjects from "@/data/PinnedProjects.json";

const Projects = () => {
  return (
    <div className="w-full min-h-screen pt-32 flex flex-col items-center justify-start">
      <div className="w-full flex items-center justify-between bg-primary">
        <div className="bg-white px-8 py-3 rounded-r-lg font-bold text-3xl">
          My Projects
        </div>
        <div className="w-[55%] h-[2px] bg-white/15"></div>
      </div>
      <div className="w-full px-2 md:px-32 flex items-center justify-start flex-col mt-16 md:mt-32 gap-y-6 pb-8">
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
    </div>
  );
};

export default Projects;
