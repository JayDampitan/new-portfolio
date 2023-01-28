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
      <div className="m-auto items-start max-w-[1600px] flex w-full flex-col">
        <div className=" max-w-[1600px] text-start flex flex-col ">
          <h1 className="text-[200px] font-bold text-white">jay dampitan</h1>

          <div className="w-full border border-white"></div>
        </div>

        <div className="flex">
          <div>
            <h2 className="text-white text-9xl mt-3">software developer</h2>
            <button className="border text-5xl flex text-white py-4 px-6 rounded-full mt-10 hover:bg-white hover:text-darkGrey transition-colors">
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
