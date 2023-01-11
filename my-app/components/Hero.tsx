import React from "react";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image"
import self from "../assets/portfolio.jpg"

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen flex flex-col-reverse w-full bg-[#D4D7E1] [#EF7A0E]  xl:flex-row">
      {/* Left Hero Section */}
      <div className="border w-full h-[80%] flex flex-col items-start pl-10 justify-center">
        <h3 className="text-3xl">
          <span>____</span> Hello
        </h3>
        <h2 className="text-5xl">I'm Jay Dampitan</h2>
        <h3 className="text-3xl">Software Developer</h3>
        <p className="max-w-[800px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          laudantium cumque quo exercitationem aliquam eligendi ipsum odit vitae
          nobis porro.
        </p>
        <Link
          className="border border-[#EF7A0E] text-[#EF7A0E] py-2 px-5 rounded-md"
          href="#contact"
        >
          {" "}
          Let's chat
        </Link>
      </div>

      {/* Right Hero Section */}
      <div className="flex w-full items-center justify-center border xl:w-[50%] h-[80%]">
        <div className="relative">
          <Image className="h-80 w-80 rounded-full" src={self} alt="" />
          <BackgroundCircles />
        </div>
      </div>
    </div>
  );
};

export default Hero;
