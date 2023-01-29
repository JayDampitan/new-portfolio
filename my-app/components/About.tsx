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
    <div className="h-screen flex justify-center items-center w-full bg-darkGrey px-6 py-6 ">
      <div className=" max-w-[2000px] mx-auto w-full ">
        <TitleSection title="about" />
        <div className="md:my-10 justify-center xl:justify-between flex-col flex xl:flex-row">
          <div className="py-4 xl:w-[50%]">
            {ABOUT__DATA.map((item) => (
              <p className="text-white xl:leading-normal xl:font-semibold px-2 sm:text-2xl xl:text-5xl">
                {item}
              </p>
            ))}
          </div>
          <div className="xl:pl-20 flex flex-col justify-center xl:w-[50%]">
            <div className="md:w-full">
              <h2 className="text-white text-xl md:text-4xl xl:text-5xl xl:py-4">
                client
              </h2>
              <div className="flex xl:justify-center items-center py-4 px-4 my-2 mx-auto text-[14px] flex-wrap gap-4 border-[1px] xl:w-[800px] xl:h-[300px] rounded-lg md:text-xl lg:text-2xl xl:text-3xl">
                {CLIENT__DATA.map((item) => (
                  <div className="text-white border rounded-full px-3 py-1 xl:px-4 xl:py-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-full">
              <h2 className="text-white text-xl md:text-4xl xl:text-5xl xl:py-4">
                server
              </h2>
              <div className="flex xl:justify-center items-center py-4 px-4 my-2 mx-auto text-[14px] flex-wrap gap-5 border-[1px] xl:py-10 xl:w-[800px] xl:h-[300px] rounded-lg md:text-xl lg:text-2xl xl:text-3xl">
                {SERVER__DATA.map((item) => (
                  <div className="text-white border rounded-full px-3 py-1 xl:px-4 xl:py-2">
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
