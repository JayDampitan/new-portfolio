import React from "react";
import { motion } from "framer-motion";
import { containerVariant } from "./scrollDownVariants"

type Props = {};

const ScrollDown = (props: Props) => {
  return (
    <motion.div variants={containerVariant} initial="hidden" animate="visible">
      <motion.div
        animate={{ y: [10, 30, 10, 30, 10] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-1 right-2 lg:bottom-8 lg:right-11 flex items-center flex-col gap-2"
      >
        <p className="text-white text-sm  lg:text-lg font-thin scroll">
          scroll
        </p>
        <motion.div className="w-[1px] h-[80px] lg:h-[120px] bg-yellow"></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollDown;
