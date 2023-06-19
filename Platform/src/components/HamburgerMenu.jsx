import React, { useRef, useState } from "react";
import "./../styling/hamburger.css";
import Logo from "../images/logo.png";
import LogoWhite from "../images/logo-white.png";
import LogoDesk from "../images/logo-desk.png";
import LogoDeskWhite from "../images/logo-desk-white.png";
import { useLocation, Link, NavLink } from "react-router-dom";

export const HamburgerMenu = ({ className }) => {
  return (
    <header className={className == "headerLive" ? className : "header"}>
      <div className="mobile-header">
        <img src={LogoWhite} className="logo" />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/livestream"}
            >
              LIVESTREAM
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/info"
            >
              INFO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/timetable"
            >
              TIMETABLE
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="https://fp4-showcase.be/"
              target="_blank"
            >
              SHOWCASE
            </NavLink> */}
          </li>
        </ul>
      </div>
      <div className="desk-header">
        <img src={LogoDeskWhite} className="logo" />
        <ul className="list-nav">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "activeDesk" : "")}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeDesk" : "")}
              to={"/livestream"}
            >
              LIVESTREAM
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeDesk" : "")}
              to="/info"
            >
              INFO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeDesk" : "")}
              to="/timetable"
            >
              TIMETABLE
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              className={({ isActive }) => (isActive ? "activeDesk" : "")}
              to="https://fp4-showcase.be/"
              target="_blank"
            >
              SHOWCASE
            </NavLink> */}
          </li>
        </ul>
      </div>
    </header>
  );
};
