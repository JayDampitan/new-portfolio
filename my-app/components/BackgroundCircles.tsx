import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      animate={{
        scale: [.5, 1, 1, 2, .5],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "25%", "50%", "80%", "20%", "20%"]
      }}
      transition={{
        duration: 9,
      }}
      className=" flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-[#c8aa6a] rounded-full opacity-20  h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[700px] w-[700px] mt-52 animate-ping" />
    </motion.div>
  );
};

export default BackgroundCircles;
