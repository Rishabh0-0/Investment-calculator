import React from "react";
import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header className="flex flex-col items-center mb-4">
      <img src={logo} alt="logo" className="w-40 mb-2" />
      <h1 className="text-white text-2xl">Investment Calculator</h1>
    </header>
  );
};

export default Header;
