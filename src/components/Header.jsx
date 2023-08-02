import React from "react";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../styles/Header.css";
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_left">
        Razor
        <div className="divider_container">
          <div className="divider"></div>
          <div className="sales_text">
            Sales@Razor.uk <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      <div className="header_right">
        <BsGlobe />
        <p className="sign_up_text">Sign up</p>
        <button className="demo_button">Request Demo</button>
      </div>
    </div>
  );
};

export default Header;
