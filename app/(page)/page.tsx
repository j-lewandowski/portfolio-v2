import Introduction from "./sections/Introduction";
import MyProjects from "./sections/MyProjects";
import Skills from "./sections/Skills";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <div
      className={twMerge(
        "w-full flex flex-col pt-16 items-center gap-y-8 h-fit"
      )}
    >
      <Introduction />
      <div className="h-[2px] w-[90%] bg-white/10 md:mb-28"></div>
      <Skills />
      <MyProjects />
    </div>
  );
}
