import React from "react";
import HeroImage from "../assets/image/illustration-working.svg";

const Herosection = () => {
  return (
    <div className="flex px-4 mt-24 mx-auto w-[1200px] tablet:flex-col-reverse tablet:w-[100%] tablet:items-center tablet:mt-14 phone:mt-14 phone:flex-col-reverse phone:w-[100%] phone:items-center">
      <div className="tablet:flex tablet:flex-col phone:flex phone:flex-col tablet:items-center phone:items-center">
        <h1 className=" text-[75px] leading-[1.1] text-VeryDarkBlue font-bold w-[600px] tablet:w-[400px] tablet:text-[45px] tablet:text-center phone:text-center tablet:mb-[15px] phone:w-[350px] phone:text-[40px]">
          More than just shorter links
        </h1>
        <p className="text-[22px] mb-7 text-GrayishViolet w-[550px] font-semibold tablet:w-[350px] tablet:text-[19px] tablet:text-center phone:text-center phone:text-[17px] phone:w-[320px] phone:mt-[10px]">
          Build your brand's recognition and get datailed insight on how your
          links are performing
        </p>
        <button className=" bg-Cyan w-40 h-12 rounded-full text-white font-bold hover:bg-[#aaf0f0]">
          Get Started
        </button>
      </div>

      <img
        src={HeroImage}
        alt="heroImage"
        className="w-[800px] h-[550px] relative float-right left-[30px] bottom-[70px] tablet:left-[0px] tablet:w-[500px] tablet:h-[350px] phone:w-[350px] phone:h-[250px] phone:left-0"
        draggable="false"
      />
    </div>
  );
};

export default Herosection;
