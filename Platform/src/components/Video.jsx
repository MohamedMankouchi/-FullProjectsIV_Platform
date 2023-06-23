import React from "react";
import "../styling/video.css";
import Overlay from "../images/overlay.svg";
import { Link } from "react-router-dom";
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
              src="https://www.youtube.com/embed/fWcJGtS2fgM"
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
              src="https://www.youtube.com/live_chat?v=fWcJGtS2fgM&embed_domain=www.finalshow.be"
            ></iframe>
          </div>
        </div>
      </div>
      <button className="btnYoutube" style={{ marginTop: "55px" }}>
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://www.youtube.com/embed/fWcJGtS2fgM"
          target="_blank"
        >
          Watch on Youtube
        </a>
      </button>
    </div>
  );
};
