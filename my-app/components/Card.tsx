import React from 'react'
import Image from "next/image"
import movieapp from "../assets/movieapp2.png"
import pokemon from "../assets/pokemon.png"
import Link from "next/link"

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='rounded-lg m-2 px-4 py-6 bg-[#98979688]'>
        <h3 className='ml-2 text-lg text-[#EF7A0E] font-semibold uppercase mb-6'>Movie App</h3>
        <ul className='flex uppercase my-5'>
          <li className='bg-[#dfdbdbf9] px-2 m-2 rounded-sm mb-4'>web</li>
          <li className='bg-[#dfdbdbf9] px-2 m-2 rounded-sm mb-4'>app</li>
          <li className='bg-[#dfdbdbf9] px-2 m-2 rounded-sm mb-4'>ui/ux</li>
        </ul>
        <Image src={movieapp} alt="" />
        <div className='w-full flex justify-center items-center'>
          <Link href={""} className="border-2 border-[#EF7A0E] py-2 px-4 mt-4 rounded-md text-[#EF7A0E] font-semibold">Launch</Link>
        </div>
    </div>
  )
}

export default Card