import React from "react";
import Link from "next/link";
import { useState } from "react";
import { NAV__LINKS } from "../assets/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs"

type Props = {};

const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="fixed left-0 bg-[#1D1D1D]  top-0 w-full z-10 ease-in duration-500">
      <div className="max-w-[1240px] text-gray-400 m-auto flex justify-between items-center px-6 py-2">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            j<span className="text-[#BB2626]">d</span>.
          </h1>
        </Link>
        <ul className="hidden sm:flex items-center justify-center">
          {NAV__LINKS.map((item) => (
            <li onClick={handleNav} className="p-4">
              <Link href={item.path}>{item.display}</Link>
            </li>
          ))}
          <Link href="/" className=" border-l-[1px] border-gray-400 px-4 hover:text-[#BB2626]">
            <div className=" text-1xl hover:white px-3 hover:text-[#BB2626] duration-300">Resumé</div>
          </Link>
        </ul>

        <div onClick={handleNav} className="block sm:hidden z-10">
          {navbarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        {/* mobile menu */}
        <div
          className={`${
            navbarOpen ? "left-0" : "left-full"
          } sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#1D1D1D] text-center ease-in duration-500`}
        >
          <ul>
            {NAV__LINKS.map((item) => (
              <li key={item.path} className="p-4 text-2xl hover:text-white">
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  href={item.path}
                >
                  {item.display}
                </Link>
              </li>
            ))}
            <button className="py-1 text-2xl border-2 border-gray-400 rounded px-3 hover:white ">
              Resumé
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
