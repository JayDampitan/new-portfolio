import React from "react";
import Link from "next/link";
import { useState } from "react";
import { NAV__LINKS } from "../assets/data";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

type Props = {};

const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="w-full  bg-black fixed top-0 left-0 right-0 z-10 px-60 py-10">
      <div className="justify-between h-screen flex border border-red-500">

        <h2 className="text-white text-4xl">JD</h2>

       <div>
          <FiMenu className="text-white"/>
       </div>
     
          <ul className={`hidden`}>
            <li className="text-white">
              {NAV__LINKS.map((item) => (
                <Link className="flex flex-col" href="">{item.display}</Link>
              ))}
            </li>
          </ul>
      
      
      </div>
    </nav>
  );
};

export default Navbar;
