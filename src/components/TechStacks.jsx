import React from 'react'
import { info } from '../info/Info'

const TechStacks = () => {
  return (
    <div className="w-screen h-fit bg-black flex flex-col items-center justify-center md:p-12 mt-36 ">
      <div className="border-bw bg-[#1F1F1F] rounded-md p-4 md:p-8 border-l-8 border-l-baseColor flex flex-col items-center justify-center w-4/5 md:w-3/4 ">
        <h1 className="text-gray font-bold text-3xl tracking-wide">Tech Stacks</h1>
        <section className='mt-12 flex-wrap flex items-center justify-center w-3/4 mb-10'>
            <img className='mt-8 w-16' src={info.html} alt="hmtlLogo" />
            <img className='mt-8 w-16 ml-8' src={info.css} alt="cssLogo" />
            <img className='mt-8 w-16 ml-8' src={info.js} alt="jsLogo" />
            <img className='mt-8 w-16 ml-8' src={info.react} alt="reactLogo" />
            <img className='mt-8 w-16 ml-8' src={info.redux} alt="reduxLogo" />
            <img className='mt-8 w-16 ml-8' src={info.tailwind} alt="tailwindLogo" />
            <img className='mt-8 w-16 ml-8' src={info.framerMotion} alt="framerMotionLogo" />
            <img className='mt-8 w-16 ml-8' src={info.vite} alt="viteLogo" />
            <img className='mt-8 w-16 ml-8' src={info.firebase} alt="firebaseLogo" />
            <img className='mt-8 w-16 ml-8' src={info.git} alt="gitLogo" />
            <img className='mt-8 w-16 ml-8' src={info.figma} alt="figmaLogo" />
        </section>
      </div>
    </div>
  )
}

export default TechStacks
