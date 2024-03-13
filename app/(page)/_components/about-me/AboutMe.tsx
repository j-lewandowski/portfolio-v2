import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full h-full text-white flex flex-col items-center justify-center">
      <span className="text-4xl underline font-bold p-6">About me</span>
      <p className="px-16 w-[700px] text-2xl text-secondary font-medium">
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
