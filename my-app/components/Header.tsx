import React from 'react'
import Link from "next/link"

type Props = {}

const Header = (props: Props) => {
    const NAV__LINK = [
        {
          path: "/",
          display: "Home",
        },
        {
          path: "#about",
          display: "About",
        },
        {
          path: "#skills",
          display: "Skills",
        },
        {
          path: "#projects",
          display: "projects",
        },
        {
          path: "#contact",
          display: "Contact",
        },
        {
          path: "#footer",
          display: "Footer",
        },
      ];
  return (
    //header-className 
    <header className='sticky p-5 top-0 flex items-center justify-between max-w-7xl mx-auto z-20'>
        <div>JD</div>

        <div className='flex flex-row items-center'>
            <ul className='flex flex-row '>
               {NAV__LINK.map(item => (
                <Link href={item.path}  className='m-5'>{item.display}</Link>
               ))}
            </ul>

            <div className='p-3 rounded-md border ml-2'>Download Resumé</div>
        </div>

    </header>
  )
}

export default Header