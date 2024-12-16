import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactModal from "../Components/ContactModal";

function Vocansiya() {
  const [open, setOpen] = useState(false);

  // Function to create animation controls and refs
  const useScrollAnimation = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    return { ref, controls };
  };

  // Variants for motion animations
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  // Animation hooks for different sections
  const headerAnimation = useScrollAnimation();
  const listAnimation = useScrollAnimation();
  const offerHeaderAnimation = useScrollAnimation();

  return (
    <section id="vocansiya" className="mt-[100px] pb-10 w-[90%] mx-auto">
      <div className="min-w-full h-[0.4px] bg-[#1f1f1f]"></div>

      <div className="flex flex-col">
        <motion.h1
          ref={headerAnimation.ref}
          initial="hidden"
          animate={headerAnimation.controls}
          variants={textVariant}
          className="text-[2.2rem] leading-[2rem] md:leading-[2.6rem] md:text-[3rem] my-[1rem] font-bold uppercase"
        >
          Kompaniya Asosiy Korsatkichlari
        </motion.h1>

        <motion.h2
          ref={headerAnimation.ref}
          initial="hidden"
          animate={headerAnimation.controls}
          variants={textVariant}
          className="text-[1rem] md:text-[1.5rem] font-[500] mb-[1rem] leading-[1.2]"
        >
          Ozlari uchun gapiradigan aniq natijalar:
        </motion.h2>

        {/* Natijar royhati with individual card animations */}
        <div className="flex flex-col">
          {[...Array(6)].map((_, index) => {
            const cardAnimation = useScrollAnimation(); // Individual animation for each card in the list
            return (
              <motion.div
                ref={cardAnimation.ref}
                key={index}
                initial="hidden"
                animate={cardAnimation.controls}
                variants={textVariant}
                className="border-t border-[#1f1f1f] text-[1rem] leading-4 md:text-[2.2rem] cursor-pointer  py-4 uppercase font-[500] flex w-full hover:bg-[#1f1f1f] hover:text-[#f9f4e8] transition-all duration-700 justify-between items-center p-4"
              >
                <span>Texnik kompaniyalar qo'llab-quvvatlaydi:</span>
                <span>50+</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="min-w-full mt-[8rem] mb-[1rem] h-[0.4px] bg-[#1f1f1f]"></div>
      <motion.h1
        ref={offerHeaderAnimation.ref}
        initial="hidden"
        animate={offerHeaderAnimation.controls}
        variants={textVariant}
        className="text-[2.2rem] leading-[2rem] md:leading-[2.6rem] md:text-[3rem] my-[1rem] font-bold uppercase"
      >
        Bizning joriy takliflarimiz
      </motion.h1>

      <div className="flex flex-col gap-[2rem]">
        {[...Array(8)].map((_, i) => {
          const cardAnimation = useScrollAnimation(); // Create individual animation for each card
          return (
            <motion.div
              ref={cardAnimation.ref}
              key={i}
              initial="hidden"
              animate={cardAnimation.controls}
              variants={cardVariant} // Use individual card animation
              className="flex flex-col cursor-pointer gap-2 group"
            >
              <div className="uppercase text-[1.25rem] font-[500] leading-1 rounded-2xl px-2 py-1 bg-[#1f1f1f] text-[#f9f4e8] flex w-full justify-between items-center">
                <span>Mahsulot menegeri</span>
                <div className="flex gap-2 items-center">
                  <span>Ochiq</span>
                  <span
                    id="dumaloq"
                    className="w-[18px] h-[18px] rounded-full animate-pulse"
                    style={{
                      backgroundColor: "#1f1f1f",
                      animation: "colorChange 2s infinite",
                    }}
                  ></span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center text-[1rem] leading-[1.3]">
                    <span>📄</span>
                    <span>
                      Loyihani boshqarish vositasini ishlab chiqishni boshlash.
                    </span>
                  </div>

                  <div className="flex gap-2 items-center text-[1rem] leading-[1.3]">
                    <span>💸</span>
                    <span>80 ming evrogacha.</span>
                  </div>

                  <div className="flex gap-2 items-center text-[1rem] leading-[1.3]">
                    <span>📍</span>
                    <span>Parij, uzoq gibrid.</span>
                  </div>
                </div>
                {/* card hover boganda korinsin */}
                <div
                  onClick={() => setOpen(true)}
                  className="hidden group-hover:block transition-all duration-700 mr-2 text-[1.5rem] font-[500]"
                >
                  Contact
                </div>
              </div>
            </motion.div>
          );
        })}

        {[...Array(4)].map((_, i) => {
          const cardAnimation = useScrollAnimation(); // Create individual animation for each card
          return (
            <motion.div
              ref={cardAnimation.ref}
              key={i}
              initial="hidden"
              animate={cardAnimation.controls}
              variants={cardVariant} // Use individual card animation
              className="flex flex-col cursor-pointer gap-2 group"
            >
              <div className="uppercase text-[1.25rem] font-[500] leading-1 rounded-2xl px-2 py-1 bg-[#1f1f1f] text-[#f9f4e8] flex w-full justify-between items-center">
                <span>Mahsulot menegeri</span>
                <div className="flex gap-2 items-center">
                  <span>Yopiq</span>
                </div>
              </div>
            </motion.div>
          );
        })}
        <style>
          {`
      @keyframes colorChange {
        0%, 100% {
          background-color: #1f1f1f;
        }
        50% {
          background-color: #f9f4e8;
        }
      }
    `}
        </style>
      </div>

      <ContactModal isOpen={open} setIsOpen={setOpen} />
    </section>
  );
}

export default Vocansiya;
