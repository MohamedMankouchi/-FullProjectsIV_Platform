import React from "react";
import { Triangle } from "react-loader-spinner";
import Logo from "../images/logo-white.png";
export const Loader = () => {
  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
        className="loader"
      >
        <img className="logo_loader" src={Logo} />
      </div>
    </div>
  );
};
