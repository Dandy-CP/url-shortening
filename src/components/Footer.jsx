import React from "react";
import FacebookLogo from "../assets/image/icon-facebook.svg";
import TwitterLogo from "../assets/image/icon-twitter.svg";
import PinterestLogo from "../assets/image/icon-pinterest.svg";
import InstagramLogo from "../assets/image/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-VeryDarkViolet h-[350px] p-28 tablet:h-[850px] tablet:p-20 phone:h-[850px] phone:p-20">
      <div className="flex justify-evenly tablet:flex-col tablet:items-center phone:flex-col phone:items-center">
        <h1 className="font-bold text-4xl text-white mr-[200px] tablet:mr-[0px] tablet:mb-[40px] phone:mr-[0px] phone:mb-[40px]">
          Shortly
        </h1>

        <div className="tablet:text-center tablet:mb-[40px] phone:text-center phone:mb-[40px]">
          <h1 className="text-white text-xl font-semibold mb-[20px]">
            Features
          </h1>
          <ul>
            <li className=" text-Gray text-lg font-medium mb-[5px] cursor-pointer hover:text-Cyan">
              Link Shortening
            </li>
            <li className=" text-Gray text-lg font-medium mb-[5px] cursor-pointer hover:text-Cyan">
              Branded Links
            </li>
            <li className=" text-Gray text-lg font-medium mb-[5px] cursor-pointer hover:text-Cyan">
              Analytics
            </li>
          </ul>
        </div>

        <div className="tablet:text-center tablet:mb-[40px] phone:text-center phone:mb-[40px]">
          <h1 className="text-white text-xl font-semibold mb-[20px]">
            Resources
          </h1>
          <ul>
            <li className="text-Gray text-lg font-medium mb-[5px] cursor-pointer hover:text-Cyan">
              Blog
            </li>
            <li className="text-Gray text-lg font-medium mb-[5px] cursor-pointer hover:text-Cyan">
              Developers
            </li>
            <li className="text-Gray text-lg font-medium mb-[5px] cursor-pointer hover:text-Cyan">
              Support
            </li>
          </ul>
        </div>

        <div className="tablet:text-center tablet:mb-[40px] phone:text-center phone:mb-[40px]">
          <h1 className="text-white text-xl font-semibold mb-[20px]">
            Company
          </h1>
          <ul>
            <li className="text-Gray text-lg font-medium mb-[5px] cursor-pointer hover:text-Cyan">
              About
            </li>
            <li className="text-Gray text-lg font-medium mb-[5px] cursor-pointer hover:text-Cyan">
              Our Team
            </li>
            <li className="text-Gray text-lg font-medium mb-[5px] cursor-pointer hover:text-Cyan">
              Careers
            </li>
            <li className="text-Gray text-lg font-medium mb-[5px] cursor-pointer hover:text-Cyan">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex">
          <img
            src={FacebookLogo}
            alt="facebooklogo"
            className="h-[25px] mr-[20px] cursor-pointer"
          />
          <img
            src={TwitterLogo}
            alt="twitterlogo"
            className="h-[25px] mr-[20px] cursor-pointer"
          />
          <img
            src={PinterestLogo}
            alt="pinterestlogo"
            className="h-[25px] mr-[20px] cursor-pointer"
          />
          <img
            src={InstagramLogo}
            alt="instagramlogo"
            className="h-[25px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
