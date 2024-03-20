import Introduction from "./sections/Introduction";
import MyProjects from "./sections/MyProjects";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <div className="w-full h-fit flex flex-col pt-16 items-center">
      <Introduction />
      <div className="h-[2px] w-[90%] bg-white/10 mb-32"></div>
      <Skills />
      <MyProjects />
    </div>
  );
}
