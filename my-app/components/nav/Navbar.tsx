import React from "react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { NAV__LINKS } from "../../assets/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { containerVariant, navVariant } from "./navVariants";

type Props = {};

const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [navVisible, setNavVisible] = useState(true)

  const handleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  const controlNav = () => {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (window.innerWidth > 500) {
        if (lastScrollY < window.scrollY) {
          setNavVisible(false);
        } else {
          setNavVisible(true);
        }
        lastScrollY = window.scrollY;
      }
    });
  };

  return (
    <motion.nav
    variants={navVariant}
    initial="hidden"
    animate={navVisible ? "navVisible" : "navHide"}
      className="fixed left-0 bg-transparent top-0 w-full z-10 ease-in duration-500"
    >
      <div className="max-w-[1750px] text-gray-400 m-auto flex justify-between items-center px-10 lg:px-28 py-6">
        <Link to="/" spy={true} smooth={true} offset={0} duration={500}>
          <h1 className="text-3xl  font-bold text-white cursor-pointer md:text-4xl">
            jd<span className="text-yellow">.</span>
          </h1>
        </Link>
        <ul className="hidden sm:flex items-center justify-center gap-4 text">
          {NAV__LINKS.map((item, index) => (
            <li
              key={index}
              className={`relative  nav-hover ${
                active === item.path && "active"
              }`}
              onClick={() => setActive(item.path)}
            >
              <Link
                className="flex text-white  lg:text-lg cursor-pointer"
                to={`${item.path}`}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {item.display}
              </Link>
            </li>
          ))}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1I5LloimtrNyyMhLLwNfpTuGMkSALxxMm/view?usp=sharing"
            className=" border-l-[1px] border-yellow px-4 hover:text-light-brown z-40"
          >
            <div className="text-white lg:text-lg relative nav-hover">
              resumé
            </div>
          </a>
          <div className="text-xl flex text-white ">
            <a
              rel="noreferrer"
              className="hover:scale-125"
              href="https://www.linkedin.com/in/jay-dampitan1985/"
              target="_blank"
            >
              <AiFillLinkedin className="m-2" />
            </a>
            <a
            rel="noreferrer"
              className="hover:scale-125"
              href="https://github.com/JayDampitan"
              target="_blank"
            >
              <AiFillGithub className="m-2" />
            </a>
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
          }  sm:hidden absolute top-0 right-0 bottom-0 flex 
          justify-center items-center w-full h-screen bg-[#1D1D1D] text-center ease-in-out duration-300`}
        >
          <ul className="flex-col flex justify-center items-center">
            {NAV__LINKS.map((item) => (
              <li
                key={item.path}
                className="p-4 text-2xl hover:text-white text-white"
              >
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to={`${item.path}`}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {item.display}
                </Link>
              </li>
            ))}
            <div className="h-[1px] w-[50px] bg-white flex justify-self-center my-3"></div>
            <a
              rel="noreferrer"
              href="https://drive.google.com/file/d/1I5LloimtrNyyMhLLwNfpTuGMkSALxxMm/view?usp=sharing"
              target="_blank"
              className="py-1 text-2xl px-2 hover:white text-white"
            >
              resumé
            </a>
            <div className="text-xl flex text-white mt-3">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/jay-dampitan1985/"
              >
                <AiFillLinkedin className="m-2" />
              </a>
              <a rel="noreferrer" href="https://github.com/JayDampitan">
                <AiFillGithub className="m-2" />
              </a>
            </div>
          </ul>
          <div className="fixed top-3 left-[50%] "></div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
