import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

type Props = {};

const ScrollDown = (props: Props) => {
  return (
    <div className="absolute  xs:block bottom-7 right-9 xl:right-16 xl:bottom-12">
      <BsFillArrowDownCircleFill className="text-white text-xl xl:text-4xl"/>
    </div>
  );
};

export default ScrollDown;
