import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import { once } from "events";

type Props = {
  n: number;
};

const Number = ({ n }: Props) => {
  const [loading, setLoading] = useState(true);

  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 30, friction: 20 },
  });
  const result = number.to((n) => n.toFixed(0));

  return <animated.div>{result}</animated.div>;
};

const Loader = ({ n }: Props) => {
  return (
    <motion.div initial={{y: 0}} animate={{y:"-100%"}} transition={{duration: 2, delay: 3.5}} className="h-screen top-0 right-0 left-0 flex-col w-full z-50 bg-white fixed text-darkGrey text-2xl lg:text-7xl flex items-center justify-center font-extrabold">
      <div className="flex">
        <Number n={100} />
        <span>%</span>
      </div>
      <h2  className="font-thin text-4xl">welcome</h2>
    </motion.div>
  );
};

export default Loader;
