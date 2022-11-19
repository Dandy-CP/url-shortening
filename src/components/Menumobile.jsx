import React from "react";

const Menumobile = ({ open }) => {
  if (!open) return null;

  return (
    <div className="absolute inset-x-0 mx-auto w-[90%] h-[340px] bg-DarkViolet p-8 mt-[120px] z-[1] rounded-lg">
      <div className="flex flex-col items-center">
        <ul className="flex flex-col text-center">
          <li className="text-white text-lg font-bold cursor-pointer mb-[25px]">
            Features
          </li>
          <li className="text-white text-lg font-bold cursor-pointer mb-[25px]">
            Pricing
          </li>
          <li className="text-white text-lg font-bold cursor-pointer mb-[25px]">
            Resource
          </li>
        </ul>

        <hr className="w-[280px] opacity-10" />

        <div className="flex flex-col">
          <button className="text-white text-lg font-bold cursor-pointer mb-[25px] mt-[15px]">
            Login
          </button>
          <button className="bg-Cyan w-72 h-11 rounded-full text-white text-lg font-bold hover:bg-[#aaf0f0]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menumobile;
