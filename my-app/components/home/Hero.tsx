import { useRef } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import ScrollDown from "../utils/scrollDown/ScrollDown";
import {
  yellowVariant,
  blueVariant,
  whiteVariant,
  nameVariant,
  titleVariant,
} from "./heroVariants";

type Props = {};

const Hero = (props: Props) => {
  const constrainRef = useRef(null);

  return (
    <div
      ref={constrainRef}
      className=" bg-darkGrey w-full h-screen flex relative"
    >
      <div
        className="max-w-[1700px] flex h-screen w-full flex-col 
      mx-auto justify-center items-center lg:pl-28  lg:items-start lg:mt-11"
      >
        <motion.div
          variants={nameVariant}
          initial="hidden"
          animate="visible"
          className=" md:text-start flex flex-col "
        >
          <h1
            className="text-3xl  lg:text-9xl border-b
           border-yellow font-bold text-white pb-5 md:pb-10 sm:text-6xl"
          >
            jay dampitan
          </h1>
        </motion.div>

        <div className="">
          <motion.div
            variants={titleVariant}
            initial="hidden"
            animate="visible"
            className=" text-center lg:text-start"
          >
            <h2 className="text-white text-2xl md:text-5xl lg:text-6xl mt-3">
              software developer
            </h2>
            <h3
              className="text-white text-xl md:text-3xl lg:text-4xl 
            font-light mb-5 lg:mb-4 md:mb-10 md:mt-4"
            >
              frontend - backend - ui/ux
            </h3>
            <div className="relative group w-fit mx-auto lg:mx-0">
              <div className="absolute inset-0.5 bg-gradient-to-r from-[#ffb7005d] to-[#eb412ad2] 
              rounded-full blur opacity-0 group-hover:opacity-60"></div>
              <button
                className="text-darkGrey relative bg-white group text-center 
            border border-white px-3 py-1 lg:py-2 
            rounded-full hover:text-orange-200 hover:bg-darkGrey hover:border-orange-400 
            transition ease-linear lg:text-2xl lg:px-6"
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                 {`let's talk`}
                  <span>
                    <BsArrowUpRight className="ml-1 duration-500 inline group-hover:rotate-45" />
                  </span>
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ----------background blurs-------------- */}
      <motion.div
        variants={whiteVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constrainRef}
        className="absolute w-[8%] h-[10%] bg-white top-60 right-11 
         blur-3xl rounded-full cursor-pointer lg:right-72"
      ></motion.div>
      <motion.div
        variants={yellowVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constrainRef}
        className="absolute w-[8%] h-[10%] bg-orange-100 bottom-96
        right-[35%] blur-3xl rounded-full cursor-pointer"
      ></motion.div>
      <motion.div
        variants={blueVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constrainRef}
        className="absolute w-[8%] h-[10%] bg-blue-300 top-36 opacity-30 left-[25%]  
        blur-3xl  rounded-full cursor-pointer"
      ></motion.div>

      <ScrollDown />
    </div>
  );
};

export default Hero;
