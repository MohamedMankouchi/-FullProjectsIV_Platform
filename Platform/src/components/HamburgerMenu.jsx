import React, { useState } from "react";
import "./../styling/hamburger.css";
import Logo from "../images/logo.png";
import LogoWhite from "../images/logo-white.png";
import LogoDesk from "../images/logo-desk.png";
import LogoDeskWhite from "../images/logo-desk-white.png";
import { useLocation } from "react-router-dom";

export const HamburgerMenu = ({ className }) => {
  console.log(className);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className={className == "headerLive" ? className : "header"}>
      <div className="mobile-header">
        {location.pathname == "/livestream" || location.pathname == "/" ? (
          <img src={LogoWhite} className="logo" />
        ) : (
          <img src={Logo} className="logo" />
        )}{" "}
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a href="#about">LIVESTREAM</a>
          </li>
          <li>
            <a href="#careers">INFO</a>
          </li>
          <li>
            <a href="#contact">TIMESCHEDULE</a>
          </li>
          <li>
            <a href="#contact">SHOWCASE</a>
          </li>
        </ul>
      </div>
      <div className="desk-header">
        {location.pathname == "/livestream" || location.pathname == "/" ? (
          <img src={LogoDeskWhite} className="logo" />
        ) : (
          <img src={LogoDesk} className="logo" />
        )}
        <ul className="list-nav">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a href="#about">LIVESTREAM</a>
          </li>
          <li>
            <a href="#careers">INFO</a>
          </li>
          <li>
            <a href="#contact">TIMESCHEDULE</a>
          </li>
          <li>
            <a href="#contact">SHOWCASE</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
