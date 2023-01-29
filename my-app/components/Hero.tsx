import React, { useEffect, useState } from "react";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import self from "../assets/portfolio.jpg";
import { motion } from "framer-motion";
import SmallCircles from "../components/SmallCircles";
import { BsArrowUpRight } from "react-icons/bs";

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
    <div className="bg-darkGrey w-full h-screen flex">
      <div className="m-auto justify-center items-center px-4 lg:items-start max-w-[1600px] flex w-full flex-col">
        <div className="md:text-start flex flex-col ">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[200px] font-bold text-white pb-5 md:pb-10">
            jay dampitan
          </h1>

          <div className="w-full border-[1px] border-white "></div>
        </div>

        <div className="">
          <div className="text-center lg:text-start">
            <h2 className="text-white text-4xl md:text-5xl lg:text-9xl mt-3">software developer</h2>
            <h3 className="text-white text-xl md:text-3xl xl:text-5xl mb-5 md:mb-10 md:mt-4">frontend - backend - ui/ux</h3>
            <button className="border mx-auto lg:mx-0 text-xl md:text-3xl lg:text-5xl flex items-center text-white py-2 px-4 md:py-4 md:px-6 lg:py-5 lg:px-7 rounded-full hover:bg-white hover:text-darkGrey transition-colors">
              let's talk{" "}
              <span className="ml-4 hover:rotate-45 transition duration-500">
                <BsArrowUpRight />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
    </div>
  );
};

export default Hero;
