import React, { useRef, useState } from "react";
import "./../styling/hamburger.css";
import Logo from "../images/logo.png";
import LogoWhite from "../images/logo-white.png";
import LogoDesk from "../images/logo-desk.png";
import LogoDeskWhite from "../images/logo-desk-white.png";
import { useLocation, Link, NavLink } from "react-router-dom";

export const HomeMenu = ({ className, onButtonClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const handleInfoButtonClick = () => {
    onButtonClick([-30, 12, 0]);
    handleMenuItemClick();
  };

  const handleTimetableButtonClick = () => {
    onButtonClick([0, 2, -20]);
    handleMenuItemClick();
  };

  const handleLiveShowButtonClick = () => {
    onButtonClick([30, 15, 5]);
    handleMenuItemClick();
  };

  const handleShowroomButtonClick = () => {
    onButtonClick([15, 50, 15]);
    handleMenuItemClick();
  };

  return (
    <header className={"header"}>
      <div className="mobile-header">
        <img src={LogoWhite} className="logo" />
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={menuOpen}
          onChange={handleMenuToggle}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to={"/"}
              onClick={handleMenuItemClick}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleLiveShowButtonClick}
            >
              LIVESTREAM
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleInfoButtonClick}
            >
              INFO
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleTimetableButtonClick}
            >
              TIMETABLE
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleShowroomButtonClick}
            >
              SHOWCASE
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="desk-header">
        <img src={LogoDeskWhite} className="logo" />
        <ul className="list-nav">
          <li>
            <NavLink
              to={"/"}
              onClick={handleMenuItemClick}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleLiveShowButtonClick}
            >
              LIVESTREAM
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleInfoButtonClick}
            >
              INFO
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleTimetableButtonClick}
            >
              TIMETABLE
            </NavLink>
          </li>
          <li>
            <NavLink
                 className={({ isActive }) => (isActive ? "desk" : "")}

                    onClick={handleShowroomButtonClick}
            >
              SHOWCASE
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
