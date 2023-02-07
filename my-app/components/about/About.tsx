import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TitleSection from "../utils/TitleSection";
import { ABOUT__DATA, STACKS__DATA, SERVICES__DATA } from "../../assets/data";
import { AiFillCheckSquare } from "react-icons/ai";
import { whiteVariant } from "./aboutVariant"

type Props = {};


const About = (props: Props) => {
  const constraintRef = useRef(null);
  return (
    <div
      ref={constraintRef}
      className=" h-screen w-full bg-darkGrey flex items-center justify-center relative px-4"
    >
      <div className=" h-screen max-w-[1700px] justify-center px-4 w-full flex items-center flex-col border-b-[1px] border-white ">
        <TitleSection title="something about me" />
        <div className=" flex flex-col items-center justify-center ">
          <div className=" py-2 xl:w-[50%]  lg:max-w-[1700px]">
            {ABOUT__DATA.map((item, index) => (
              <p
                key={index}
                className=" text-white text-sm px-2 leading-loose xl:leading-10 sm:text-2xl xl:text-xl"
              >
                {item}
              </p>
            ))}
          </div>
          {/* ---------- skills -------------- */}
          <div className="flex-wrap flex gap-3 lg:gap-6 pt-10 max-w-[500px] lg:max-w-[600px]">
            {STACKS__DATA.map((item, index) => (
              <ul key={index}>
                <li className="text-white flex items-center">
                  {" "}
                  <span className="inline-block px-1 text-yellow">
                    <AiFillCheckSquare />
                  </span>
                  {item}
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* ---------- services offered -------------- */}
        <div className=" flex flex-col lg:flex-row gap-4  mt-14 w-2/3">
          {SERVICES__DATA.map((item, index) => (
            <>
            <div
              key={index}
              className=" text-sm text-white rounded-md  p-1 lg:px-4 lg:py-3 border border-white text-center flex flex-col items-center hover:-translate-y-1 duration-200"
            >
             <h4 className="text-lg font-semibold"><span className="px-2">hello</span>{item.skill}</h4>
            <p className="leading-7">
              {item.description}
            </p>
            </div>
            </>
          ))}
        </div>
      </div>

      {/* ----------background blurs-------------- */}
      <motion.div
        variants={whiteVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constraintRef}
        className="absolute w-[5%] h-[5%] bg-white top-32 lg:top-40  lg:left-[35%]  blur-3xl rounded-full cursor-pointer"
      ></motion.div>
    </div>
  );
};

export default About;
