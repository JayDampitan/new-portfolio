import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div className="snap-center p-2 h-screen w-full flex flex-col-reverse items-center justify-center bg-[#D4D7E1] [#EF7A0E] xl:flex-row">
      {/* Left Hero Section */}

      <div className=" w-full h-[80%] px-10  flex flex-col items-start justify-center xl:w-[50%] xl:pl-64">
        <h3 className="text-2xl xl:text-4xl mb-3 text-[#EF7A0E]">
          <span className="section-subtitle"></span> What I do
        </h3>
        <h2 className="text-4xl xl:text-6xl mb-2 font-semibold">
          Unique Design and Experience
        </h2>

        <p className=" max-w-[800px] xl:text-xl mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          asperiores quae nostrum error, doloremque veritatis. Reprehenderit
          illum repellendus delectus eos.
        </p>
        <Link
          className="border-2 border-[#EF7A0E] text-[#EF7A0E] py-2 px-5 rounded-md font-semibold"
          href="#contact"
        >
         Download Resumé
        </Link>
      </div>

      {/* Right Hero Section */}
      <div className=" relative flex w-full h-screen items-center justify-center xl:w-[50%] xl:h-[80%]">
        <div className="h-[300px] w-[300px] border-4 border-purple-500 rounded-md"></div>
      </div>
    </motion.div>
  );
};

export default Skills;
