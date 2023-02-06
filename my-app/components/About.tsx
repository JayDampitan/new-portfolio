import {  useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TitleSection from "../components/TitleSection";
import { ABOUT__DATA, STACKS__DATA, SERVICES__DATA } from "../assets/data";
import { AiFillCheckSquare } from "react-icons/ai";

type Props = {};
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

const About = (props: Props) => {
  const constraintRef = useRef(null);
  return (
    <div
      ref={constraintRef}
      className=" h-screen w-full bg-darkGrey flex items-center justify-center relative px-4"
    >
      <div className=" h-screen max-w-[1700px] justify-center px-4 w-full flex items-center flex-col border-b-[1px] border-white ">
        <TitleSection  title="something about me." />
        <div className=" flex flex-col items-center justify-center ">
          <div className=" py-2 xl:w-[50%]  lg:max-w-[1700px]">
            {ABOUT__DATA.map((item, index) => (
              <p
                key={index}
                className=" text-white text-sm px-2 leading-loose xl:leading-10 sm:text-2xl xl:text-xl"
              >
                {item}
              </p>
            ))}
          </div>
          {/* ---------- skills -------------- */}
          <div className="flex-wrap flex gap-3 lg:gap-6 pt-6 max-w-[500px] lg:max-w-[600px]">
            {STACKS__DATA.map((item, index) => (
              <ul key={index}>
                <li className="text-white flex items-center">
                  {" "}
                  <span className="inline-block px-1">
                    <AiFillCheckSquare />
                  </span>
                  {item}
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* ---------- services offered -------------- */}
        <div className=" flex gap-4  mt-14 lg:pr-20">
          {SERVICES__DATA.map((item, index) => (
            <div
              key={index}
              className="text-darkGrey text-sm lg:text-lg bg-white rounded-md  p-1 lg:px-4 lg:py-3 border border-white text-center flex items-center hover:-translate-y-1 duration-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ----------background blurs-------------- */}
      <motion.div
        variants={whiteVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constraintRef}
        className="absolute w-[5%] h-[5%] bg-white top-32 lg:top-40  lg:left-[35%]  blur-3xl rounded-full cursor-pointer"
      ></motion.div>
    </div>
  );
};

export default About;
