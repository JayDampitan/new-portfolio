import React from "react";
import Link from "next/link";
import { NAV__LINKS } from "../assets/data";
import { FiMenu } from "react-icons/fi"
import { GrClose } from "react-icons/gr"


type Props = {};

const Header = (props: Props) => {

  const handleClick = (e: any):void => {
    e.name === "menu" ? e.name = "close" : e.name = "menu"
  }
  return (
    //    Left header
    <nav className=" bg-[#D4D7E1] w-full mx-auto z-20 sticky py-4 px-6 top-0 flex items-center justify-between lg:justify-around md:px-8 lg:px-20  ">
      <div className="w-full flex justify-between items-center">
        <div className=" text-2xl sm:text-4xl font-bold lg:text-5xl rounded-md border-[#EF7A0E] border-2 p-3 sm:p-5 flex items-center">
          <span className="text-[#EF7A0E]">J</span>D
        </div>

        <span className="lg:hidden cursor-pointer" >
          <FiMenu name="menu" className="h-8 w-8" />
          <GrClose name="close" className="h-8 w-8"/>
        </span>
      </div>

      {/* Right Header */}
      {/* Links section */}
      <div className=" flex flex-col lg:flex-row items-center ">
        <ul className="flex flex-col items-center lg:flex-row z-[-1] lg:z-auto lg:static lg:w-auto lg:h-auto absolute bg-[#D4D7E1] w-80 h-screen right-0 lg:opacity-100 opacity-0 top-[-400px] transition-all ease duration-500">
          {NAV__LINKS.map((item) => (
            <li className="m-5 text-lg font-semibold hover:text-[#EF7A0E] duration-500">
              <Link href={item.path}>{item.display}</Link>
            </li>
          ))}
          <Link href={""} className="py-2 px-5 rounded-md border-2 border-[#EF7A0E] text-[#EF7A0E] font-semibold ml-2">
            Resumé
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
