import ProjectComponent from "../_components/ProjectComponent";

const MyProjects = () => {
  return (
    <section className="w-full h-screen text-white flex flex-col items-center justify-start">
      <span className="font-bold text-lg md:text-4xl">My Projects</span>
      <div className="flex items-center justify-center flex-col w-full mt-8 px-4 md:px-48">
        <ProjectComponent
          id={1}
          name="Prestika Website"
          description="A custom made website for my neighbour’s business connected to
            Sanity.io CMS for easy content managment."
          image="./images/prestika.png"
          technologies={["React", "Sanity.io", "Taliwindcss"]}
        />
      </div>
    </section>
  );
};

export default MyProjects;
