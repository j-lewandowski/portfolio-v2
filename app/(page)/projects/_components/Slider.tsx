"use client";
import { create } from "zustand";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";

interface SliderProps {
  images: string[];
  auto?: boolean;
}

interface useSliderTypes {
  index: number;
  prevIndex: number;
  up: () => void;
  down: () => void;
}

export const useSlider = create<useSliderTypes>((set) => ({
  index: 0,
  prevIndex: -1,
  up: () =>
    set((state) => ({ prevIndex: state.index, index: state.index + 1 })),
  down: () =>
    set((state) => ({
      prevIndex: state.index,
      index: state.index - 1 < 0 ? 0 : state.index - 1,
    })),
}));

const Slider = ({ images = [], auto = true }: SliderProps) => {
  const { index, prevIndex, up } = useSlider();

  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => up(), 3000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="md:w-auto md:h-full w-full h-auto  aspect-video relative overflow-x-hidden">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt="zdjecie tymczasowe"
          fill
          className={twMerge(
            "rounded-md transition-all duration-150",
            index % images.length === i
              ? ""
              : index % images.length > i
              ? "-translate-x-[100%]"
              : "translate-x-[100%]"
          )}
        />
      ))}
    </div>
  );
};

export default Slider;
