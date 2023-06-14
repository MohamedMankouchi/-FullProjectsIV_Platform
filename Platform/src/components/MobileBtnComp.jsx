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
  };

  const handleTimetableButtonClick = () => {
    onButtonClick([0, 2, -20]);
  };

  const handleLiveShowButtonClick = () => {
    onButtonClick([30, 15, 5]);
  };

  const handleShowroomButtonClick = () => {
    onButtonClick([15, 50, 15]);
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
                <img src={showcase} alt="" />
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


/*    <div className="mobile-btn">
        
      {/* <div>
        <button onClick={handleShowAll}>
          {showButtons ? <img src={showAllImage} alt="Show All" /> : <img src={showAllImage} alt="Show All" />}
        </button>
      </div>

      {showButtons && (
        <>
          <div>
            <button className="mobile-home-btn" onClick={() => setPosition([-30, 12, 0])}>Info</button>
          </div>

          <div>
            <button className="mobile-home-btn" onClick={() => setPosition([0, 2, -20])}>Timetable</button>
          </div>

          <div>
            <button className="mobile-home-btn" onClick={() => setPosition([30, 15, 5])}>Live Show</button>
          </div>

          <div>
            <button className="mobile-home-btn" onClick={() => setPosition([15, 50, 15])}>Showroom</button>
          </div>
        </>
      )} 

      
      
    
    </div>
*/
