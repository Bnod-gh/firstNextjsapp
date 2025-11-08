'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import Butwalimg from "@/assets/Butwal.jpg"
import Chitwanimg from "@/assets/Chitwan.jpg"
import Kathmanduimg from "@/assets/kathmandu.jpg"
import Image from 'next/image'


function City({params}) {
    const {city}=useParams()
  return (
    <div className='text-white mt-[100px] '>
        <div>{city} is a beautiful city</div>
        <div>
            {city=="Butwal" && <Image src={Butwalimg} alt='Butwal' width={200} height={200}/>}
            
             {city=="Chitwan" && <Image src={Chitwanimg} alt='Chitwan' width={200} height={200}/>}

              {city=="Kathmandu" && <Image src={Kathmanduimg} alt='Kathmandu' width={200} height={200}/>}
            </div>
              
              
  </div>
            )

}

export default City