import React from "react";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import self from "../assets/portfolio.jpg";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <motion.div className="h-screen w-full flex flex-col-reverse  bg-[#D4D7E1] [#EF7A0E] xl:flex-row">
      {/* Left Hero Section */}
      <div className=" w-full h-[80%] p-20  flex flex-col items-start justify-center xl:w-[50%] xl:pl-64">
        <h3 className="text-2xl xl:text-4xl mb-3 text-[#EF7A0E]">
          <span className=" section-subtitle"></span> Hello
        </h3>
        <h2 className="text-5xl xl:text-6xl mb-2 font-semibold">
          I'm Jay Dampitan
        </h2>
        <h3 className="text-3xl xl:text-4xl mb-4">Software Developer</h3>
        <p className=" max-w-[800px] xl:text-xl mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          laudantium cumque quo exercitationem aliquam eligendi ipsum odit vitae
          nobis porro.
        </p>
        <Link
          className="border-2 border-[#EF7A0E] text-[#EF7A0E] py-2 px-5 rounded-md font-semibold"
          href="#contact"
        >
          Let's chat
        </Link>
      </div>

      {/* Right Hero Section */}
      <div className="relative flex w-full h-[80%] items-center justify-center xl:w-[50%] xl:h-[80%]">
        <Image
          className="h-60 w-60 rounded-full z-10 flex items-center justify-center xl:h-[400px] xl:w-[400px]"
          src={self}
          alt=""
        />
        <div className="h-[80px] w-[80px] rounded-full absolute top-40 left-40 border-2 border-[#EF7A0E]"></div>
        <div className="h-[80px] w-[80px] rounded-full absolute bottom-40 right-40 border-2 border-[#EF7A0E]"></div>
        <BackgroundCircles />
      </div>
    </motion.div>
  );
};

export default Hero;
