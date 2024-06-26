import React from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed z-40 bg-slate-600/50 flex justify-between mt-6 items-center w-full px-8 py-4 backdrop-blur-lg">
        <img
          src={logo}
          className="w-20 h-20 ml-8 hover:cursor-pointer "
          lt=""
          onClick={() => navigate("/")}
        />
        <div className="anchors flex gap-10 text-white text-xl items-center text-center pl-28  ">
          <a
            href=""
            className=" underline decoration-solid decoration-0 hover:decoration-2"
            onClick={() => navigate("/")}
          >
            {" "}
            Home{" "}
          </a>
          <a
            href=""
            className="underline decoration-solid decoration-0 hover:decoration-2"
          >
            {" "}
            About Us{" "}
          </a>
          <a
            href=""
            className="underline decoration-solid decoration-0 hover:decoration-2"
          >
            {" "}
            Members{" "}
          </a>
          <a
            href=""
            className="underline decoration-solid decoration-0 hover:decoration-2"
          >
            {" "}
            Certificates{" "}
          </a>
          <a
            href=""
            className="underline decoration-solid decoration-0 hover:decoration-2"
          >
            {" "}
            Donate{" "}
          </a>
          <a
            href=""
            className="underline decoration-solid decoration-0 hover:decoration-2"
          >
            {" "}
            Yog Chikitsha{" "}
          </a>
        </div>
      </div>
    </>
  );
}
