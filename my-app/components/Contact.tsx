import React from "react";
import TitleSection from "./TitleSection";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="h-screen flex items-center bg-[#a6a6a6]">
      <div className="max-w-[1500px] mx-auto w-full">
        <TitleSection textColor="darkGrey" title="contact" />
      </div>
    </div>
  );
};

export default Contact;
