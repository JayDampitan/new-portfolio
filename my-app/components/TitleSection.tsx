import React from "react";

type Props = {
  title: string;
  textColor: string;
};

const TitleSection = ({ title, textColor }: Props) => {
  return (
    <>
      <div className=" text-white lg:text-2xl flex items-center justify-center w-full pr-10">
        <div className=" flex items-center gap-16">
          <h1>{title}</h1>
          <div className="w-[1px] h-[100px] rotate-90 bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default TitleSection;
