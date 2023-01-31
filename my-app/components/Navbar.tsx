import React from "react";
import Link from "next/link";
import { useState } from "react";
import { NAV__LINKS } from "../assets/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import SmallCirlces from "./SmallCircles";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="fixed left-0 bg-transparent top-0 w-full z-10 ease-in duration-500">
      <div className="max-w-[1750px] text-gray-400 m-auto flex justify-between items-center px-4 py-3">
        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            jd<span className="text-light-brown">.</span>
          </h1>
        </Link>
        <ul className="hidden sm:flex items-center justify-center">
          {NAV__LINKS.map((item) => (
            <li onClick={handleNav} className="p-4">
              <Link className="text-white text-xl xl:text-lg" href={item.path}>
                {item.display}
              </Link>
            </li>
          ))}
          <Link
            href="/"
            className=" border-l-[1px] border-white px-4 hover:text-light-brown"
          >
            <div className="text-white text-lg xl:text-lg hover:white px-2 hover:text-light-brown duration-300">
              resumé
            </div>
          </Link>
          <div className="relative">
            <SmallCirlces />
            <WiMoonAltThirdQuarter className="text-white xl:text-2xl" />
          </div>
        </ul>

        <motion.div
          onClick={handleNav}
          className="block sm:hidden z-10 text-xl text-white "
        >
          {navbarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </motion.div>

        {/* mobile menu */}
        <div
          className={` ${
            navbarOpen ? "left-0" : "left-full"
          }  sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#1D1D1D] text-center ease-in-out duration-1000`}
        >
          <ul className="flex-col flex justify-center items-center">
            {NAV__LINKS.map((item) => (
              <li
                key={item.path}
                className="p-4 text-2xl hover:text-white text-white"
              >
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  href={item.path}
                >
                  {item.display}
                </Link>
              </li>
            ))}
            <div className="h-[1px] w-[50px] bg-white flex justify-self-center my-3"></div>
            <button className="py-1 text-2xl px-2 hover:white text-white">
              resumé
            </button>
            <div className="text-xl flex text-white mt-3">
              <Link href="">
                <AiFillLinkedin className="m-2" />
              </Link>
              <Link href="">
                <AiFillGithub className="m-2" />
              </Link>
            </div>
          </ul>
          <div className="fixed top-3 left-[50%] ">
            <div className="relative flex justify-center mt-3">
              <SmallCirlces />
              <WiMoonAltThirdQuarter className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
