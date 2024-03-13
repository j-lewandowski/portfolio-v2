import AboutMe from "../_components/about-me/AboutMe";
import Hero from "../_components/about-me/Hero";

const Introduction = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex-1">
        <Hero />
      </div>
      <div className="flex-1">
        <AboutMe />
      </div>
    </section>
  );
};

export default Introduction;
