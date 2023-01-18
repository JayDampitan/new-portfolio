import React from "react";
import { motion } from "framer-motion";


type Props = {};

const SmallCirlces = (props: Props) => {
  return (
    <motion.div
      animate={{
        scale: [0.6, 1, 1, 1, 0.8, 0.8],
        opacity: [0.1, 0.2, 0.4, 0.6, 0.6, 0.5, 0.2],
        borderRadius: ["20%", "25%", "50%", "50%", "25%", "20%"],
      }}
      transition={{
        duration: 6,
      }}
      className="absolute flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[20px] w-[20px] xl:h-[30px] xl:w-[30px]   animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[30px] w-[30px] xl:h-[40px] xl:w-[40px]    animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[40px] w-[40px] xl:h-[60px] xl:w-[60px]    animate-ping" />
      <div className="absolute border border-[#c8aa6a] rounded-full opacity-20  h-[60px] w-[60px] xl:h-[750px] xl:w-[100px]   animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[700px] w-[700px]   animate-ping" />
    </motion.div>
  );
};

export default SmallCirlces;
