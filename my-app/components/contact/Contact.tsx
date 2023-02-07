import React, { useRef } from "react";
import TitleSection from "../utils/TitleSection";
import ToTop from "../utils/ToTop";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiPlanet } from "react-icons/bi";
import SmallCirlces from "../utils/SmallCircles";
import {whiteVariant, orangeVariant, blueVariant } from "./contactVariant"

type Props = {};

const Contact = (props: Props) => {
  const constraintsRef = useRef(null);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-darkGrey relative">
      <TitleSection  title="say hello" />
      <div ref={constraintsRef} className="mt-20  relative">
        <motion.div
          animate={{ scale: [1, 1.1, 1, 1.1, 1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] flex items-center justify-center rounded-full bg-yellow "
        >
          <h2 className="text-xl lg:text-4xl text-gray-500 hover:text-white hover:scale-105 cursor-pointer transition ease-in duration-400">
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
          className="absolute w-[40%] h-[40%] bg-white -top-4 -right-9  blur-3xl rounded-full cursor-pointer"
        ></motion.div>
        <motion.div
          variants={orangeVariant}
          whileHover="hover"
          animate="visible"
          drag
          dragConstraints={constraintsRef}
          className="absolute w-[40%] h-[40%] bg-orange-100 -top-4 -left-9  blur-3xl rounded-full cursor-pointer"
        ></motion.div>
        <motion.div
          variants={blueVariant}
          whileHover="hover"
          animate="visible"
          drag
          dragConstraints={constraintsRef}
          className="absolute w-[40%] h-[40%] bg-blue-300 bottom-0 left-[30%] blur-3xl  rounded-full cursor-pointer"
        ></motion.div>
      </div>
      <ToTop />

      {/* -------------planet feature------------ */}
      <div className="absolute left-3 bottom-3 lg:bottom-9 lg:left-9 flex gap-4 hover:scale-110 ">
        <div className="w-[20px] h-[20px] flex items-center justify-center border rounded-full cursor-pointer">
          <Link
            className="flex items-center justify-center text-white text-xl z-20"
            href="https://sharemygame.com/@JayDampitan/jay-s-project-boost-from-unity-3d-course"
            target="_blank"
          >
            <BiPlanet />
          </Link>
          <SmallCirlces/>
        </div>
      </div>
      {/* -----------end of planet feature------------ */}
    </div>
  );
};

export default Contact;
