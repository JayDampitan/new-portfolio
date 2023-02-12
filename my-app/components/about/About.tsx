import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import TitleSection from "../utils/title/TitleSection";
import { STACKS__DATA, SERVICES__DATA } from "../../assets/data";
import { AiOutlineRight } from "react-icons/ai";
import { SiMaterialdesignicons } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa"
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
        className=" h-screen max-w-[1700px] justify-center 
          px-4 w-full flex items-center flex-col border-b-[1px] border-yellow lg:pb-11"
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
            <p className="text-center text-white text-sm md:text-[17px] lg:text-lg px-2 lg:leading-loose">
              Hello, my name is Jay Dampitan, a software developer from
              California. I started my programming journey over 2 years ago
              after taking{" "}
              <span className="text-yellow hover:border-b hover:border-yellow">
                <a className="" target="_blank" href="https://bitwiseindustries.com/">
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
            className="flex-wrap text-white justify-center items-center flex flex-col my-1 pt-3 
          lg:pt-4 max-w-[500px] lg:max-w-[600px]"
          >
            <p className="border-b border-yellow pb-1 text-sm md:text-[17px] lg:text-lg text-center">
              Here are a few technologies I've been working with lately :
            </p>
            <ul className="flex items-center flex-wrap gap-4 justify-center mt-4">
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
          className=" flex flex-col lg:flex-row gap-4 mt-4 md:mt-6 lg:my-14 
                    md:w-[70%] lg:w-2/3 cursor-default"
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
                className="relative group flex"
              >
                <div
                  className=" absolute inset-0.5 bg-gradient-to-r from-[#0ddd8643] to-[#2e91cb]
                rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-1000 
                group-hover:duration-200"
                ></div>
                <div
                  className="relative bg-darkGrey group text-white rounded-md  p-1 
                    lg:px-3 lg:py-3 border border-white text-center flex 
                    flex-col items-center hover:border-green-300 hover:-translate-y-1 duration-200"
                >
                  <div className="text-sm lg:text-lg font-semibold flex items-center mb-2 gap-2">
                    <Icon />
                    <h4>{item.skill}</h4>
                  </div>

                  <p className="text-[12px] md:text-[17px] lg:text-sm">
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
        className="absolute w-[5%] h-[5%] opacity-70 bg-gradient-to-r from-[#0ddd8645] to-[#0df1e2] top-32 lg:top-40  
        lg:left-[35%]  blur-3xl rounded-full cursor-pointer"
      ></motion.div>
    </div>
  );
};

export default About;
