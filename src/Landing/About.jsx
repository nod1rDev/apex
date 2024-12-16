import React from "react";
import { motion } from "framer-motion";
import { experience, texts } from "../utils";

function About() {


  const fadeLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

 

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div id="about">
      {/* Section for text animations */}
      <div className="min-h-screen mt-[100px] md:mt-[240px] hidden md:flex flex-col justify-center items-center gap-[1rem]  overflow-x-hidden  px-4 sm:px-8 lg:px-[5rem]">
        {texts.map((text, index) => (
          <motion.div
            key={index}
            className={`text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-[500] whitespace-nowrap ${
              index % 2 === 0 ? "text-[#f9f4e8]" : "styled-text"
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={index % 2 === 0 ? fadeLeft : fadeRight}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Section for scrollable experience */}
      <div
        id="experience"
        className="w-full mt-[100px] md:mt-[0] flex flex-col gap-8 px-4 sm:px-8 lg:px-[5rem]"
      >
        <div className="flex flex-col gap-8">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              className="flex flex-col text-left gap-4 p-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: false, amount: 0.3 }}
            >
              <span className="text-[2.5rem] sm:text-[3rem] font-bold mb-[-1rem]">
                .0{i + 1}
              </span>
              <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-bold leading-[1.2] uppercase">
                {e.title}
              </h1>
              <p className="max-w-[100%] sm:max-w-[80%] text-[1rem] sm:text-[1.25rem] text-[#8a8882] leading-[1.6rem] font-light">
                {e.p}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
