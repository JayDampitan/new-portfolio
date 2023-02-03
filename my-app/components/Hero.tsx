import React, { useEffect, useState, useRef } from "react";
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

const nameVariant = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 4,
    },
  },
};
const titleVariant = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 4.5,
    },
  },
};

const whiteVariant = {
  visible: {
    y: [0, 10, 10, 30, 30, 10, 10, 0],
    scale: [1, 1.2, 1, 1.2, 1, 1.2, 1],
    transition: {
      duration: 8,
      delay: 5,
      repeat: Infinity,
    },
  },
  hover: {
    scale: 1.2,
  },
};
const blueVariant = {
  visible: {
    y: [0, 10, 10, 30, 30, 10, 10, 0],
    scale: [1, 1.2, 1, 1.2, 1, 1.2, 1],
    transition: {
      duration: 8,
      delay: 5.5,
      repeat: Infinity,
    },
  },
  hover: {
    scale: 1.2,
  },
};
const yellowVariant = {
  visible: {
    y: [0, 10, 10, 30, 30, 10, 10, 0],
    scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
    transition: {
      duration: 8,
      delay: 6,
      repeat: Infinity,
    },
  },
  hover: {
    scale: 1.2,
  },
};

const Hero = (props: Props) => {
  // const [cursorX, setCursorX] = useState();
  // const [cursorY, setCursorY] = useState();

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e: any) => {
  //     setCursorX(e.pageX);
  //     setCursorY(e.pageY);
  //   });
  // }, [cursorX, cursorY]);

  const constrainRef = useRef(null);

  return (
    <motion.div
      ref={constrainRef}
      className=" bg-darkGrey w-full h-screen flex relative"
    >
      <div className=" max-w-[1700px] flex h-screen w-full flex-col mx-auto justify-center items-center md:px-20 lg:items-start ">
        <motion.div
          variants={nameVariant}
          initial="hidden"
          animate="visible"
          className=" md:text-start flex flex-col "
        >
          <h1 className="text-3xl sm:text-6xl lg:text-9xl border-b border-white font-bold text-white pb-5 md:pb-10">
            jay dampitan
          </h1>
        </motion.div>

        <div className=" lg:flex w-full">
          <motion.div
            variants={titleVariant}
            initial="hidden"
            animate="visible"
            className=" text-center lg:text-start lg:w-[50%]"
          >
            <h2 className="text-white text-2xl md:text-5xl lg:text-6xl mt-3">
              software developer
            </h2>
            <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-light mb-5 lg:mb-4 md:mb-10 md:mt-4">
              frontend - backend - ui/ux
            </h3>
            <motion.button className="text-white group text-center border borer-white lg:text-2xl px-3 py-1 lg:px-5 lg:py-2 rounded-full hover:bg-white hover:text-darkGrey transition ease-linear hover:duration-300 hover:transform hover:translate-x-5">
              <Link href="#contact">
                let's talk{" "}
                <span>
                  <BsArrowUpRight className="ml-3 inline group-hover:rotate-45  duration-500" />
                </span>
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={whiteVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constrainRef}
        className="absolute w-[8%] h-[10%] bg-white top-60 right-11 lg:right-96 blur-3xl rounded-full cursor-pointer"
      ></motion.div>
      <motion.div
        variants={yellowVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constrainRef}
        className="absolute w-[8%] h-[10%] bg-yellow-100 bottom-52 right-[35%] blur-3xl rounded-full cursor-pointer"
      ></motion.div>
      <motion.div
        variants={blueVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constrainRef}
        className="absolute w-[8%] h-[10%] bg-blue-300 top-36 left-[25%]  blur-3xl  rounded-full cursor-pointer"
      ></motion.div>

      <ScrollDown />

      {/* <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div> */}
    </motion.div>
  );
};

export default Hero;
