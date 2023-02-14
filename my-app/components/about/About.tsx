import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import TitleSection from "../utils/title/TitleSection";
import { STACKS__DATA, SERVICES__DATA } from "../../assets/data";
import { AiOutlineRight } from "react-icons/ai";
import { SiMaterialdesignicons } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import {
  whiteVariant,
  descriptionVariant,
  stacksVariant,
} from "./aboutVariant";

type Props = {};

const icons = [BsGlobe, SiMaterialdesignicons, FaGamepad];

const About = (props: Props) => {
  const constraintRef = useRef(null);
  return (
    <div
      ref={constraintRef}
      className=" h-auto w-full bg-darkGrey 
      flex justify-center relative px-4 pt-2 lg:pt-8"
    >
      <div
        className=" h-auto max-w-[1700px] justify-center 
          px-4 w-full flex items-center flex-col border-b-[1px] border-yellow pb-11"
      >
        <TitleSection title="something about me" />

        <div className=" flex flex-col items-center justify-center ">
          <motion.div
            variants={descriptionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" xl:w-[50%]  lg:max-w-[1500px]"
          >
            <p className="text-center text-white text-sm  px-2 lg:leading-loose md:text-[17px] lg:text-lg">
              Hello, my name is Jay Dampitan, a software developer from
              California. I started my programming journey over 2 years ago
              after taking{" "}
              <span className="text-yellow hover:border-b hover:border-yellow">
                <a
                  rel="noreferrer"
                  className=""
                  target="_blank"
                  href="https://bitwiseindustries.com/"
                >
                  Bitwise Industries
                </a>
              </span>{" "}
              boot camp style classes including HTML5, CSS3, Javascript, Python,
              Django, and React. I eventually got accepted to their nationally
              recognized apprenticeship program where I was mentored and coded
              alongside professional engineers, working on real-life projects.
            </p>
          </motion.div>
          {/* ---------- skills -------------- */}
          <motion.div
            className="flex-wrap max-w-[500px] text-white justify-center items-center flex flex-col my-1 pt-3 
          lg:pt-4  lg:max-w-[600px]"
          >
            <p className="border-b border-yellow text-center pb-1 text-sm md:text-[17px] lg:text-lg ">
              {`Here are a few technologies I've been working with lately:`}
            </p>
            <ul className="flex items-center flex-wrap lg:gap-4 justify-center mt-4">
              {STACKS__DATA.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className=" text-white text-[13px] md:text-[17px] lg:text-[16px] "
                >
                  {" "}
                  <span className="inline-block px-1 text-yellow">
                    <AiOutlineRight className="text-xs" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ---------- services offered -------------- */}
        <div
          className=" flex flex-col cursor-default gap-4 mt-4 md:mt-6 lg:my-14 
                    md:w-[70%] lg:w-2/3 sm:flex-row"
        >
          {SERVICES__DATA.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
                viewport={{ once: true }}
                key={index}
                className="relative group flex sm:w-1/3"
              >
                <div
                  className=" absolute inset-0.5 bg-gradient-to-r from-[#ffb7005d] to-[#eb412ad2]
                rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-1000 
                group-hover:duration-200"
                ></div>
                <div
                  className="relative w-full bg-darkGrey group text-white rounded-md  p-1 
                     border border-white text-center flex 
                    flex-col justify-center items-center hover:border-orange-300 hover:-translate-y-1 duration-200 lg:p-3"
                >
                  <div className="text-sm font-semibold flex items-center mb-2 gap-2 lg:text-lg">
                    <Icon />
                    <h4>{item.skill}</h4>
                  </div>

                  <p className="text-[13px] lg:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
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
        className="absolute w-[5%] h-[5%] opacity-70 bg-orange-200 top-32   
          blur-3xl rounded-full cursor-pointer lg:top-40 lg:left-[35%]"
      ></motion.div>
    </div>
  );
};

export default About;
