import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import TitleSection from "../components/TitleSection";
import { ABOUT__DATA, STACKS__DATA, SERVICES__DATA } from "../assets/data";
import ScrollDown from "./ScrollDown";
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
  // const [cursorX, setCursorX] = useState();
  // const [cursorY, setCursorY] = useState();

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e: any) => {
  //     setCursorX(e.pageX);
  //     setCursorY(e.pageY);
  //   });
  // }, [cursorX, cursorY]);

  const constraintRef = useRef(null)
  return (
    <div ref={constraintRef} className=" h-screen w-full bg-darkGrey flex items-center justify-center relative">
      <div className=" h-screen max-w-[1700px] justify-center  px-4 w-full flex items-center flex-col">
        <TitleSection textColor="white" title="something about me." />
        <div className="flex flex-col items-center justify-center ">
          <div className="py-2 xl:w-[50%]  lg:max-w-[1400px]">
            {ABOUT__DATA.map((item, index) => (
              <p
                key={index}
                className="text-white text-sm px-2 leading-loose xl:leading-10 sm:text-2xl xl:text-xl"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="flex-wrap flex gap-3 lg:gap-6 pt-6 max-w-[500px] lg:max-w-[600px]">
            {STACKS__DATA.map((item) => (
              <ul>
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
          {/* <div
          className="cursor"
          style={{
            left: cursorX + "px",
            top: cursorY + "px",
          }}
        ></div> */}
        </div>

        <div className="flex gap-4  mt-12 ">
          {SERVICES__DATA.map((item) => (
            <p className="text-darkGrey text-sm lg:text-lg bg-white rounded-md  p-1 lg:px-4 lg:py-3 border text-center flex items-center">
              {item}
            </p>
          ))}
        </div>
      </div>
      <ScrollDown />
      <motion.div
        variants={whiteVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constraintRef}
        className="absolute w-[8%] h-[10%] bg-white top-72 left-52  blur-3xl rounded-full cursor-pointer"
      ></motion.div>
    </div>
  );
};

export default About;
