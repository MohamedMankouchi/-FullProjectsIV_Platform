import React, { useEffect, useState } from "react";
import "../styling/home.css";
import showAllImage from '../icon/plus-icon.png';

const Mobilenav = ({ setPosition }) => {
  const [showMenu, setShowMenu] = useState(false);

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
        <label htmlFor="menu-toggler">
        </label>
        <ul>
          <li className="menu-item">
            <a className="fas fa-cat" onClick={() => setPosition([-30, 12, 0])}>inf0</a>
          </li>
          <li className="menu-item">
            <a className="fas fa-cookie-bite" onClick={() => setPosition([0, 2, -20])}>Time</a>
          </li>
          <li className="menu-item">
            <a className="fab fa-earlybirds" onClick={() => setPosition([30, 15, 5])}>Live </a>
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
