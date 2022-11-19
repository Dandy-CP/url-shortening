import React, { useState } from "react";
import Logo from "../assets/image/logo.svg";
import Menumobile from "./Menumobile";

const Navbar = () => {
  const [Menu, setMenu] = useState(false);

  const handleCloseMenu = () => {
    if (Menu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <>
      <Menumobile open={Menu} onClose={() => setMenu(false)} />
      <div className="flex items-center justify-around mx-auto px-4 w-[1200px] h-[150px] tablet:w-[100%] tablet:justify-between tablet:px-[50px] phone:w-[100%] phone:justify-between phone:px-[25px]">
        <img src={Logo} alt="logo" className="mr-[60px]" />

        <div
          className="space-y-2 hidden tablet:block phone:block"
          onClick={() => {
            setMenu(true);
            handleCloseMenu();
          }}
        >
          <div className="w-8 h-1 bg-GrayishViolet rounded-sm"></div>
          <div className="w-8 h-1 bg-GrayishViolet rounded-sm"></div>
          <div className="w-8 h-1 bg-GrayishViolet rounded-sm"></div>
        </div>

        <ul className="flex tablet:hidden phone:hidden">
          <li className="mr-8 text-GrayishViolet font-bold cursor-pointer hover:text-VeryDarkViolet">
            Features
          </li>
          <li className="mr-8 text-GrayishViolet font-bold cursor-pointer hover:text-VeryDarkViolet">
            Pricing
          </li>
          <li className="mr-8 text-GrayishViolet font-bold cursor-pointer hover:text-VeryDarkViolet">
            Resource
          </li>
        </ul>

        <div className="float-right ml-[500px] tablet:ml-[100px] tablet:hidden phone:hidden">
          <button className="mr-5 text-gray-500 font-bold hover:text-VeryDarkViolet tablet:mr-0">
            Login
          </button>
          <button className=" bg-Cyan w-[120px] h-10 rounded-full text-white font-bold hover:bg-[#aaf0f0]">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
