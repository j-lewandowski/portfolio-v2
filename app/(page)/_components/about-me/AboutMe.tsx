import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full h-full text-white flex flex-col items-center justify-center">
      <span className="text:xl md:text-4xl font-bold p-3 px-5 border-2 border-white/10 rounded-lg mb-4">
        About me
      </span>
      <p className="px-16 md:w-[700px] text-lg md:text-2xl text-secondary font-medium">
        Hi, I’m Jakub Lewandowski and I’m a Software Engineer. I’m a React.js
        enthusiast specialising in full-stack development.
        <br />
        <br />
        At the moment I’m employed as a tutor at{" "}
        <a
          className="text-white hover:underline"
          href="https://www.ambitni.edu.pl/"
        >
          AMBITNI
        </a>
        , an online IT school.
      </p>
    </div>
  );
};

export default AboutMe;
