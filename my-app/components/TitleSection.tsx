import React from "react";

type Props = {
  title: string;
};

const TitleSection = ({ title }: Props) => {
  return (
    <div className="w-full">
      <h1 className= "text-white text-2xl border-b-[1px] py-2 md:text-5xl xl:pb-6">{title}</h1>
    </div>
  );
};

export default TitleSection;
