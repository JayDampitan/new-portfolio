import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { OTHER__WORK__DATA } from "../../assets/workData";
import Link from "next/link";

type Props = {};

const OtherWorks = (props: Props) => {
  return (
    <>
      {OTHER__WORK__DATA.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: index * 0.3 }}
          viewport={{once: true}}
          key={index}
          className="w-full lg:w-1/3 items-stretch flex relative group"
        >
          <div
            className="absolute inset-0.5 bg-gradient-to-r from-[#aa03ac2f] to-[#9305ffeb] 
          rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
          ></div>
          <div
            className={`bg-darkGrey relative text-white flex flex-col justify-between py-4 px-4 lg:px-10 border border-white 
            duration-200 hover:-translate-y-1 cursor-pointer rounded-lg hover:border-purple-400`}
          >
            <h2 className="lg:text-2xl text-white font-bold border-b border-yellow py-2">
              {item.title}
            </h2>
            <p className="py-3  lg:py-6 text-sm lg:text-[16px]  lg:leading-6">
              {item.description}
            </p>
            <div className="flex flex-wrap">
              {item.stacks.map((stack, index) => (
                <div
                  key={index}
                  className="py-1 rounded-md text-sm lg:text-md flex items-center justify-center"
                >
                  <span>
                    <AiOutlineRight className="mx-1 text-white" />
                  </span>
                  <p>{stack}</p>
                </div>
              ))}
            </div>
            <div className="py-4 flex lg:py-6 gap-3">
              <button
                className="border border-white py-1 px-3 group lg:px-4 
            rounded-full text-sm flex items-center hover:bg-white hover:text-darkGrey 
            duration-300 hover:-translate-y-1"
              >
                <a href={item.github} target="_blank">
                  {" "}
                  github
                </a>
                <span className="inline-block ml-2">
                  <BsArrowUpRight className="group-hover:rotate-45 duration-200" />
                </span>
              </button>
              {item.launch ? (
                <button
                  className="border border-white py-1 px-3 group lg:px-4 
              rounded-full text-sm flex items-center hover:bg-white hover:text-darkGrey 
              duration-300 hover:-translate-y-1"
                >
                  <a href={item.launch} target="_blank">
                    {" "}
                    launch
                  </a>
                  <span className="inline-block ml-2">
                    <BsArrowUpRight className="group-hover:rotate-45 duration-200" />
                  </span>
                </button>
              ) : null}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default OtherWorks;
