import React from "react";
import Card from "../components/Card"

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-auto bg-[#D4D7E1] flex flex-col p-10 lg:h-screen ">    
        {/* Project title section */}
        <div className="lg:px-60">
          <div className=" flex flex-row justify-between w-full  items-center">
            <h3 className=" text-[#EF7A0E] text- lg:text-4xl">
              <span className="section-subtitle"></span>Projects
            </h3>
              <div className=" text-lg text-[#EF7A0E] lg:text-2xl">Web Design</div>
          </div>
          <div className=" items-start text-4xl font-semibold my-4">Some of my works</div>
        </div>

        {/* Project card section */}
        <div className="flex flex-col xl:py-4 xl:px-40 xl:flex-row items-center justify-center">
          <Card />
          <Card />
          <Card />
        </div>
     
    </div>
  );
};

export default Projects;
