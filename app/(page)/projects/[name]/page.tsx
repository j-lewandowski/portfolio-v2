import Markdown from "markdown-to-jsx";

import Projects from "@/data/Projects.json";
import Link from "next/link";

import styles from "./MarkdownStyles";
import ManualSlider from "./_components/ManualSlider";

const ProjectPage = async ({ params }: { params: { name: string } }) => {
  const projectData = Projects[params.name as keyof typeof Projects];
  let markdownContent;

  if (projectData.github) {
    const res = await fetch(
      `https://api.github.com/repos/j-lewandowski/${params.name}/readme`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    markdownContent = atob(data.content);
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-2 md:mx-2 md:px-32 pt-20 md:py-24">
      <ManualSlider images={projectData.images} />

      <section className="grid grid-cols-1 text-sm md:text-base md:grid-cols-4 md:grid-rows-2 w-full text-white gap-3 max-w-screen-2xl mt-4 px-2">
        <div className="flex flex-col w-full md:col-span-2">
          <span className="text-secondary font-semibold">Name</span>
          <span className="font-semibold text-lg">{projectData.name}</span>
        </div>
        <div className="flex flex-col w-full">
          <span className="text-secondary font-semibold">Last time edited</span>
          <span className="font-semibold text-lg">12.02.2024 22:43</span>
        </div>
        <div className="flex flex-col">
          <span className="text-secondary font-semibold">Status</span>
          <div className="flex items-center">
            <div className="mr-2">
              <div className="w-3 aspect-square rounded-full bg-[#50E3C2]"></div>
            </div>

            <span className="font-semibold text-lg">Done</span>
          </div>
        </div>
        <div className="flex flex-col w-full md:col-span-2">
          <span className="text-secondary font-semibold">Github</span>
          <Link
            href={
              projectData.github
                ? projectData.github
                : "https://github.com/j-lewandowski"
            }
            className="font-semibold text-lg"
          >
            {projectData.github
              ? projectData.github.replace("https://", "")
              : "[ Private ]"}
          </Link>
        </div>
        <div className="flex flex-col w-full md:col-span-2">
          <span className="text-secondary font-semibold">Deployment link</span>
          <Link
            href={projectData.deployment_url}
            className="font-semibold text-lg"
          >
            {projectData.deployment_url.replace("https://", "")}
          </Link>
        </div>
      </section>
      {markdownContent && (
        <section className="w-full flex flex-col mt-12 my-8 max-w-screen-2xl px-2">
          <div>
            <span className="text-secondary font-semibold">Description</span>
          </div>
          <div className="p-3 text-white bg-secondary/[7%] rounded-md border-2 border-white/10 ">
            <Markdown options={{ overrides: styles }}>
              {markdownContent}
            </Markdown>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectPage;
