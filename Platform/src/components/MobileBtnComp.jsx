import React, { useState } from "react";
import "../styling/home.css";
import showAllImage from '../icon/plus-icon.png';
import livestream from'../icon/livestreamicon.png';
import info from'../icon/infoicon.png';
import timetable from'../icon/logoicon.png';
import showcase from'../icon/Question_mark.svg';

const Mobilenav = ({ onButtonClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleInfoButtonClick = () => {
    onButtonClick([-30, 12, 0]);
    setShowMenu(false);
  };

  const handleTimetableButtonClick = () => {
    onButtonClick([0, 2, -20]);
    setShowMenu(false);
  };

  const handleLiveShowButtonClick = () => {
    onButtonClick([30, 15, 5]);
    setShowMenu(false);
  };

  const handleShowroomButtonClick = () => {
    onButtonClick([15, 50, 15]);
    setShowMenu(false);
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="mobilebtn">
      <nav className={`menu ${showMenu ? 'show' : ''}`}>
        <input
          checked={showMenu}
          className="menu-toggler"
          type="checkbox"
          onChange={handleToggleMenu}
        />
        <label htmlFor="menu-toggler" className="plus-icon">
          +
        </label>

        <ul>
          <li className="menu-item">
            <a className="fas fa-cat" onClick={handleTimetableButtonClick}>
              <div className="image-blend">
                <img src={info} alt="" />
              </div>
            </a>
          </li>
          <li className="menu-item">
            <a className="fas fa-cookie-bite" onClick={handleInfoButtonClick}>
              <div className="image-blend">
                <img src={livestream} alt="" />
              </div>
            </a>
          </li>
          <li className="menu-item">
            <a className="fab fa-earlybirds" onClick={handleLiveShowButtonClick}>
              <div className="image-blend">
                <img src={info} alt="" />
              </div>
            </a>
          </li>
          <li className="menu-item">
            <a className="fab fa-earlybirds" onClick={handleShowroomButtonClick}>
              <div className="image-blend">
                <img src={timetable} alt="" />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Mobilenav;
