import React from "react";
import staticImg from "../assets/image/icon-brand-recognition.svg";
import spedoImg from "../assets/image/icon-detailed-records.svg";
import penImg from "../assets/image/icon-fully-customizable.svg";
import Cards from "./Cards";

const Infosection = () => {
  return (
    <div className=" bg-gray-50 h-[950px] mt-36 tablet:h-[1600px] phone:h-[1750px]">
      <div className="flex justify-center">
        <div className="mt-[300px] tablet:mt-[400px] phone:mt-[400px]">
          <h1 className="text-5xl font-bold text-center mb-[10px] phone:text-3xl">
            Advance Statistics
          </h1>
          <p className=" text-lg font-semibold leading-loose text-GrayishViolet w-[550px] text-center phone:w-[350px] phone:mt-[20px]">
            Track how your links are performing across the web with our advance
            statistic dashboard.
          </p>
        </div>
      </div>
      <div className="container w-[1200px] mx-auto px-4 mt-[100px] phone:w-[300px]">
        <div className="flex justify-between relative tablet:flex-col tablet:items-center phone:flex-col phone:items-center">
          <div className="absolute bg-Cyan w-[1000px] h-[10px] bottom-[175px] tablet:hidden phone:hidden"></div>
          <div className="hidden absolute bg-Cyan w-[10px] h-[800px] bottom-[-0px] tablet:block phone:block"></div>
          <Cards
            image={staticImg}
            title="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links don't
          mean a thing. Branded links help instil confidence in your
          content."
          />
          <div className="mt-[40px] tablet:mt-[50px] phone:mt-[80px]">
            <Cards
              image={spedoImg}
              title="Detailed Records"
              content="Gain insight into who is clicking your links. Knowing when and where people engage with your content helps infrom better decisions."
            />
          </div>

          <div className="mt-[80px] tablet:mt-[50px] phone:mt-[80px]">
            <Cards
              image={penImg}
              title="Fill Customizable"
              content="Improve brand awarness and content discoverability through customizable links, supercharging audience engagment."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infosection;
