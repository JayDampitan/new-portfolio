import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      animate={{
        scale: [0.6, 1, 1, 1, 0.8, 0.8],
        opacity: [0.2, 0.4, 0.4, 0.6, 0.4, 0.4, 0.2],
        borderRadius: ["20%", "25%", "50%", "50%", "25%", "20%"],
      }}
      transition={{
        duration: 6,
      }}
      className="absolute top-25 right-26 flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full w-[100px] h-[100px] lg:h-[200px] lg:w-[200px] xl:h-[300px] xl:w-[300px]   animate-ping" />
      <div className="absolute border border-[#333333] rounded-full w-[100px] h-[100px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px]    animate-ping" />
      <div className="absolute border border-[#333333] rounded-full w-[100px] h-[100px] lg:h-[400px] lg:w-[400px] xl:h-[600px] xl:w-[600px]    animate-ping" />
      <div className="absolute border border-[#c8aa6a] rounded-full w-[100px] h-[100px] opacity-20  lg:h-[300px] lg:w-[300px]  animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full w-[100px] h-[100px] lg:h-[600px] lg:w-[600px]   animate-ping" />
    </motion.div>
  );
};

export default BackgroundCircles;
