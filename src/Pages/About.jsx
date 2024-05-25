import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import AboutBg from '../assets/AboutBg.svg';
import Footer from "../Components/Footer";
import { useLocation } from 'react-router-dom';

export default function About() {
  const location = useLocation();
  const { name, post, posting, email, address, image, desc } =
    location.state.props;

  return (
    <>
      <Navbar />
      <div className="bg-black text-white flex justify-center items-center gap-6">
        <p>samplemail@gmail.com</p>
        <p>69696969696</p>
        <p className="text-white/50 ease-in-out duration-300 hover:text-white cursor-pointer">
          Become a member
        </p>
        <p className="text-white/50 ease-in-out duration-300 hover:text-white cursor-pointer">
          Contact
        </p>
      </div>
      <div className="relative w-full">
        <img src={AboutBg} alt="About Background" className="w-full" />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-yellow-300 font-bold text-4xl font-mono ">
          {name}
        </div>
      </div>
      <div className="text-center px-32 py-10 pb-36 bg-gradient-to-t from-[#FFC39D] to-white md:px-32 sm:px-12 ">
        <div className="flex flex-col md:flex-row items-center p-4 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src={image}
              alt="Person"
              className="rounded-full w-32 h-32 md:w-48 md:h-48"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8">
            <h2 className="text-xl md:text-2xl font-bold mb-2">{name}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Post:</strong>
              {post}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Posting:</strong>
              {posting}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Address:</strong>
              {address}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Email:</strong>
              {email}
            </p>
          </div>
        </div>
        <div className="description py-10 ">
          <h1 className="text-2xl py-10 text-[#ff5239] font-bold font-mono ">
            Description
          </h1>
          <p className="justify-center px-10 md:px-6 sm:px-4 ">{desc}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}