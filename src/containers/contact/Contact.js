import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Contact() {
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">联系我 ☎️</h1>
        </div>
        <div className="contact-text-div">
          <h1 className="contact-detail"><a href="tel:13622809420">+86-13622809420</a></h1>

          <h1 className="contact-detail-email">747095684@qq.com</h1>

          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
