import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import backgroundImg from "../assets/busan.jpeg";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-right"
        src={backgroundImg}
        alt="Photo of Busan"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Robert Yau
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I'm a Developer",
                2000,
                "I'm a Coder",
                2000,
                "I'm a Programmer",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-around pt-6 max-w-[150px] w-full">
            <a
              href="https://www.linkedin.com/in/robert-yau-333288148"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer" size={25} />
            </a>
            <a
              href="https://github.com/Ryau91"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={25} />
            </a>
            <a
              href="mailto:ryau91@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail className="cursor-pointer" size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
