import React from "react";
import "./SocialMedia.css";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a href="https://github.com/eightfeet" className="icon-button github" target="_blank">
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a href="https://www.linkedin.com/in/saadpasta/" className="icon-button qq" target="_blank">
        <i className="fab fa-qq"></i>
        <span></span>
      </a>
      <a href="mailto:747095684@qq.com" className="icon-button email" target="_blank">
        <i className="fab icon-envelope"></i>
        <span></span>
      </a>
    </div>
  );
}
