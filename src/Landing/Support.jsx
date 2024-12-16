import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "../Components/ContactModal";

function Support() {
  const [open, setOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const ballHover = {
    hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
  };

  const scrollVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="support" className="mt-[200px] pb-[10rem] w-[90%] mx-auto">
      <motion.div
        className="min-w-full h-[0.4px] bg-[#1f1f1f]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      ></motion.div>

      <motion.h1
        className="text-[2.2rem] leading-[2rem] md:leading-[2.6rem] md:text-[3rem] my-[1rem] font-bold uppercase"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      >
        Ai qullab-quvvatlash
      </motion.h1>

      <motion.div
        className="flex gap-[1rem] mb-[2rem] flex-col text-[1rem] md:text-[1.5rem] max-w-[60rem] font-[400] text-[#1f1f1f] leading-[1.3] uppercase"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      >
        <span>
          Chez Flaire, nous accompagnons les entreprises de l'ia, qu'elles
          évoluent dans le domaine des LLMs, de la computer vision, ou d'autres
          technologies émergentes.
        </span>

        <span>
          Nous recrutons une large gamme de talents ia : des AI Scientists aux
          GPU Programming Experts, en passant par des Site Reliability Engineers
          et Software Engineers.
        </span>

        <span>
          Que ce soit pour un AI Solution Architect en Europe ou un Research
          Engineer à Paris, nous trouvons les profils clés qui feront la
          différence.
        </span>
      </motion.div>

      <motion.div className="flex flex-col md:flex-row w-full gap-4 justify-between items-center">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="w-[100%] md:w-[50%] rounded-2xl bg-[#1f1f1f] text-[#f9f4e8] p-10 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={scrollVariants}
          >
            <div className="w-[90px] h-[90px] md:w-[112px] md:h-[112px] md:text-[1.5rem] flex justify-center items-center rounded-[999px] bg-[#f9f4e8] text-[#1f1f1f] mb-4 font-bold">
              Ai
            </div>

            <h2 className="text-[2rem] md:text-[3rem] font-[600] leading-1 uppercase mb-4">
              Use Case : Upciti
            </h2>

            <p className=" leading-[1.3] mb-6 text-[1.3rem] font-[500]">
              Upciti nous a confié la création de son équipe Computer Vision .
              Nous avons recruté 4 ML Engineers et 1 Lead ML Engineer, leur
              permettant de développer rapidement leurs solutions IA et de
              s’imposer comme leader dans le domaine des smart cities.
            </p>

            <a
              href="https://upciti.com/"
              className=" uppercase font-bold text-[1.3rem]"
            >
              uptik.com
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="min-w-full my-[2rem] md:my-[5rem] h-[0.4px] bg-[#1f1f1f]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      ></motion.div>

      <motion.div
        className="text-[#1f1f1f] font-bold mb-[5rem] md:mb-[5rem] text-[4rem] md:text-[9.5vw] max-w-[90%]   leading-[4rem]  md:leading-[9rem] uppercase relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      >
        AI <br /> Data <br /> science analystic
      </motion.div>

      <div className="flex flex-col md:flex-row gap-[2rem] md:gap-[10rem] mb-[5rem] justify-end">
        {[14, 7, 1].map((mt, i) => (
          <motion.div
            key={i}
            className={`flex flex-col gap-2 justify-center ${
              i == 0 ? "md:mt-[14rem]" : i == 1 ? " md:mt-[7rem]" : "mt-[0]"
            } items-center w-[360px]  h-[360px] rounded-[999px] text-[#f9f4e8] bg-[#1f1f1f]`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            whileHover={ballHover.hover}
            variants={containerVariants}
          >
            <span className="text-center text-[1.5rem]">
              clients satisfaits de nos recrutements IA
            </span>

            <span className="text-[5rem] font-[500]">90%</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-[#1f1f1f]  font-bold mb-[20rem] text-[4rem] md:text-[9vw] text-end max-w-[100%] leading-[4rem] md:leading-[8rem] uppercase relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      >
        ApexBart <br /> Recrute <br /> science analystic <br /> Talanted detials
      </motion.div>

      {/*Lets talk */}
      <motion.div
        onClick={() => setOpen(false)}
        className=" hidden md:flex max-w-[70%] cursor-pointer justify-center mx-auto flex-wrap items-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      >
        {["l", "e", "t", "'", "s", "t", "a", "l", "k"].map((e, i) => (
          <motion.div
            id="keywordBall"
            key={i}
            className="flex justify-center items-center uppercase text-[#f9f4e8] bg-[#1f1f1f] rounded-[999px] w-[160px] h-[160px] text-[7rem]"
            whileHover={ballHover.hover}
          >
            {e}
          </motion.div>
        ))}
      </motion.div>

      <ContactModal isOpen={open} setIsOpen={setOpen} />
    </section>
  );
}

export default Support;
