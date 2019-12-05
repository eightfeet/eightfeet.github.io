import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

export default function Greeting() {
  return (
    <div className="gretting-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">肖吉宁
            </h1>
            
            <p className="greeting-text-p subTitle">
              一个酷爱艺术与产品开发的前端程序员，做过视觉设计、交互设计、最终在前端这个领域无法自拔，优秀的程序员正如《黑客与画家》所说他也是创造者，与画家、建筑师、作家一样，他们有一个共同特质”作品情节“。
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="&nbsp;联系我&nbsp;" href="#contact" />
              
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={require("../../assests/images/undraw_code_review_l1q9.svg")}></img>
        </div>
      </div>
    </div>
  );
}
