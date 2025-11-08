'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Navbar() {
    const pathname=usePathname()
  return (
    <div className='w-full h-18 bg-gray-400 flex justify-between items-center px.[20px] fixed top-0'>
        <div className='text-black font-bold text-2xl'><Link href={'/'}>🌍Travel Guide</Link></div>
        <div>
            <ul className='flex justify-center items-center gap-7'> 
               <Link href={"/"} className={pathname=="/"?"text-blue-500":""}><li>Home</li></Link>
               <Link href={"/destination"}className={pathname=="/destination"?"text-blue-500":""}><li>Destination</li></Link>
               <Link href={"/contact"}className={pathname=="/contact"?"text-blue-500":""}><li>Contact</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar