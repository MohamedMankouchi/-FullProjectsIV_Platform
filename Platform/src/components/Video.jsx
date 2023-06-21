import React from "react";
import "../styling/video.css";
import Overlay from "../images/overlay.svg";
export const Video = () => {
  return (
    <div className="bigOne">
      <div className="bigContainer">
        <div className="video_container">
          <div className="video">
            <div className="overlayone"></div>
            <div className="overlaytwo"></div>
            <iframe
              className="frame"
              src="https://www.youtube.com/embed/7tNtU5XFwrU"
              title="YouTube video player"
              frameborder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div>
            <h2 style={{ marginTop: "55px", placeSelf: "center" }}>
              Live chat
            </h2>
            <iframe
              className="chat"
              height="300"
              src="https://www.youtube.com/live_chat?v=7tNtU5XFwrU&embed_domain=https://www.finalshow.be/"
            ></iframe>
          </div>
        </div>
      </div>
      <button className="btnYoutube" style={{ marginTop: "55px" }}>
        Watch on Youtube
      </button>
    </div>
  );
};
