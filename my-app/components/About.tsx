import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import TitleSection from "../components/TitleSection";
import { SERVER__DATA } from "../assets/data";
import { CLIENT__DATA } from "../assets/data";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex justify-center items-center w-full bg-darkGrey px-6 py-6 ">
      <div className=" max-w-[2000px] mx-auto w-full ">
        <TitleSection title="about" />
        <div className="md:my-10 justify-center xl:justify-between flex-col flex xl:flex-row">
          <div className="py-4 xl:w-[50%]">
            <p className="text-white xl:leading-normal xl:font-semibold px-2 sm:text-2xl xl:text-5xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio temporibus et vel praesentium harum. Eveniet quisquam
              ipsa assumenda omnis inventore, ex aspernatur excepturi? Ab, velit
              facere? Dolorem, adipisci ipsam alias magnam optio incidunt iste
              sit dignissimos aliquam numquam sequi eligendi dolorum veniam
              tenetur voluptas laboriosam illo necessitatibus porro ab eos?
            </p>
          </div>
          <div className="flex flex-col items-center justify-center xl:w-[50%]">
            <div className="">
              <h2 className="text-white text-xl md:text-4xl xl:text-5xl ">
                client
              </h2>
              <div className="flex xl:justify-center items-center my-2 mx-auto text-[14px] flex-wrap gap-5 border-[1px] xl:w-[800px] xl:h-[300px] p-4 rounded-lg  md:text-xl lg:text-2xl xl:text-3xl">
                {CLIENT__DATA.map((item) => (
                  <div className="text-white border rounded-full px-3 py-1 xl:px-4 xl:py-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 md:mt-5 lg:mt-6 xl:mt-8">
              <h2 className="text-white text-xl md:text-4xl lg:text-5xl">
                server
              </h2>
              <div className="flex xl:justify-center items-center  my-2 mx-auto text-[14px] flex-wrap gap-5 border-[1px] xl:w-[800px] xl:h-[300px] p-4 rounded-lg  md:text-xl lg:text-2xl xl:text-3xl">
                {SERVER__DATA.map((item) => (
                  <div className="text-white border rounded-full px-3 py-1">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
