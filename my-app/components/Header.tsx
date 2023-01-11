import React from "react";
import Link from "next/link";
import { NAV__LINKS } from "../assets/data";

type Props = {};

const Header = (props: Props) => {
  return (
    //    Left header
    <header className="sticky p-2 top-0 flex items-center justify-around w-full mx-auto z-20 bg-[#D4D7E1]">
      <div className="text-4xl rounded-md border-[#EF7A0E] border-2 p-5 flex items-center">
        <span className="text-[#EF7A0E]">J</span>D
      </div>

    {/* Right Header */}
    {/* Links section */}
      <div className="flex flex-row items-center">
        <ul className="flex flex-row ">
          {NAV__LINKS.map((item) => (
            <Link href={item.path} className="m-5 text-lg ">
              {item.display}
            </Link>
          ))}
        </ul>
    {/* Resumé section */}
        <div className="p-3 rounded-md border-2 border-[#EF7A0E] text-[#EF7A0E] font-semibold ml-2">
          Download Resumé
        </div>
      </div>
    </header>
  );
};

export default Header;
