import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-secondary/5 h-16 flex items-center justify-between text-secondary p-2 md:px-24">
      <div className="flex items-center justify-center gap-x-4 w-full md:w-auto">
        <FaLinkedin className="w-6 h-6" />
        <FaGithub className="w-6 h-6" />
      </div>
      <div className="hidden flex-col items-center font-thin text-xs text-wrap md:flex">
        <span>Designed & created by Jakub Lewandowski</span>
        <span>2024</span>
      </div>
      <div className="h-2 w-2 hidden md:block md:invisible"></div>
    </div>
  );
};

export default Footer;
