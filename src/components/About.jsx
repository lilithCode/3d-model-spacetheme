import React from "react";
import ParticleBackground from "./ParticleBackground";
import avatar from "/avatar.png";


const About = () => {
  return (
    <div
      id="about"
      className="relative flex flex-col items-center text-white text-center font-Exo2 min-h-screen overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <ParticleBackground />
      </div>

      <div className="p-6 md:p-10 mt-10 z-10">
        <div className="flex flex-col mt-10 mb-16 mx-auto items-center">
          <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-center">
            About Me
            <motion.span
              initial={{ width: "0%", x: "0" }}
              whileInView={{ width: "100%", x: "5vw" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -z-10 left-1/2 transform -translate-x-1/2 bottom-[-5px] block h-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            ></motion.span>
          </h1>
          ;
        </div>

        <div className="flex flex-col-reverse items-center justify-center gap-16 md:flex-row md:gap-12">
          <div className="text-2xl md:text-3xl space-theme leading-loose max-w-2xl">
            <motion.div
              initial={{ x: "-20vw", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring", stiffness: 40 }}
              viewport={{ once: true }}
            >
              <p>
                I’m a full-stack developer passionate about problem-solving,
                logical thinking, and building interactive experiences. I love
                bringing ideas to life through JavaScript, React, and Three.js.
                <br />
                My curiosity drives me to keep learning and pushing boundaries,
                whether in tech or beyond. When I’m not coding, I’m reading
                detective novels, exploring new ideas, or diving into creative
                projects. Late-night coding and coffee fuel my passion for
                innovation and growth.
              </p>
            </motion.div>
          </div>
          <motion.img
            src={avatar}
            alt="avatar"
            initial={{ x: "20vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 40 }}
            viewport={{ once: true }}
            className="h-40 sm:h-56 mx-auto mt-6 rounded-full border-4 border-purple-400 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
