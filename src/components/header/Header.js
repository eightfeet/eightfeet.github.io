import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <a className="logo">
          <span className="grey-color"> &lt;</span>
          <i className="logo">&nbsp;Eightfeet&nbsp;</i>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#opensource">开源项目</a>
          </li>
          <li>
            <a href="#contact">联系我</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
