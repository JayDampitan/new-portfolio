import React from "react";
import { motion } from "framer-motion";


type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      animate={{
        scale: [0.6, 1, 1, 1, 0.8, 0.8],
        opacity: [0.1, 0.2, 0.4, 0.6, 0.8, 0.5],
        borderRadius: ["20%", "25%", "50%", "50%", "25%", "20%"],
      }}
      transition={{
        duration: 6,
      }}
      className="absolute top-25 right-26 flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] xl:h-[300px] xl:w-[300px]   animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] xl:h-[400px] xl:w-[400px]    animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] xl:h-[600px] xl:w-[600px]    animate-ping" />
      <div className="absolute border border-[#c8aa6a] rounded-full opacity-20  h-[650px] w-[650px] xl:h-[750px] xl:w-[750px]   animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[700px] w-[700px]   animate-ping" />
    </motion.div>
  );
};

export default BackgroundCircles;
