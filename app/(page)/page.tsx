import Introduction from "./sections/Introduction";
import MyProjects from "./sections/MyProjects";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <div className="w-full flex flex-col pt-16">
      <Introduction />
      <Skills />
      <MyProjects />
    </div>
  );
}
