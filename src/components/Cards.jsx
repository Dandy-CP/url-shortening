import React from "react";

const Cards = (props) => {
  return (
    <div className=" w-[370px] h-[250px] phone:h-[270px] bg-white rounded-lg p-10 relative phone:w-[330px] phone:px-5">
      <div className="flex justify-center items-center bg-DarkViolet w-[80px] h-[80px] rounded-full absolute bottom-[200px] tablet:ml-[106px] phone:ml-[105px] phone:mb-[20px]">
        <img src={props.image} alt="iconInfo" className="w-[35px] h-[35px]" />
      </div>
      <h1 className="text-2xl font-bold text-DarkViolet pb-5 mt-[30px] phone:text-center">
        {props.title}
      </h1>
      <p className="font-semibold text-gray-400 w-[310px] phone:text-center phone:w-[280px] phone:mx-auto">
        {props.content}
      </p>
    </div>
  );
};

export default Cards;
