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
        className=" max-w-[1700px] flex h-screen w-full flex-col 
      mx-auto justify-center items-center md:px-20 lg:items-start "
      >
        <motion.div
          variants={nameVariant}
          initial="hidden"
          animate="visible"
          className=" md:text-start flex flex-col "
        >
          <h1
            className="text-3xl sm:text-6xl lg:text-9xl border-b
           border-white font-bold text-white pb-5 md:pb-10"
          >
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
            <h3
              className="text-white text-xl md:text-3xl lg:text-4xl 
            font-light mb-5 lg:mb-4 md:mb-10 md:mt-4"
            >
              frontend - backend - ui/ux
            </h3>
            <motion.button
              className="text-white group text-center 
            border border-white lg:text-2xl px-3 py-1 lg:px-5 lg:py-2 
            rounded-full hover:bg-white hover:text-darkGrey hover:border-none 
            transition ease-linear hover:duration-300 hover:transform hover:translate-x-5"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                let's talk{" "}
                <span>
                  <BsArrowUpRight className="ml-1 inline group-hover:rotate-45  duration-500" />
                </span>
              </Link>
            </motion.button>
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
        lg:right-72 blur-3xl rounded-full cursor-pointer"
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
        className="absolute w-[8%] h-[10%] bg-blue-300 top-36 left-[25%]  
        blur-3xl  rounded-full cursor-pointer"
      ></motion.div>

      <ScrollDown />
    </div>
  );
};

export default Hero;
