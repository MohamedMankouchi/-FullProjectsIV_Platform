import React, { useState } from "react";
import "./../styling/hamburger.css";
import Logo from "../images/logo.png";
export const HamburgerMenu = () => {
  return (
    <header class="header">
      <img src={Logo} href="" class="logo" />
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
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
    </header>
  );
};
