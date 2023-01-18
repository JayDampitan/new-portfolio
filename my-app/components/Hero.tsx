import React, { useEffect, useState } from "react";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import self from "../assets/portfolio.jpg";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  useEffect(() => {
    window.addEventListener("mousemove", (e: any) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });
  }, [cursorX, cursorY]);

  return (
    <motion.div
      id="main-hero"
      className=" h-screen w-full flex flex-col-reverse items-center justify-center bg-[#D4D7E1] [#EF7A0E] xl:flex-row xl:pb-40"
    >
      {/* Left Hero Section */}

      <div className=" w-full h-[80%] p-10  flex flex-col items-start xl:justify-center xl:w-[50%] xl:pl-64">
        <h3 className="text-2xl xl:text-4xl mb-3 text-[#EF7A0E]">
          <span className="section-subtitle"></span> Hello
        </h3>
        <h2 className="text-4xl lg:text-6xl mb-2 font-semibold">
          I'm Jay Dampitan
        </h2>
        <h3 className="text-3xl xl:text-4xl mb-4">Software Developer</h3>
        <p className=" max-w-[800px] xl:text-xl mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          laudantium cumque quo.
        </p>
        <Link
          className="border-2 border-[#EF7A0E] text-[#EF7A0E] py-2 px-5 rounded-md font-semibold"
          href="#contact"
        >
          Let's chat
        </Link>
      </div>

      {/* Right Hero Section */}
      <div className=" relative flex w-full h-screen items-center justify-center xl:w-[50%] xl:h-[80%]">
        <Image
          className="h-60 w-60 rounded-full z-10 flex items-center justify-center xl:h-[400px] xl:w-[400px]"
          src={self}
          alt=""
        />
        <div className="h-[40px] w-[40px] rounded-full absolute border-2 border-[#EF7A0E] top-10 sm:top-20 right-20 md:top-40 md:right-40 md:w-[60px] md:h-[60px] lg:top-50"></div>
        <div className="h-[40px] w-[40px] rounded-full absolute border-2 border-[#EF7A0E] bottom-10 sm:bottom-20 left-20 md:bottom-40 md:left-40 md:w-[60px] md:h-[60px] "></div>
        <BackgroundCircles />
      </div>

      <div
        className="cursor"
        style={{ left: cursorX + "px", top: cursorY + "px" }}
      ></div>
    </motion.div>
  );
};

export default Hero;
