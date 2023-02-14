import { motion } from "framer-motion";
import { titleVariant, lineVariant } from "./titleVariants";

type Props = {
  title: string;
};

const TitleSection = ({ title }: Props) => {
  return (
    <>
      <div className=" text-white text-[15px] lg:text-2xl flex items-center justify-center w-full pr-10">
        <div className=" flex items-center gap-14">
          <motion.h1
            variants={titleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {title}
          </motion.h1>
          <motion.div
            variants={lineVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-[1px] h-[100px] rotate-90 bg-yellow"
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default TitleSection;
