"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
// import { create } from "zustand";

// interface useNavbarTypes {
//   isOpen: boolean;
// }

// const useNavbar = create<useNavbarTypes>((set) => ({
//   isOpen: false,
//   open: () => set((state) => ({ isOpen: true })),
//   close: () => set((state) => ({ isOpen: false })),
// }));

const Navbar = () => {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
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
          className={pathName === "/projects" ? "text-white" : "text-secondary"}
        >
          Projects
        </Link>
        {/* <Link
          href="/blog"
          className={pathName === "/blog" ? "text-white" : "text-secondary"}
        >
          Blog
        </Link> */}
      </ul>
      <div
        className="md:hidden h-12 aspect-square bg-secondary/[7%] rounded-md border-white/10 border-2 relative"
        onClick={() => setIsOpen(!isOpen)}
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
  );
};

export default Navbar;
