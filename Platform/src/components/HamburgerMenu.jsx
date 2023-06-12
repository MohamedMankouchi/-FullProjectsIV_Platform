import React, { useRef, useState } from "react";
import "./../styling/hamburger.css";
import Logo from "../images/logo.png";
import LogoWhite from "../images/logo-white.png";
import LogoDesk from "../images/logo-desk.png";
import LogoDeskWhite from "../images/logo-desk-white.png";
import { useLocation, Link, NavLink } from "react-router-dom";

export const HamburgerMenu = ({ className }) => {
  const location = useLocation();
  const ref = useRef();
  console.log(window.innerWidth);
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
            <NavLink
              ref={ref}
              to={"/home"}
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
              to="/schedule"
            >
              TIMESCHEDULE
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/showcase"
            >
              SHOWCASE
            </NavLink>
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
            <NavLink
              ref={ref}
              to={"/home"}
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
              to="/schedule"
            >
              TIMESCHEDULE
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeDesk" : "")}
              to="/showcase"
            >
              SHOWCASE
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
