import React from "react";
import Navbar from "./Navbar";
import ParticleBackground from "./Stars2D";
import SkillsData from "./SkillsData";
import { useNavigation } from "./NavigationContext";

const Skills = () => {
  const { navigate } = useNavigation();

  return (
    <div className="relative text-white min-h-screen">
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>

      <Navbar onNavigate={navigate} />

      <div className="flex flex-col mt-32 mb-8 mx-auto items-center">
        <h1 className="relative text-6xl md:text-7xl font-bold tracking-wide text-center ">
          Skills
          <span className="absolute -z-10 left-[160px] transform -translate-x-1/2 bottom-[-10px] block w-50 h-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></span>
        </h1>
      </div>

      <div className="flex flex-col items-center gap-16 mt-16 px-4">
        {SkillsData.map((skill, index) => (
          <div
            key={skill.id}
            className={`px-50 flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } w-full`}
          >
            <div className="relative flex flex-col items-center w-full max-w-lg">
              <div
                className={`absolute ${
                  index % 2 === 0
                    ? "-left-50 md:-left-50"
                    : "-right-50 md:-right-50"
                } w-60 md:w-80 h-0.5
              bg-gradient-to-r from-transparent via-gray-500/50 to-transparent z-[-1]`}
              ></div>

              <div
                className={`absolute top-0 h-16 md:h-20 ${
                  index % 2 === 0 ? "left-5 md:left-30" : "right-5 md:right-30"
                } w-1 
              bg-gradient-to-b from-transparent via-gray-500/50 to-transparent z-[-1]`}
              ></div>

              <div
                className={`absolute ${
                  index % 2 === 0
                    ? "left-50 md:left-80"
                    : "right-50 md:right-80"
                } w-60 md:w-80 h-0.5 top-16
              bg-gradient-to-r from-transparent via-gray-500/50 to-transparent z-[-1]`}
              ></div>

              <div
                className="border border-gray-500 relative flex flex-col items-center 
              bg-gradient-to-r from-transparent via-gray-800 to-transparent 
              rounded-3xl p-4 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                <div className="p-2 border border-gray-600 rounded-2xl shadow-lg bg-gray-900 relative group">
                  <p className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 text-white text-lg font-semibold rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {skill.title}
                  </p>
                  <img
                    src={skill.src}
                    alt={skill.title}
                    className="w-32 h-32 md:w-40 md:h-40 p-3 transition-opacity duration-300 group-hover:opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
