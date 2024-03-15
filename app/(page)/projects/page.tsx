import ProjectComponent from "./_components/ProjectComponent";

const Projects = () => {
  return (
    <div className="w-full min-h-screen pt-32 flex flex-col items-center justify-start">
      <div className="w-full flex items-center justify-between bg-primary">
        <div className="bg-white px-8 py-3 rounded-r-lg font-bold text-3xl">
          My Projects
        </div>
        <div className="w-[55%] h-[2px] bg-white/15"></div>
      </div>
      <div className="w-full px-32 flex items-center justify-start flex-col mt-32 gap-y-6 pb-8">
        <ProjectComponent
          id={1}
          name="Prestika Website"
          description="A custom made website for my neighbour’s business connected to
            Sanity.io CMS for easy content managment."
          image="./images/prestika.png"
          technologies={["React", "Sanity.io", "Taliwindcss"]}
        />
        <ProjectComponent
          id={1}
          name="Prestika Website"
          description="A custom made website for my neighbour’s business connected to
            Sanity.io CMS for easy content managment."
          image="./images/prestika.png"
          technologies={["React", "Sanity.io", "Taliwindcss"]}
        />
        <ProjectComponent
          id={1}
          name="Prestika Website"
          description="A custom made website for my neighbour’s business connected to
            Sanity.io CMS for easy content managment."
          image="./images/prestika.png"
          technologies={["React", "Sanity.io", "Taliwindcss"]}
        />
      </div>
    </div>
  );
};

export default Projects;
