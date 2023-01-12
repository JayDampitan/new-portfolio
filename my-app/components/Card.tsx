import React from 'react'
import Image from "next/image"
import movieapp from "../assets/movieapp2.png"
import pokemon from "../assets/pokemon.png"

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='border border-blue-500 rounded-lg m-2 px-4 py-6 bg-[#a3a2a1]'>
        <h3 className='ml-2 text-lg text-[#EF7A0E] font-semibold uppercase'>Movie App</h3>
        <ul className='flex uppercase'>
          <li className='bg-[#adaaaa] px-2 m-2 rounded-sm mb-4'>web</li>
          <li className='bg-[#adaaaa] px-2 m-2 rounded-sm mb-4'>app</li>
          <li className='bg-[#adaaaa] px-2 m-2 rounded-sm mb-4'>ui/ux</li>
        </ul>
        <Image src={pokemon} alt="" />
    </div>
  )
}

export default Card