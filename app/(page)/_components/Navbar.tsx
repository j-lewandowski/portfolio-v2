"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { create } from "zustand";

interface useNavbarTypes {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useNavbar = create<useNavbarTypes>((set) => ({
  isOpen: false,
  open: () => set((state) => ({ isOpen: true })),
  close: () => set((state) => ({ isOpen: false })),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const Navbar = () => {
  const pathName = usePathname();

  const { isOpen, toggle, close } = useNavbar();

  const handleResume = () => {
    const pdf = "/docs/CV.pdf";

    window.open(pdf, "_blank");
  };

  return (
    <>
      <nav className="w-full h-16 text-white md:text-xl font-bold justify-between px-12 md:px-0 md:justify-around items-center backdrop-blur fixed z-30 flex">
        <Link href="/">
          <Image
            src="/images/Memoji-laptop.png"
            alt="Logo"
            height={64}
            width={64}
          />
        </Link>
        <ul className="md:flex hidden gap-x-6">
          <Link
            href="/"
            className={pathName === "/" ? "text-white" : "text-secondary"}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={
              pathName === "/projects" ? "text-white" : "text-secondary"
            }
          >
            Projects
          </Link>
          <a
            onClick={handleResume}
            className={
              pathName === "/projects"
                ? "text-white hover:cursor-pointer"
                : "text-secondary hover:cursor-pointer"
            }
          >
            Resume
          </a>
        </ul>
        <div
          className="md:hidden h-12 aspect-square bg-secondary/[7%] rounded-md border-white/10 border-2 relative"
          onClick={() => toggle()}
        >
          <div
            className={twMerge(
              "w-6 h-[3px] bg-white absolute top-[40%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded-lg duration-150",
              isOpen && "top-[50%] rotate-45"
            )}
          ></div>
          <div
            className={twMerge(
              "w-6 h-[3px] bg-white absolute top-[60%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded-lg duration-150",
              isOpen && "top-[50%] -rotate-45"
            )}
          ></div>
        </div>
      </nav>
      <div
        className={twMerge(
          "fixed w-full h-full overflow-hidden md:overflow-auto bg-black duration-150 md:overscroll-auto overscroll-contain",
          isOpen ? "translate-x-[0%] z-20" : "translate-x-[200%] z-0"
        )}
      >
        <div className="pt-20 px-4 w-full h-screen flex flex-col items-center justfy-center relative">
          <ul className="flex flex-col items-center py-12 border-t-2 border-white/10 text-3xl gap-y-6 ">
            <Link
              href="/"
              className={pathName === "/" ? "text-white" : "text-secondary"}
              onClick={() => close()}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={
                pathName === "/projects" ? "text-white" : "text-secondary"
              }
              onClick={() => close()}
            >
              Projects
            </Link>
            <span
              onClick={handleResume}
              className={
                pathName === "/projects" ? "text-white" : "text-secondary"
              }
            >
              Resume
            </span>
          </ul>
          <div className="flex-col items-center font-thin text-xs text-wrap flex text-secondary absolute bottom-6">
            <span>Designed & created by Jakub Lewandowski</span>
            <span>2024</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
