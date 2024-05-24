import React from 'react'
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <>
        <div className="fixed z-40 bg-slate-600/50 flex justify-between mt-6 items-center w-full px-8 py-4 backdrop-blur-lg">
            <img src={logo} className='w-20 h-20 ml-8' lt="" />
            <div className="anchors flex gap-10 text-white text-xl items-center text-center pl-28  ">
                <a href="" className=" underline decoration-solid decoration-0 hover:decoration-2"> Home </a>
                <a href="" className="underline decoration-solid decoration-0 hover:decoration-2"> About Us </a>
                <a href="" className="underline decoration-solid decoration-0 hover:decoration-2"> Members </a>
                <a href="" className="underline decoration-solid decoration-0 hover:decoration-2"> Certificates </a>
                <a href="" className="underline decoration-solid decoration-0 hover:decoration-2"> Donate </a>
                <a href="" className="underline decoration-solid decoration-0 hover:decoration-2"> Yog Chikitsha </a>
            </div>
        </div>
    </>
  )
}
