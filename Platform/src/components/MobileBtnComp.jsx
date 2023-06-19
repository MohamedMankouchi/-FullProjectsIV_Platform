import React, { useEffect, useState } from "react";
import "../styling/home.css";
import showAllImage from '../icon/plus-icon.png';
import showcase from'../icon/livestreamicon.png';
import info from'../icon/infoicon.png';
import livestream from'../icon/logoicon.png';
import timetable from'../icon/Icon ionic-md-time.png';


const Mobilenav = ({ onButtonClick }) => {
  const [showMenu, setShowMenu] = useState(false);

<<<<<<< HEAD
  const handleInfoButtonClick = () => {
    onButtonClick([30, 15, 5]);
    setShowMenu(false);
  };

  const handleTimetableButtonClick = () => {
    onButtonClick([-30, 12, 0]);
    setShowMenu(false);
  };

  const handleLiveShowButtonClick = () => {
    onButtonClick([20, 2, 20]);
=======
  //liveshow
    const handleLiveShowButtonClick = () => {
    onButtonClick([-30, 20, 0]);
    setShowMenu(false);
  };

  //info
      const handleInfoButtonClick = () => {
    onButtonClick([30, 15, 5]);
>>>>>>> f9f6ca4d40d28b81e40ca8e907faf0cf7a719776
    setShowMenu(false);
  };

//showcase
  const handleTimetableButtonClick = () => {
    onButtonClick([0, -10, 30]);
    setShowMenu(false);
  };

  //livestream
  const handleShowroomButtonClick = () => {
    onButtonClick([0, -20, -20]);
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
          
        </label>

        <ul>
          <li className="menu-item">
            <a className="fas fa-cat" onClick={handleLiveShowButtonClick}>
              <div className="image-blend">
                <img src={livestream} alt="" />
              </div>
            </a>
          </li>

          <li className="menu-item">
            <a className="fab fa-earlybirds" onClick={handleTimetableButtonClick}>
              <div className="image-blend">
                <img src={timetable} alt="" />
              </div>
            </a>
          </li>
                    <li className="menu-item">
            <a className="fas fa-cookie-bite" onClick={handleInfoButtonClick}>
              <div className="image-blend">
                <img src={info} alt="" />
              </div>
            </a>
          </li>
          <li className="menu-item">
            <a className="fab fa-earlybirds" onClick={handleShowroomButtonClick}>
              <div className="image-blend">
                <img src={showcase} alt="" />
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
