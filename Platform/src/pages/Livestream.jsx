import React from "react";
import "../App.css";
import Countdown from "react-countdown";
import { HamburgerMenu } from "../components/HamburgerMenu";

export const Livestream = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h1>You are good to gooo</h1>;
    } else {
      return (
        <div
          style={{ display: "flex", gap: "35px", justifyContent: "center" }}
          className="timer"
        >
          <div className="day">
            <h1>
              {days} <span className="span">Days</span>
            </h1>
          </div>
          <div className="hour">
            <h1>
              {hours} <span className="span">Hours</span>{" "}
            </h1>
          </div>
          <div className="min">
            <h1>
              {minutes} <span className="span">Minutes</span>{" "}
            </h1>
          </div>
          <div className="sec">
            <h1>
              {seconds} <span className="span">Seconds</span>
            </h1>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <HamburgerMenu />
      <div className="wrapper">
        <div className="container">
          <h1>The show begins in...</h1>
          <p>FINAL SHOW 2023</p>
          <p>Be ready on Friday June 23th.</p>

          <Countdown
            renderer={renderer}
            date={new Date("2023-06-23T19:00:00").getTime()}
          />
        </div>
        <div className="media">
          <h1>Find more on</h1>
          <div className="media_buttons">
            <button>Instagram</button>
            <button>Showcase</button>
          </div>
        </div>
      </div>
    </div>
  );
};
