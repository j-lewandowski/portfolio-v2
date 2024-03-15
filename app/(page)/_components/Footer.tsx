import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-secondary/5 h-16 flex items-center justify-between text-secondary px-24">
      <div className="flex gap-x-4">
        <FaLinkedin className="w-6 h-6" />
        <FaGithub className="w-6 h-6" />
      </div>
      <div className="flex flex-col items-center font-thin text-xs">
        <span>Designed & created by Jakub Lewandowski</span>
        <span>2024</span>
      </div>
      <div className="h-2 w-2 invisible"></div>
    </div>
  );
};

export default Footer;
