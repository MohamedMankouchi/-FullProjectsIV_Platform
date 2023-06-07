import { useEffect } from "react";
import "./App.css";
import Countdown from "react-countdown";

function App() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h1>You are good to gooo</h1>;
    } else {
      return (
        <div style={{ display: "flex", gap: "25px" }} className="timer">
          <div className="day">
            <h1>{days}</h1>
            Days
          </div>
          <div className="hour">
            <h1>{hours}</h1>
            Hours
          </div>
          <div className="min">
            <h1>{minutes}</h1>
            Minutes
          </div>
          <div className="sec">
            <h1>{seconds}</h1>
            Seconds
          </div>
        </div>
      );
    }
  };
  return (
    <div className="wrapper">
      <div className="container">
        <h1>COMING SOON..</h1>
        <p>FINAL SHOW 2023</p>
        <Countdown
          renderer={renderer}
          date={new Date("2023-06-23T19:00:00").getTime()}
        />
      </div>
      <div className="media">
        <h1>Follow our socials for updates !</h1>
        <div className="media_buttons">
          <button>Instagram</button>
          <button>LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

export default App;
