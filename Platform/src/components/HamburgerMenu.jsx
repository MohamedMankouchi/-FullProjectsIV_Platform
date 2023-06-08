import React, { useState } from "react";
import "./../styling/hamburger.css";
import Logo from "../images/logo.png";
import LogoDesk from "../images/logo-desk.png";
export const HamburgerMenu = () => {
  return (
    <header className="header">
      <div className="mobile-header">
        <img src={Logo} href="" class="logo" />
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
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
        <img src={LogoDesk} href="" class="logo" />
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
