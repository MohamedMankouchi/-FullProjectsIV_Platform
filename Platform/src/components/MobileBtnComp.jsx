import React, { useState } from "react";
import "../styling/home.css";
import showAllImage from '../icon/plus-icon.png';

const Mobilenav = ({ setPosition }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobilebtn">
      <nav className={`menu ${isOpen ? 'show' : ''}`}>
        <input
          checked={isOpen}
          className="menu-toggler"
          type="checkbox"
          onChange={handleToggleMenu}
        />
        <label htmlFor="menu-toggler">
        </label>
        <ul>
          <li className="menu-item">
            <a className="fas fa-cat" onClick={() => {setPosition([-30, 12, 0]); setIsOpen(false);}}>info</a>
          </li>
          <li className="menu-item">
            <a className="fas fa-cookie-bite" onClick={() => {setPosition([0, 2, -20]); setIsOpen(false);}}>Time</a>
          </li>
          <li className="menu-item">
            <a className="fab fa-earlybirds" onClick={() => {setPosition([30, 15, 5]); setIsOpen(false);}}>Live</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Mobilenav;
