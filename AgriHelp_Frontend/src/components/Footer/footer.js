import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#219653] inPhone py-20">
      <div className="flex justify-center items-center">
        <div className="flex-1 border-r-2 border-black-600">
          <div
            className="flex justify-center items-center mx-8 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} className="footerLogo" alt="" />
            <div className="ml-4">
              <h3 className="text-2xl text-white font-bold mt-4">AGRI HELP</h3>
              <p className="text-md font-normal text-white mt-2">
                WeAreFarmerVoice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
