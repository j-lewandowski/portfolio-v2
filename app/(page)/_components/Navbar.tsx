"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="w-full h-16 text-white md:text-xl font-bold justify-around items-center backdrop-blur fixed z-30 flex">
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
    </nav>
  );
};

export default Navbar;
