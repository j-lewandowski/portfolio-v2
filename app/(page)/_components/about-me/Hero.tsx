import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full text-white font-bold text-xl md:text-4xl flex items-center justify-center -mb-12 z-10">
        <span className="pr-2">Hi, I&apos;m </span>
        <span className="px-4 py-3 text-black bg-white rounded-xl">Jakub</span>
      </div>
      <Image
        src="/images/hello.svg"
        alt="Hello"
        width={320}
        height={320}
        quality={100}
        priority
      />
      <span className="text-white w-full text-center font-bold text-xl md:text-4xl -mt-4">
        Junior Fullstack <br /> Developer
      </span>
      <div className="w-full gap-2 text-[22px] text-secondary flex items-center justify-center text-base md:text-lg">
        <span>React</span>
        &bull;
        <span>Next.js</span>
        &bull;
        <span>Typescript</span>
      </div>
    </div>
  );
};

export default Hero;
