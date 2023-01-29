import React from "react";

type Props = {};

const SectionBorder = (props: Props) => {
  return (
    <div className="absolute left-0 right-0 bottom-7  m-auto px-5 lg:px-[200px]">
      <div className="border-[1px] border-white"></div>
    </div>
  );
};

export default SectionBorder;
