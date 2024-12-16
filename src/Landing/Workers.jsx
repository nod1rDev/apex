import { useState } from "react";
import { motion } from "framer-motion";
import { workers } from "../utils";
import ContactModal from "../Components/ContactModal";

function Workers() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setopen] = useState(false);

  return (
    <section id="workers" className="mt-[300px] pb-20 w-[90%] mx-auto">
      <div className="min-w-full h-[0.4px] bg-[#f9f4e8]"></div>

      <div className="flex flex-col">
        <h1 className="text-[3rem] font-bold mb-[40px] uppercase">
          Bizning Xodimlarimiz
        </h1>

        <div className="flex w-full gap-[1rem] flex-wrap">
          {workers.map((e, i) => (
            <motion.div
              key={i}
              className="relative w-[415px] md:w-[32.5%] min-h-[540px] rounded-[10px]"
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() =>
                (window.location.href = "https://example.com/johndoe")
              }
              initial={{ rotateY: 0 }}
              animate={{ rotateY: activeIndex === i ? 180 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Back Side */}
              <motion.div
                className="absolute w-full h-full p-[2rem] bg-[#f9f4e8] flex flex-col  justify-between rounded-[10px] text-[#1f1f1f]"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{
                  rotateY: hoveredIndex === i || activeIndex === i ? 0 : 180,
                  opacity: hoveredIndex === i || activeIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div className="flex flex-col">
                  <h2 className="uppercase text-[4rem] leading-[3.2rem] font-bold">
                    {e.name}
                  </h2>
                  <h3 className="uppercase text-[1rem] mb-2 font-[600]">
                    {e.profession}
                  </h3>
                  <p className="text-justify text-[1rem] font-[300] leading-[1.3]">
                    {e.p}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <img
                    className="max-w-[9rem] min-h-[150px]"
                    src={e.img}
                    alt="worker"
                  />

                  <div className="flex gap-3 items-center">
                    {/* Email Button */}
                    <button
                      onClick={(event) => {
                        event.stopPropagation(); // Prevent click from affecting parent elements
                        console.log("salom");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="#1f1f1f"
                      >
                        <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                      </svg>
                    </button>

                    {/* Website Button */}
                    <a
                      href="https://www.flaire-recruiting.com/#cases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus:outline-none cursor-pointer"
                      title="Websaytga o'tish"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="#1f1f1f"
                      >
                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Front Side */}
              <motion.img
                className="absolute cursor-pointer w-full h-full rounded-[10px]"
                src={e.img}
                alt="worker"
                style={{ backfaceVisibility: "hidden" }}
                initial={{ opacity: 1 }}
                animate={{
                  opacity: hoveredIndex === i || activeIndex === i ? 0 : 1,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
          <div className="w-[415px] md:w-[32%] min-h-[540px] p-[1.7rem] bg-[#f9f4e8] flex flex-col gap-10 rounded-[10px] text-[#1f1f1f]">
            <h2 className=" text-center  uppercase font-bold my-[3rem] text-[2.2vw] leading-[0.8] ">
              Texnik yollash bo'yicha mutaxassis Flairega qo'shiling.
            </h2>
            <p className="text-[0.9rem] font-[300] mb-[2rem]  text-justify">
              Flaire-da mukammallik, hamdardlik va innovatsiyalar bizning
              yondashuvimizning markazidir. Dinamik jamoaga qo'shiling, yuqori
              ta'sirli texnologik loyihalar ustida ishlang va ularning o'sishida
              eng yaxshi startaplarni qo'llab-quvvatlang. Agar siz qat'iylik va
              avtonomiyani qadrlaydigan muhitni qidirsangiz, Flaire siz uchun.
            </p>

            <span
              onClick={() => setopen(true)}
              className=" uppercase underline cursor-pointer text-[20px] mx-auto font-[500]"
            >
              Lets to talk
            </span>
          </div>
        </div>
      </div>
      <ContactModal isOpen={open} setIsOpen={setopen} />
    </section>
  );
}

export default Workers;
