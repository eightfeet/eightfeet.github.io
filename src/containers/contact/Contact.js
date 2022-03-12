import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Contact() {
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-text-div">
          <h1 className="contact-detail-email">747095684@qq.com</h1>

          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
