import React from "react";
import bgBoost from "../assets/image/bg-boost-desktop.svg";

const Bottomsection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[230px] bg-DarkViolet">
      <img
        src={bgBoost}
        alt="bgBoost"
        className="absolute w-[100%] h-[230px]"
        draggable="false"
      />
      <h1 className="text-4xl text-white font-bold mb-[30px] z-[1] phone:text-2xl phone:mb-[20px]">
        Boost your links today
      </h1>
      <button className="bg-Cyan w-40 h-12 rounded-full text-white font-bold hover:bg-[#aaf0f0] z-[1]">
        Get Started
      </button>
    </div>
  );
};

export default Bottomsection;
