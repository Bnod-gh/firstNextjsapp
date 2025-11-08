import React from 'react'

function citylayout({children,info}) {
  return (
    <div className='w-full flex  justify-center text-center'>
    <div className='w-[50%] bg-gray-700 h-screen'>{children}</div>
    <div className='w-[50%] h-screen bg-slate-800'>{info}</div>
    </div>
  )
}

export default citylayout