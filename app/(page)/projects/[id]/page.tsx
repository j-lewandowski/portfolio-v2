import Image from "next/image";

const ProjectPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-32 pt-24">
      <div className="min-w-full h-[500px] bg-secondary/[7%] border-2 border-white/10 rounded-md px-auto py-8 flex items-center justify-center mb-8">
        <div className="h-full aspect-video relative">
          <Image
            src="/images/prestika.png"
            alt="zdjecie tymczasowe"
            fill
            className="rounded-md"
          />
        </div>
      </div>

      <section className="grid grid-cols-4 grid-rows-2 w-full text-white gap-3">
        <div className="flex flex-col w-full col-span-2">
          <span className="text-secondary font-semibold">Name</span>
          <span className="font-semibold text-lg">Prestika Website</span>
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
        <div className="flex flex-col w-full col-span-2">
          <span className="text-secondary font-semibold">Github</span>
          <span className="font-semibold text-lg">
            github.com/j-lewandowski
          </span>
        </div>
        <div className="flex flex-col w-full col-span-2">
          <span className="text-secondary font-semibold">Deployment link</span>
          <span className="font-semibold text-lg">
            portfolio-v2-ashen.vercel.app
          </span>
        </div>
      </section>
      <section className="w-full flex flex-col mt-8">
        <div>
          <span className="text-secondary font-semibold">Description</span>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
