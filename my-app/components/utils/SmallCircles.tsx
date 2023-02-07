import React from "react";
import { motion } from "framer-motion";


type Props = {};

const SmallCirlces = (props: Props) => {
  return (
    <motion.div
      animate={{
        scale: [0.6, 1, 1, 1, 0.8, 0.8],
        opacity: [0.2, 0.2, 0.4, 0.8, 0.8, 0.5, 0.2],
        borderRadius: ["20%", "25%", "50%", "50%", "25%", "20%"],
      }}
      transition={{
        duration: 6,
      }}
      className="absolute flex justify-center items-center top-[50%] left-[50%]"
    >
      <div className="absolute border border-[#333333] rounded-full h-[10px] w-[10px] xl:h-[10px] xl:w-[10px]   animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[20px] w-[20px] xl:h-[20px] xl:w-[20px]    animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[30px] w-[30px] xl:h-[30px] xl:w-[30px]    animate-ping" />
      <div className="absolute border border-[#c8aa6a] rounded-full opacity-20  h-[40px] w-[40px] xl:h-[40px] xl:w-[40px]   animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[40px] w-[40px]   animate-ping" />
    </motion.div>
  );
};

export default SmallCirlces;
