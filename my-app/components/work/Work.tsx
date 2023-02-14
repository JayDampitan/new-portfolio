import { useRef } from "react";
import { motion } from "framer-motion";
import TitleSection from "../utils/title/TitleSection";
import {
  yellowVariant,
  endingTitleVariant,
  endingPhraseVariant,
  otherTitleVariant,
} from "./workVariants";
import Card from "./Card";
import OtherWorks from "./OtherWorks";

type Props = {};

const Work = (props: Props) => {
  const constrainRef = useRef(null);

  return (
    <div
      ref={constrainRef}
      className="h-auto flex justify-center px-2 pt-16 items-start w-full bg-darkGrey relative"
    >
      <div className="max-w-[1750px] mx-auto w-full flex flex-col  lg:pt-20 px-3">
        <TitleSection title="some chosen work" />
        <div>
          <div className="flex flex-col lg:flex-row mt-11  items-center justify-center">
            <Card />
          </div>

          {/* -------start of game projects---------- */}
          <div className="flex flex-col text-white mx-auto max-w-[1750px] items-center justify-center mt-10 ">
            <motion.h3
              variants={otherTitleVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:text-2xl py-2 my-9 border-b border-yellow"
            >
              mini games
            </motion.h3>
            <div className="flex flex-col justify-center lg:flex-row mt-11 gap-3">
              <OtherWorks />
            </div>
          </div>
          {/* --------end of other projects------------- */}
        </div>

        {/* ---------- work ending title-------------- */}
        <div className="flex items-center justify-center text-white flex-col mt-32 mb-12">
          <motion.h1
            variants={endingTitleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl lg:text-5xl font-bold"
          >
            you have more questions?
          </motion.h1>
          <motion.h2
            variants={endingPhraseVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:text-2xl my-4"
          >
            {`don't hesitate to ask`}
          </motion.h2>
        </div>
      </div>

      {/* ----------background blurs-------------- */}
      <motion.div
        variants={yellowVariant}
        whileHover="hover"
        animate="visible"
        drag
        dragConstraints={constrainRef}
        className="absolute w-[5%] h-[5%] bg-white top-32 right-[35%] blur-3xl opacity-70 rounded-full cursor-pointer"
      ></motion.div>
    </div>
  );
};

export default Work;
