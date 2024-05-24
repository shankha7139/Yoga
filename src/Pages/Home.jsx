import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Floating from '../Components/Floating'
import Members from '../Components/Members'
import Footer from "../Components/Footer";

export default function App() {
  return (
    <div className='bg-slate-200' >
      <Navbar/>
      <div className='bg-black text-white flex justify-center item-center gap-6 ' > 
        <p>
          samplemail@gmail.com
        </p>
        <p>
          69696969696
        </p>
        <p className='text-white/50 ease-in-out duration-300  hover:text-white cursor-pointer ' >
          Become a member
        </p>
        <p className='text-white/50 ease-in-out duration-300  hover:text-white cursor-pointer ' >
          Contact
        </p>
      </div>
      <Hero/>
      <Floating/>
      <Members/>
    </div>
  )
}