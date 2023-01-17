import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import self from "../assets/portfolio.jpg";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div className=" h-screen w-full flex flex-col-reverse  bg-[#D4D7E1] [#EF7A0E] xl:pt-40 xl:flex-row">
      {/* Left About Section */}
      <div className=" w-full h-[80%] px-10 flex flex-col items-start justify-center lg:w-[50%] lg:pl-64">
        <h3 className="text-2xl text-[#EF7A0E] lg:text-4xl mb-3">
          <span className=" section-subtitle"></span> About me
        </h3>
        <h2 className="text-4xl xl:text-6xl mb-2 font-semibold">
          What's your new project?
        </h2>
        <p className=" max-w-[800px] xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          laudantium cumque quo exercitationem aliquam eligendi ipsum odit vitae
          nobis porro.
        </p>
        <Link
          className="border border-[#EF7A0E] text-[#EF7A0E] py-2 px-5 rounded-md"
          href="#contact"
        >
          Download Resumé
        </Link>
      </div>

      {/* Right About Section */}
      <div className=" relative flex w-full h-[80%] items-center justify-center xl:w-[50%] xl:h-[80%]">
        <Image
          className="border-2 border-blue-500 absolute flex items-center justify-center top-20 left-20 h-[120px] w-[120px] xl:top-10 lg:left-52  rounded-full z-10  lg:h-[260px] lg:w-[260px]"
          src={self}
          alt=""
        />
        <Image
          className="border-2 border-yellow-500 absolute h-[180px] w-[180px] bottom-10 left-30 rounded-full z-10 flex items-center justify-center lg:bottom-0 lg:h-[350px] lg:w-[350px]"
          src={self}
          alt=""
        />
        <Image
          className="border-2 border-green-500 absolute h-[80px] w-[80px] top-28 right-16 rounded-full z-10 flex items-center justify-center lg:top-26 lg:right-64 lg:h-[200px] lg:w-[200px]"
          src={self}
          alt=""
        />
        {/* <BackgroundCircles /> */}
        <div className="absolute border border-[#736969] rounded-full h-[100px] w-[100px] xl:h-[300px] xl:w-[300px]" />
        <div className="absolute border border-[#c8aa6a] rounded-full h-[200px] w-[200px] xl:h-[500px] xl:w-[500px]" />
      </div>
    </motion.div>
  );
};

export default About;
