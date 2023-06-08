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
          <a href="#work">Our Work</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};
