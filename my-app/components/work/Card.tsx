import React from "react";
import { WORK__DATA } from "../../assets/workData";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-2 mt-7">
      {WORK__DATA.map((item, index) => (
        <div
          key={index}
          className={` ${item.background} text-white rounded-lg  w-full lg:w-1/3 py-4 lg:py-8 px-10 
          lg:px-16 lg:pr-20 flex items-stretch justify-between flex-col 
          opacity-70 hover:opacity-100 duration-200 hover:-translate-y-1 cursor-pointer`}
        >
          <h2 className="text-2xl font-bold border-b border-white py-4">
            {item.title}
          </h2>
          <p className="py-3 lg:py-6 text-[16px] lg:pr-10 lg:leading-6">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {item.stacks.map((stack, index) => (
              <div
                key={index}
                className="py-1 rounded-md text-sm lg:text-md flex items-center justify-center"
              >
                <span>
                  <AiOutlineRight className="mx-1" />
                </span>
                {stack}
              </div>
            ))}
          </div>
          <div className="py-4 flex lg:py-6 gap-3">
            <button
              className="border border-white py-1 px-3 group lg:px-4 
            rounded-full text-sm flex items-center hover:bg-white hover:text-darkGrey 
            duration-300 hover:-translate-y-1"
            >
              <a href={item.github} target="_blank">
                {" "}
                github
              </a>
              <span className="inline-block ml-2">
                <BsArrowUpRight className="group-hover:rotate-45 duration-200" />
              </span>
            </button>
            {item.launch ? (
              <button
                className="border border-white py-1 px-3 group lg:px-4 
              rounded-full text-sm flex items-center hover:bg-white hover:text-darkGrey 
              duration-300 hover:-translate-y-1"
              >
                <a href={item.launch} target="_blank">
                  {" "}
                  launch
                </a>
                <span className="inline-block ml-2">
                  <BsArrowUpRight className="group-hover:rotate-45 duration-200" />
                </span>
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
