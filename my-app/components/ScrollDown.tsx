import React from "react";
import { motion } from "framer-motion";

type Props = {};

const containerVariant = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 5,
    },
  },
};

const ScrollDown = (props: Props) => {
  return (
    <motion.div variants={containerVariant} initial="hidden" animate="visible">
      <motion.div
        animate={{ y: [10, 30, 10, 30, 10] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-8 right-2 lg:bottom-20 lg:right-11 flex items-center flex-col gap-2"
      >
        <p className="text-white text-sm  lg:text-xl font-thin scroll">
          scroll
        </p>
        <motion.div className="w-[1px] h-[80px] lg:h-[150px] bg-white"></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollDown;
