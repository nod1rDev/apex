import React, { useState } from "react";
import { motion } from "framer-motion";
import { hamkorlarRoyhati } from "../utils";

function Hamkorlar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="hamkor" className="mt-[100px] md:mt-[300px] w-[90%] mx-auto">
      <div className="my-[3rem] min-w-full h-[0.4px] bg-[#f9f4e8]"></div>

      <div className="flex flex-col">
        <h1 className="text-[2rem] md:text-[3rem] font-bold mb-[60px] uppercase">
          Bizning hamkorlarimiz
        </h1>

        <div className="flex flex-col">
          {hamkorlarRoyhati.map((e, i) => (
            <motion.div
              key={i}
              className="w-full flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a className="text-[3rem] mb-1 flex items-center gap-2">
                <span>{e.title}</span>
                <img
                  className="w-[24px] rotate-[-45deg]"
                  src="https://cdn.prod.website-files.com/667ebf1b9f3deeecd914b073/667ebf1b9f3deeecd914b0c5_arrow-angled_white-right2.svg"
                  alt=""
                />
              </a>
              <motion.p
                className="text-[#8a8882] max-w-[50rem] font-[300] leading-[1.2]"
                initial={{ opacity: 0, height: 0 }}
                animate={
                  hoveredIndex === i
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {e.p}
              </motion.p>
              <div className="mt-[2rem] min-w-full h-[1px] bg-[#f9f4e8]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hamkorlar;