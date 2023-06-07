import { useEffect } from "react";
import "./App.css";
import Countdown from "react-countdown";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>COMING SOON..</h1>
        <p>FINAL SHOW 2023</p>
        <Countdown date={new Date("2023-06-23T19:00:00").getTime()} />
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
