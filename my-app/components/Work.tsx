import { useRef } from "react";
import { motion } from "framer-motion";
import TitleSection from "./TitleSection";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillCheckSquare } from "react-icons/ai";
import { OTHER__WORK__DATA } from "../assets/workData";
import Link from "next/link";
import Card from "./Card";

type Props = {};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

const yellowVariant = {
  visible: {
    y: [0, 10, 10, 30, 30, 10, 10, 0],
    scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
    transition: {
      duration: 6,
      delay: 6,
      repeat: Infinity,
    },
  },
  hover: {
    scale: 1.2,
  },
};

const Work = (props: Props) => {
  const constrainRef = useRef(null);

  return (
    <div
      ref={constrainRef}
      className=" h-auto flex justify-center pt-16 items-start w-full bg-darkGrey relative"
    >
      <div className=" max-w-[1750px] mx-auto w-full flex flex-col px-4 pt-20">
        <TitleSection title="some chosen work." />
        <div>
          <div className="flex flex-col lg:flex-row gap-3 mt-11  items-center justify-center">
            <Card />
          </div>

          {/* -------start of other projects---------- */}
          <div className="flex flex-col text-white mx-auto max-w-[1200px] items-center justify-center mt-10">
            <h3 className="text-2xl py-2 my-9 border-b border-white">
              other noteworhty projects.
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 mt-7">
              {OTHER__WORK__DATA.map((item, index) => (
                <div
                  key={index}
                  className={`${item.background} p-[1px] text-white rounded-lg w-full lg:w-1/3 flex items-center justify-center flex-col opacity-70 hover:opacity-100 duration-200 hover:-translate-y-1`}
                >
                  <div className="bg-darkGrey py-4 lg:py-5 px-10 lg:px-8 lg:pr-10 rounded-lg">
                    <h2 className="text-xl font-bold border-b border-white py-4">
                      {item.title}
                    </h2>
                    <p className="py-6 ">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.stacks.map((stack, index) => (
                        <div
                          key={index}
                          className="py-1 rounded-md text-sm flex items-center justify-center"
                        >
                          <span>
                            <AiFillCheckSquare className="mx-1" />
                          </span>
                          {stack}
                        </div>
                      ))}
                    </div>
                    <div className="py-4 flex lg:py-6 gap-3">
                      <button className="border border-white py-1 px-2 group lg:px-4 rounded-full text-sm flex items-center hover:bg-white hover:text-darkGrey duration-300 hover:-translate-y-1">
                        <Link href={item.github} target="_blank">
                          {" "}
                          github
                        </Link>
                        <span className="inline-block ml-2">
                          <BsArrowUpRight className="group-hover:rotate-45 duration-200" />
                        </span>
                      </button>
                      {item.launch ? (
                        <button className="border border-white py-1 px-2 group lg:px-4 rounded-full text-sm flex items-center hover:bg-white hover:text-darkGrey duration-300 hover:-translate-y-1">
                          <Link href={item.github} target="_blank">
                            {" "}
                            launch
                          </Link>
                          <span className="inline-block ml-2">
                            <BsArrowUpRight className="group-hover:rotate-45 duration-200" />
                          </span>
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* --------end of other projects------------- */}
        </div>

        {/* ---------- work ending title-------------- */}
        <div className="flex items-center justify-center text-white flex-col mt-32 mb-12">
          <h1 className="text-xl lg:text-5xl font-bold">
            you have more questions?
          </h1>
          <h2 className="lg:text-2xl my-4">don't hesitate to ask</h2>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
            ></motion.path>
          </svg>
        </div>
      </div>

      {/* ----------background blurs-------------- */}
      <motion.div
        variants={yellowVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constrainRef}
        className="absolute w-[5%] h-[5%] bg-yellow-100 top-32 right-[35%] blur-3xl rounded-full cursor-pointer"
      ></motion.div>
    </div>
  );
};

export default Work;
