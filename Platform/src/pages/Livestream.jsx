import React from "react";
import "../App.css";
import Countdown from "react-countdown";
import { HamburgerMenu } from "../components/HamburgerMenu";
import "../styling/livestream.css";
import { Link } from "react-router-dom";
import Instagram from "../images/instagram.svg";
export const Livestream = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h1>You are good to gooo</h1>;
    } else {
      return (
        <div className="timer">
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
    <div className="outerwrapper">
      <HamburgerMenu className={"headerLive"} />
      <div className="wrapper">
        <div className="container">
          <h1>The show begins in...</h1>
          <Countdown
            renderer={renderer}
            date={new Date("2023-06-23T19:00:00").getTime()}
          />
        </div>
        <div className="media">
          <p>Be ready on Friday June 23th.</p>
          <div className="media_buttons">
            <Link
              to={
                "https://www.eventbrite.com/e/tickets-final-show-2023-648852223467"
              }
              target="_blank"
            >
              {" "}
              <button className="button-tickets">Get your tickets</button>
            </Link>
            <div className="instagram">
              <p>Follow us on : </p>
              <div className="instagram_container">
                <Link
                  to={"https://www.instagram.com/multimedia.ehb/"}
                  target="_blank"
                >
                  {" "}
                  <img className="instagram_styling" src={Instagram} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
