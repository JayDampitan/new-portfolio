import React, { useState, useRef } from "react";
import TitleSection from "../utils/title/TitleSection";
import ToTop from "../utils/ToTop";
import { motion } from "framer-motion";
import {
  whiteVariant,
  orangeVariant,
  blueVariant,
  contactVariant,
  blVariant,
} from "./contactVariant";

type Props = {};

const Contact = (props: Props) => {
  const constraintsRef = useRef(null);
  const [activeTooltip, setActiveTooltip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jaydampitan@gmail.com");
    setActiveTooltip(true);
    setTimeout(() => {
      setActiveTooltip(false);
    }, 2000);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-darkGrey relative">
      <TitleSection title="say hello" />
      <motion.div
        variants={contactVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        ref={constraintsRef}
        className="mt-20  relative"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1, 1.1, 1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] 
          flex items-center justify-center rounded-full bg-yellow"
        >
          <h2
            onClick={handleCopy}
            className={`text-xl lg:text-4xl text-gray-100 
          hover:text-white hover:scale-105 relative cursor-pointer transition ease-in duration-400
            after:content-['copied'] after:absolute after:text-[12px]
             after:text-purple-500 after:-top-9 after:right-28 after:bg-darkGrey after:px-1 after:rounded ${
               activeTooltip
                 ? "after:opacity-1"
                 : "after:opacity-0 after:duration-300 after:ease-in-out"
             }
          `}
          >
            jaydampitan@gmail.com
          </h2>
        </motion.div>

        {/* ---------background blurs----------- */}
        <motion.div
          variants={whiteVariant}
          whileHover="hover"
          animate="visible"
          drag
          dragConstraints={constraintsRef}
          className="absolute w-[40%] h-[40%] bg-white -top-4 -right-9  
          blur-3xl rounded-full cursor-pointer"
        ></motion.div>
        <motion.div
          variants={orangeVariant}
          whileHover="hover"
          animate="visible"
          drag
          dragConstraints={constraintsRef}
          className="absolute w-[40%] h-[40%] bg-orange-100 -top-4 
          -left-9  blur-3xl rounded-full cursor-pointer"
        ></motion.div>
        <motion.div
          variants={blueVariant}
          whileHover="hover"
          animate="visible"
          drag
          dragConstraints={constraintsRef}
          className="absolute w-[40%] h-[40%] bg-blue-300 bottom-0 
          left-[30%] blur-3xl  rounded-full cursor-pointer"
        ></motion.div>
      </motion.div>
      <ToTop />
      {/* --------start of bottom left element--------- */}
      <motion.div
        variants={blVariant}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        className="absolute text-white bottom-4 left-4 text-[10px] md:text-[14px] md:left-10"
      >
        <p>designed and built by: <span className="hidden bg-gradient-to-r from-[#0092B6] to-[#0D41E1]"></span></p>
        <a
          rel="noreferrer"
          href="https://github.com/JayDampitan"
          target="_blank"
          className="text-yellow"
        >
          jay dampitan <span className="hidden bg-gradient-to-r from-[#0ddd8645] to-[#0df1e2]"></span>
        </a>
        <p>2023 <span className="hidden bg-gradient-to-r from-[#aa03ac2f] to-[#9305ffeb]"></span></p>
      </motion.div>
    </div>
  );
};

export default Contact;
