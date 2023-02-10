import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

type Props = {};

const ToTop = (props: Props) => {
  return (
    <motion.div
      animate={{ y: [10, 30, 10, 30, 10] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="absolute bottom-8 right-2 lg:bottom-8 lg:right-11 flex items-center flex-col gap-2"
    >
      <Link
        to="/"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="text-white text-sm  lg:text-xl font-thin scroll cursor-pointer"
      >
        back to top
      </Link>
      <motion.div className="w-[1px] h-[80px] lg:h-[150px] bg-yellow"></motion.div>
    </motion.div>
  );
};

export default ToTop;
