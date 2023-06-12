import React from "react";
import "../styling/video.css";
import Overlay from "../images/overlay.svg";
export const Video = () => {
  return (
    <div className="bigContainer">
      <div className="video_container">
        <div className="video">
          <div className="overlayone"></div>
          <div className="overlaytwo"></div>
          <iframe
            className="frame"
            src="https://www.youtube-nocookie.com/embed/kmRNWQGVoB4"
            title="YouTube video player"
            frameborder="0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <h2 style={{ marginTop: "55px" }}>Live chat</h2>
        <iframe
          height="300"
          src="https://www.youtube.com/live\_chat?v=7UCOwu5wwKQ&amp;embed\_domain=stephensimon.xyz"
        ></iframe>
        <button className="btnYoutube" style={{ marginTop: "55px" }}>
          Watch on Youtube
        </button>
      </div>
    </div>
  );
};
