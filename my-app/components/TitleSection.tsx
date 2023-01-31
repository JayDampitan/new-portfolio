import React from "react";

type Props = {
  title: string;
  textColor: string
};

const TitleSection = ({ title, textColor }: Props) => {
  return (
    <div className="w-full">
      <h1 className= {`text-${textColor} text-2xl border-b-[1px] border-${textColor} py-2 md:text-5xl xl:pb-6`}>{title}</h1>
    </div>
  );
};

export default TitleSection;
