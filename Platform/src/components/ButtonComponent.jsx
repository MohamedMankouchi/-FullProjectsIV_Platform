import React, { useEffect, useState } from "react";
import "../styling/home.css";


const ButtonComponent = ({ setPosition }) => {
  return (
    <div className="knops">
      <div className="button1">
        <button onClick={() => setPosition([-30, 12, 0])}>Info</button>
      </div>
      <div className="button2">
        <button onClick={() => setPosition([0, 2, -20])}>Timetable</button>
      </div>
      <div className="button3">
        <button onClick={() => setPosition([30, 15, 5])}>Live Show</button>
      </div>
      <div className="button4">
        <button onClick={() => setPosition([15, 50, 15])}>Showroom</button>
      </div>
    </div>
  );
};

export default ButtonComponent;