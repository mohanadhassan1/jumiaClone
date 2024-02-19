import React from "react";
import logo from "../../assets/tab.png";
import fullLogo from "../../assets/logo.svg";
const Header = () => {
  return (
    <div className="flex justify-around h-10 bg-gray-300">
      <div className="container mx-auto flex justify-between">
      <div className="flex justify-center items-center">
        <img src={logo} width={20} className="mr-2" alt="" />
        <a href="" className="text-orange-600 hover:underline">
          Sell on Jumia
        </a>
      </div>

      <div className="flex justify-center items-center">
        <img src={fullLogo} width={70} alt="" />
      </div>

      <div className="flex justify-center items-center gap-3">
        <a href="" className="border-r-2 pr-3">
          English
        </a>
        <a href="" className="pl-2">
          عربي
        </a>
      </div>
      </div>
    </div>
  );
};

export default Header;
