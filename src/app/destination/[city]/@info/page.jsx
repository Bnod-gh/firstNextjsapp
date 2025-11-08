'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function Info() {
    const {city}=useParams()
  return (
    <div className='mt-[100px]'>{city} is located in Nepal</div>
  )
}

export default Info