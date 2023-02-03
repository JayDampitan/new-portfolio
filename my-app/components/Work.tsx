import React from "react";
import Card from "./Card";
import TitleSection from "./TitleSection";

type Props = {};

const Work = (props: Props) => {
  return (
    <div className="h-screen flex justify-center items-center w-full bg-darkGrey">
      <div className=" max-w-[1500px] mx-auto w-full">
        <TitleSection textColor="white" title="work." />
      </div>
    </div>
  );
};

export default Work;
