import React from "react";
import { WORK__DATA } from "../../assets/workData";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillCheckSquare } from "react-icons/ai";

type Props = {};

const Card = (props: Props) => {
  return (
    <>
      {WORK__DATA.map((item, index) => (
        <div
          key={index}
          className={` ${item.background} text-white rounded-lg  w-full lg:w-1/3 py-4 lg:py-11 px-10 lg:px-16 lg:pr-20 flex items-start justify-center flex-col opacity-70 hover:opacity-100 duration-200 hover:-translate-y-1`}
        >
          <h2 className="text-2xl font-bold border-b border-white py-4">
            {item.title}
          </h2>
          <p className="py-6 text-lg leading-8">{item.description}</p>
          <div className="flex gap-3">
            {item.stacks.map((stack, index) => (
              <div
                key={index}
                className="py-1 px-2 rounded-md text-sm lg:text-md flex items-center justify-center"
              >
                <span>
                  <AiFillCheckSquare className="mx-1" />
                </span>
                {stack}
              </div>
            ))}
          </div>
          <div className="py-4 flex lg:py-6 gap-3">
            <button className="border border-white py-1 px-2 group lg:px-4 rounded-full text-sm flex items-center hover:bg-white hover:text-darkGrey duration-300 hover:-translate-y-1">
              <Link href={item.github} target="_blank">
                {" "}
                github
              </Link>
              <span className="inline-block ml-2">
                <BsArrowUpRight className="group-hover:rotate-45 duration-200" />
              </span>
            </button>
            <button className="border border-white py-1 px-2  group lg:px-4 rounded-full text-sm flex items-center hover:bg-white hover:text-darkGrey duration-300 hover:-translate-y-1">
              <Link href={item.launch} target="_blank">
                launch
              </Link>
              <span className="inline-block ml-2">
                <BsArrowUpRight className="group-hover:rotate-45 duration-200" />
              </span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
