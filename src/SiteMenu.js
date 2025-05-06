import React from "react";
import "./SiteMenu.css";

export default function SiteMenu() {
  return (
    <div className="SiteMenu">
      <h3 className="BrandName">Maritza Gutierrez</h3>
      <ul className="MenuList">
        <li className="MenuItem">
          <a href="/" className="MenuLink active">
            Home
          </a>
        </li>
        <li className="MenuItem">
          <a href="/about" className="MenuLink">
            About Me
          </a>
        </li>
        <li className="MenuItem">
          <a href="/projects" className="MenuLink">
            Projects
          </a>
        </li>
        <li className="MenuItem">
          <a href="/contact" className="MenuLink">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
