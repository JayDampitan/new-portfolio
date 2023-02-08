import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TitleSection from "../utils/TitleSection";
import { ABOUT__DATA, STACKS__DATA, SERVICES__DATA } from "../../assets/data";
import { AiFillCheckSquare, AiFillAppstore } from "react-icons/ai";
import { SiMaterialdesignicons } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { whiteVariant } from "./aboutVariant";
import Image from "next/image";
import globe from "../../assets/globe.png";
import app from "../../assets/app.png";
import ux from "../../assets/ux.png";

type Props = {};

const icons = [BsGlobe, SiMaterialdesignicons, AiFillAppstore];

const About = (props: Props) => {
  const constraintRef = useRef(null);
  return (
    <div
      ref={constraintRef}
      className=" h-auto w-full bg-darkGrey 
      flex justify-center relative px-4 pt-2 lg:pt-8"
    >
      <div
        className=" h-screen max-w-[1700px] justify-center 
          px-4 w-full flex items-center flex-col border-b-[1px] border-white lg:pb-11"
      >
        <TitleSection title="something about me" />

        <div className=" flex flex-col items-center justify-center ">
          <div className=" xl:w-[50%]  lg:max-w-[1500px]">
            {ABOUT__DATA.map((item, index) => (
              <p
                key={index}
                className="text-center text-white text-[15px] md:text-[17px] lg:text-lg px-2 lg:leading-loose 
                           "
              >
                {item}
              </p>
            ))}
          </div>
          {/* ---------- skills -------------- */}
          <div
            className="flex-wrap justify-center flex gap-1 lg:gap-3 my-1 pt-3 
          lg:pt-10 max-w-[500px] lg:max-w-[600px] "
          >
            {STACKS__DATA.map((item, index) => (
              <ul key={index}>
                <li
                  className="text-white text-[13px] md:text-[17px]  lg:text-lg 
                lg:text-[16px] flex items-center"
                >
                  {" "}
                  <span className="inline-block px-1 text-white">
                    <AiFillCheckSquare />
                  </span>
                  {item}
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* ---------- services offered -------------- */}
        <div
          className=" flex flex-col lg:flex-row gap-4 mt-4 md:mt-6 lg:my-14 
        w-[90%] md:w-[70%] lg:w-2/3 cursor-default"
        >
          {SERVICES__DATA.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={index}
                className=" text-white rounded-md  p-1 
                    lg:px-3 lg:py-3 border border-white text-center flex 
                    flex-col items-center hover:-translate-y-1 duration-200"
              >
                <div className=" lg:text-lg font-semibold flex items-center mb-2 gap-2">
                  <Icon />
                  <h4>{item.skill}</h4>
                </div>

                <p className="text-[13px] md:text-[17px] lg:text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ----------background blurs-------------- */}
      <motion.div
        variants={whiteVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constraintRef}
        className="absolute w-[5%] h-[5%] bg-white top-32 lg:top-40  
        lg:left-[35%]  blur-3xl rounded-full cursor-pointer"
      ></motion.div>
    </div>
  );
};

export default About;
