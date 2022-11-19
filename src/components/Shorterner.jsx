import React, { useState } from "react";
import axios from "axios";
import bgShorten from "../assets/image/bg-shorten-desktop.svg";

const Shorterner = () => {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState({});
  const [copyText, setCopyText] = useState("Copy");
  const [error, setError] = useState("");

  const HandleShortin = () => {
    if (url === "") {
      setError("Please add a link");
    } else {
      setError("");
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((res) => setShortenUrl(res.data));
    }
  };

  return (
    <div className="container absolute flex justify-center inset-x-0 mx-auto w-[1200px] px-4 mt-[50px] phone:w-[350px] phone:px-0">
      <div className="w-[1200px] h-[180px] bg-DarkViolet rounded-lg tablet:w-[670px] phone:w-[350px]">
        <img
          src={bgShorten}
          alt=""
          className="absolute rounded-lg w-[1165px] h-[179px] tablet:w-[670px] phone:w-[350px]"
          draggable="false"
        />
        <div className="flex justify-center mt-[65px] tablet:flex-col tablet:items-center tablet:mt-[25px] phone:flex-col phone:items-center phone:mt-[25px]">
          <div className="z-[1]">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className={`w-[850px] h-[50px] rounded-md mr-[20px] p-5 font-medium z-[1] ${
                error === "Please add a link" ? "border-2 border-rose-500" : ""
              } tablet:w-[600px] tablet:mr-[0px] phone:w-[300px] phone:mr-[0px]`}
              onChange={(e) => setUrl(e.target.value)}
            />
            <p className="z-[1] text-Red font-medium italic text-sm mt-[5px]">
              {error}
            </p>
          </div>

          <button
            className={`bg-Cyan w-40 h-[50px] rounded-lg text-white font-bold hover:bg-[#aaf0f0] z-[1]
            tablet:w-[600px] tablet:mt-[25px] phone:w-[300px] phone:mt-[25px] ${
              error === "Please add a link"
                ? "tablet:mt-[5px] phone:mt-[5px]"
                : ""
            }`}
            onClick={HandleShortin}
          >
            Shorten It!
          </button>
        </div>
      </div>

      {Object.values(shortenUrl).map((data) => (
        <div className="container absolute w-[1180px] h-[70px] bottom-[-90px] px-[30px] bg-white rounded-lg tablet:w-[670px] tablet:h-[150px] tablet:bottom-[-180px] tablet:px-[30px] phone:w-[350px] phone:h-[150px] phone:bottom-[-180px] phone:px-[30px]">
          <div className="flex justify-between items-center mt-[14px] tablet:flex-col tablet:items-start phone:flex-col phone:items-start">
            <div className="">
              <p className="text-lg font-medium text-VeryDarkBlue tablet:mb-3 phone:mb-3">
                {data.original_link}
              </p>
            </div>

            <hr className="tablet:w-[600px] phone:w-[300px]" />

            <div className="flex items-center tablet:flex-col tablet:items-start phone:flex-col phone:items-start">
              <p className="text-lg text-Cyan font-semibold tablet:my-1 phone:my-1">
                {data.full_short_link3}
              </p>
              <button
                className="text-sm ml-[25px] bg-Cyan w-[100px] h-[40px] rounded-lg text-white font-bold hover:bg-[#aaf0f0] tablet:w-[610px] tablet:ml-[0px] phone:w-[300px] phone:ml-[0px]"
                onClick={() => {
                  navigator.clipboard.writeText(data.full_short_link3);
                  setCopyText("Copied!");
                }}
              >
                {copyText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shorterner;
