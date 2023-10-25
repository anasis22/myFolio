import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {HashLink as Link } from "react-router-hash-link";

const ScrollArrow = () => {
  return (
    <div className='w-screen h-16 bg-black flex items-center justify-center mt-20 animate-entryDownArrow'>
      <Link to="#about" smooth ><AiOutlineArrowDown className='text-gray text-3xl animate-scrollDown ' /></Link>
    </div>
  )
}

export default ScrollArrow
