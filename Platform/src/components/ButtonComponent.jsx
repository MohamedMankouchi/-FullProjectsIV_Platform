import React, { useEffect, useState } from "react";
import "../styling/home.css";


const ButtonComponent = ({ setPosition }) => {
  return (
    <div className="knops">
     
        <button className="buttonshowcase2"onClick={() => setPosition([-30, 12, 0])}>Info</button>
      
      <div className="button2">
        <button className="buttonshowcase2" onClick={() => setPosition([0, 2, -20])}>Timetable</button>
      </div>
      <div className="button3">
        <button className="buttonshowcase2" onClick={() => setPosition([30, 15, 5])}>Live Show</button>
      </div>
      <div className="button4">
        <button className="buttonshowcase2" onClick={() => setPosition([15, 50, 15])}>Showroom</button>
      </div>
    </div>
  );
};

export default ButtonComponent;