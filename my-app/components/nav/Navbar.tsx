import React from "react";
import { Link } from "react-scroll/modules"
import { useState } from "react";
import { NAV__LINKS } from "../../assets/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { containerVariant } from "./navVariants"

type Props = {};

const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [active, setActive] = useState(null)

  const handleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <motion.nav
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="fixed left-0 bg-transparent top-0 w-full z-10 ease-in duration-500"
    >
      <div className="max-w-[1750px] text-gray-400 m-auto flex justify-between items-center px-4 py-3">
        <Link to="/" spy={true} smooth={true} offset={0} duration={500}>
          <h1 className="text-3xl md:text-4xl font-bold text-white cursor-pointer">
            jd<span className="text-yellow">.</span>
          </h1>
        </Link>
        <ul className="hidden sm:flex items-center justify-center gap-4">
          {NAV__LINKS.map((item, index) =>  (
            <li key={index}  className={`relative  nav-hover ${active === item && 'active'}`} onClick={() => setActive(item)}>
              <Link
                className="flex text-white text-xl xl:text-lg cursor-pointer"
                to={`${item.path}`} spy={true} smooth={true} offset={0} duration={500}
              >
                {item.display}
              </Link>
            </li>
          ))}
          <div></div>
          <Link
            href="/"
            className=" border-l-[1px] border-white px-4 hover:text-light-brown"
          >
            <div className="text-white text-lg xl:text-lg relative nav-hover">
              resumé
            </div>
          </Link>
          <div className="text-xl flex text-white ">
            <Link
              className="hover:scale-125"
              href="https://www.linkedin.com/in/jay-dampitan1985/"
              target="_blank"
            >
              <AiFillLinkedin className="m-2" />
            </Link>
            <Link
              className="hover:scale-125"
              href="https://github.com/JayDampitan"
              target="_blank"
            >
              <AiFillGithub className="m-2" />
            </Link>
          </div>
        </ul>

        <motion.div
          onClick={handleNav}
          className="block sm:hidden z-10 text-xl text-white "
        >
          {navbarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </motion.div>

        {/*--------------- mobile menu --------------*/}
        <div
          className={` ${
            navbarOpen ? "left-0" : "left-full"
          }  sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#1D1D1D] text-center ease-in-out duration-500`}
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
          <div className="fixed top-3 left-[50%] "></div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;