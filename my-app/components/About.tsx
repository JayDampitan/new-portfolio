import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import TitleSection from "../components/TitleSection";
import { ABOUT__DATA, SERVER__DATA } from "../assets/data";
import { CLIENT__DATA } from "../assets/data";
import ScrollDown from "./ScrollDown";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex px-4 py-4 justify-center items-center w-full bg-darkGrey  ">
      <div className="max-w-[1500px] w-full">
        <TitleSection textColor='white' title="about." />
        <div className="md:my-10  xl:justify-between flex-col flex xl:flex-row">
          <div className="py-2 xl:w-[50%] flex items-center ">
            {ABOUT__DATA.map((item, index) => (
              <p key={index} className="text-white leading-loose text-sm xl:font-semibold px-2 sm:text-2xl xl:text-3xl">
                {item}
              </p>
            ))}
          </div>
          <div className="xl:pl-20 flex flex-col justify-center xl:w-[50%] mt-2">
            <div className="md:w-full">
              <h2 className="text-white text-xl md:text-4xl xl:text-5xl xl:py-4">
                client
              </h2>
              <div className="flex justify-center items-center py-4 px-2 my-2 mx-auto text-[14px] flex-wrap gap-3 xl:gap-4 border-[1px] border-white rounded-lg md:text-xl lg:text-2xl xl:text-3xl">
                {CLIENT__DATA.map((item, index) => (
                  <div key={index} className="text-white border-white border text-[12px] xl:text-2xl rounded-full px-3 py-1 xl:px-4 xl:py-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-full">
              <h2 className="text-white text-xl md:text-4xl xl:text-5xl xl:py-4">
                server
              </h2>
              <div className="flex justify-center items-center py-4 px-2 my-2 mx-auto text-[14px] flex-wrap gap-3 xl:gap-5 border-[1px] border-white xl:py-10  rounded-lg md:text-xl lg:text-2xl xl:text-3xl">
                {SERVER__DATA.map((item, index) => (
                  <div key={index} className="text-white border-white border text-[12px] xl:text-2xl rounded-full px-3 py-1 xl:px-4 xl:py-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <ScrollDown />
      </div>
    </div>
  );
};

export default About;
