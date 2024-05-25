import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import AboutBg from '../assets/AboutBg.svg';
import Footer from "../Components/Footer";
import { useLocation } from 'react-router-dom';

export default function About() {
  const [members, setMembers] = useState([]);
  const location = useLocation()
  const {name , post , posting , email ,address} = location.state.props

  const loadData = async () => {
    let response = await fetch("http://localhost:8008/api/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setMembers(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
            <Navbar />
      <div className='bg-black text-white flex justify-center items-center gap-6'>
        <p>samplemail@gmail.com</p>
        <p>69696969696</p>
        <p className='text-white/50 ease-in-out duration-300 hover:text-white cursor-pointer'>Become a member</p>
        <p className='text-white/50 ease-in-out duration-300 hover:text-white cursor-pointer'>Contact</p>
      </div>
      <div className="relative w-full">
        <img src={AboutBg} alt="About Background" className="w-full" />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-yellow-300 font-bold text-4xl">
          {name}
        </div>
      </div>
      <div className="text-center py-10 mb-30 ">
        {members.length > 0 ? (
          <div className="space-y-10 max-w-screen-lg mx-auto">
            {members.map((member, index) => (
              <div key={index} className="flex items-center justify-center space-x-6">
                <div>
                  <img src={member.image} alt="" className="w-150 h-150 rounded-md mb-8 mx-auto" />
                </div>
                <div className="text-left">
                  <h2 className="text-3xl font-bold mb-4">Profile Details</h2>
                  <div className="grid grid-cols-2 gap-y-4">
                    <p className="text-xl font-bold text-yellow-500">Name:</p>
                    <p className="text-xl font-bold text-yellow-500">{name}</p>
                    <p className="text-xl font-bold text-blue-500">Posting:</p>
                    <p className="text-xl font-bold text-blue-500">{posting}</p>
                    <p className="text-xl font-bold text-blue-500">Post:</p>
                    <p className="text-xl font-bold text-blue-500">{post}</p>
                    <p className="text-xl font-bold text-gray-500">Email:</p>
                    <p className="text-xl font-bold text-gray-500">{email}</p>
                    <p className="text-xl font-bold text-gray-500">Address:</p>
                    <p className="text-xl font-bold text-gray-500">{address}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mx-auto text-left">
              {members.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-4 mt-4">
                  <h3 className="text-2xl font-bold mb-2">Description</h3>
                  <p className="text-lg text-justify">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-white text-center py-10">Loading...</p>
        )}
      </div>
    < Footer />
    </>

  )
}