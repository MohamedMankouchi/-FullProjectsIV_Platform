import React from "react";
import "../styling/home.css";

const ButtonComponent = ({ onButtonClick }) => {
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

  return (
    <div className="knops">
      <button className="buttonshowcase2" onClick={handleInfoButtonClick}>
        Info
      </button>
      <div className="button2">
        <button
          className="buttonshowcase2"
          onClick={handleTimetableButtonClick}
        >
          Timetable
        </button>
      </div>
      <div className="button3">
        <button
          className="buttonshowcase2"
          onClick={handleLiveShowButtonClick}
        >
          Live Show
        </button>
      </div>
      <div className="button4">
        <button
          className="buttonshowcase2"
          onClick={handleShowroomButtonClick}
        >
          Showroom
        </button>
      </div>
    </div>
  );
};

export default ButtonComponent;
