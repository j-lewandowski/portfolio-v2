"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider, { useSlider } from "../../_components/Slider";

const ManualSlider = ({ images }: { images: string[] }) => {
  const { up, down } = useSlider();

  return (
    <div className="w-full max-w-screen-2xl h-full py-4 md:h-[500px] bg-secondary/[7%] border-2 border-white/10 rounded-md px-auto md:py-8 flex flex-col items-center justify-center md:mb-8">
      <div className="w-full h-full flex items-center justify-around">
        <div
          className="h-12 w-12 text-white p-3 rounded-full hover:bg-secondary/10 duration-150 hover:cursor-pointer hidden md:block"
          onClick={() => down()}
        >
          <FaArrowLeft className="w-full h-full" />
        </div>

        <Slider auto={false} images={images} />

        <div
          className="h-12 w-12 text-white p-3 rounded-full hover:bg-secondary/10 duration-150 hover:cursor-pointer hidden md:block"
          onClick={() => up()}
        >
          <FaArrowRight className="w-full h-full" />
        </div>
      </div>
      <div className="flex h-full w-full justify-around items-center md:hidden pt-4">
        <div
          className="h-12 w-12 text-white p-3 rounded-full hover:bg-secondary/10 duration-150 hover:cursor-pointer md:hidden block"
          onClick={() => down()}
        >
          <FaArrowLeft className="w-full h-full" />
        </div>
        <div
          className="h-12 w-12 text-white p-3 rounded-full hover:bg-secondary/10 duration-150 hover:cursor-pointer md:hidden block"
          onClick={() => up()}
        >
          <FaArrowRight className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ManualSlider;
