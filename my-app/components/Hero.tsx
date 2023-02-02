import React, { useEffect, useState } from "react";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import self from "../assets/portfolio.jpg";
import { motion } from "framer-motion";
import SmallCircles from "../components/SmallCircles";
import { BsArrowUpRight } from "react-icons/bs";
import SectionBorder from "./SectionBorder";
import ScrollDown from "./ScrollDown";

type Props = {};

const Hero = (props: Props) => {
  const svgVariants = {
    hidden: {
      rotate: -180,
    },
    visible: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  // const [cursorX, setCursorX] = useState();
  // const [cursorY, setCursorY] = useState();

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e: any) => {
  //     setCursorX(e.pageX);
  //     setCursorY(e.pageY);
  //   });
  // }, [cursorX, cursorY]);

  return (
    <div className=" bg-darkGrey w-full h-screen flex">
      <div className=" max-w-[1700px] flex h-screen w-full flex-col mx-auto justify-center items-center md:px-20 lg:items-start ">
        <div className=" md:text-start flex flex-col ">
          <h1 className="text-3xl sm:text-6xl lg:text-9xl border-b border-white font-bold text-white pb-5 md:pb-10">
            jay dampitan
          </h1>
        </div>

        <div className=" lg:flex lg:justify-between w-full">
          <div className=" text-center lg:text-start lg:w-[50%]">
            <h2 className="text-white text-2xl md:text-5xl lg:text-6xl mt-3">
              software developer
            </h2>
            <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-light mb-5 md:mb-10 md:mt-4">
              frontend - backend - ui/ux
            </h3>
          </div>

          <div
            className=" transform translate-y-6 
           w-full flex items-end justify-center lg:justify-end lg:pr-72 lg:w-[50%]"
          >
           <motion.div className=" border-gray-900 rounded-full bg-white w-[100px] h-[100px] lg:h-[200px] lg:w-[200px] relative flex items-center justify-center">
                <motion.div animate={{y: [0, 20 ,10 , 20, 40, 50, 20, 10, 0]}} transition={{duration: 10, repeat: Infinity}} className="absolute w-full h-full bg-white -top-20 -z-10 lg:-top-32 lg:-right-24 blur-2xl lg:blur-3xl rounded-full"></motion.div>
                <motion.div animate={{y: [0, 20 ,10 , 20, 40, 50, 20, 10, 0]}} transition={{duration: 10, delay: 1, repeat: Infinity}} className="absolute w-full h-full bg-gray-700 -bottom-4 -left-20 -z-10 lg:-bottom-25 lg:-left-32 blur-2xl lg:blur-3xl rounded-full"></motion.div>
                <motion.div animate={{y: [0, 20 ,10 , 20, 40, 50, 20, 10, 0]}} transition={{duration: 10, delay: 1.5, repeat: Infinity}} className="absolute w-full h-full bg-blue-700 -z-10 -bottom-2 -right-16 lg:-bottom-20 lg:-right-28 blur-2xl lg:blur-3xl rounded-full"></motion.div>
                <BackgroundCircles/>
              <motion.h1  className="border p-8 w-[80%] h-[80%] flex items-center justify-center border-darkGrey rounded-full">let's talk</motion.h1>
           </motion.div>
          </div>
        </div>
      </div>

      {/* <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div> */}
      <div className="hidden sm:block">
        <ScrollDown />
      </div>
    </div>
  );
};

export default Hero;
