import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import self from "../assets/portfolio.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div className="h-screen w-full flex flex-col-reverse  bg-[#D4D7E1] [#EF7A0E] xl:flex-row">
      {/* Left About Section */}
      <div className=" w-full h-[80%] p-20  flex flex-col items-start justify-center xl:w-[50%] xl:pl-64">
        <h3 className="text-2xl xl:text-4xl mb-3">
          <span className=" section-subtitle"></span> About me
        </h3>
        <h2 className="text-5xl xl:text-6xl mb-2 font-semibold">
          Let's talk about your next project
        </h2>
        <h3 className="text-3xl xl:text-4xl mb-4">Software Developer</h3>
        <p className=" max-w-[800px] xl:text-xl mb-5">
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
      <div className="relative flex w-full h-[80%] items-center justify-center xl:w-[50%] xl:h-[80%]">
        <Image
          className="h-60 w-60 rounded-full z-10 flex items-center justify-center xl:h-[400px] xl:w-[400px]"
          src={self}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default About;
