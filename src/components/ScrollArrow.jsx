import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'

const ScrollArrow = () => {
  return (
    <div className='w-screen h-16 bg-black flex items-center justify-center mt-20'>
      <a href=""><AiOutlineArrowDown className='text-gray text-3xl animate-scrollDown ' /></a>
    </div>
  )
}

export default ScrollArrow
