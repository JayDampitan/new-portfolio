import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import TitleSection from "../utils/title/TitleSection";
import { ABOUT__DATA, STACKS__DATA, SERVICES__DATA } from "../../assets/data";
import { AiOutlineRight, AiFillAppstore } from "react-icons/ai";
import { SiMaterialdesignicons } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import {
  whiteVariant,
  descriptionVariant,
  stacksVariant,
} from "./aboutVariant";
import Image from "next/image";
import globe from "../../assets/globe.png";
import app from "../../assets/app.png";
import ux from "../../assets/ux.png";

type Props = {};

const icons = [BsGlobe, SiMaterialdesignicons, AiFillAppstore];

const About = (props: Props) => {
  const controls = useAnimation();

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
          <motion.div
            variants={descriptionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" xl:w-[50%]  lg:max-w-[1500px]"
          >
            {ABOUT__DATA.map((item, index) => (
              <p
                key={index}
                className="text-center text-white text-[15px] md:text-[17px] lg:text-lg px-2 lg:leading-loose 
                           "
              >
                {item}
              </p>
            ))}
          </motion.div>
          {/* ---------- skills -------------- */}
          <motion.div
            variants={stacksVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                  <span className="inline-block px-1 text-yellow">
                    <AiOutlineRight className="text-xs" />
                  </span>
                  {item}
                </li>
              </ul>
            ))}
          </motion.div>
        </div>

        {/* ---------- services offered -------------- */}
        <div
          className=" flex flex-col lg:flex-row gap-4 mt-4 md:mt-6 lg:my-14 
                    w-[90%] md:w-[70%] lg:w-2/3 cursor-default"
        >
          {SERVICES__DATA.map((item, index) => {
            const Icon = icons[index];
            return (
            
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                  viewport={{once: true}}
                  key={index}
                  className="relative group"
                >
                  <div
                    className="absolute inset-0.5 bg-gradient-to-r from-[#0ddd8643] to-[#2ecbc0]
                rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-1000 
                group-hover:duration-200"
                  ></div>
                  <div
                    className="relative bg-darkGrey group text-white rounded-md  p-1 
                    lg:px-3 lg:py-3 border border-white text-center flex 
                    flex-col items-center hover:border-green-300 hover:-translate-y-1 duration-200"
                  >
                    <div className="lg:text-lg font-semibold flex items-center mb-2 gap-2">
                      <Icon />
                      <h4>{item.skill}</h4>
                    </div>

                    <p className="text-[13px] md:text-[17px] lg:text-sm">
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
        className="absolute w-[5%] h-[5%] opacity-50 bg-gradient-to-r from-[#0ddd8645] to-[#0df1e2] top-32 lg:top-40  
        lg:left-[35%]  blur-3xl rounded-full cursor-pointer"
      ></motion.div>
    </div>
  );
};

export default About;
