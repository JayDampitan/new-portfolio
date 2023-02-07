import { useRef } from "react";
import { motion } from "framer-motion";
import TitleSection from "../utils/TitleSection";
import { yellowVariant, pathVariants } from "./workVariants";
import Card from "./Card";
import OtherWorks from "./OtherWorks";

type Props = {};

const Work = (props: Props) => {
  const constrainRef = useRef(null);

  return (
    <div
      ref={constrainRef}
      className=" h-auto flex justify-center pt-16 items-start w-full bg-darkGrey relative"
    >
      <div className=" max-w-[1750px] mx-auto w-full flex flex-col px-4 pt-20">
        <TitleSection title="some chosen work" />
        <div>
          <div className="flex flex-col lg:flex-row gap-3 mt-11  items-center justify-center">
            <Card />
          </div>

          {/* -------start of other projects---------- */}
          <div className="flex flex-col text-white mx-auto max-w-[1200px] items-center justify-center mt-10">
            <h3 className="text-2xl py-2 my-9 border-b border-white">
              other noteworhty projects
            </h3>
            <div>
              <OtherWorks/>
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
          
        </div>
      </div>

      {/* ----------background blurs-------------- */}
      <motion.div
        variants={yellowVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constrainRef}
        className="absolute w-[5%] h-[5%] bg-orange-100 top-32 right-[35%] blur-3xl rounded-full cursor-pointer"
      ></motion.div>
    </div>
  );
};

export default Work;
