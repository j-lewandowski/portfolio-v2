import AboutMe from "../_components/about-me/AboutMe";
import Hero from "../_components/about-me/Hero";

const Introduction = () => {
  return (
    <section className="w-full max-w-screen-2xl h-screen max-h-screen flex flex-col md:flex-row items-center mt-16 md:mt-0 justify-center gap-y-12 md:gap-y-0">
      <div className="md:flex-1">
        <Hero />
      </div>
      <div className="md:flex-1">
        <AboutMe />
      </div>
    </section>
  );
};

export default Introduction;
