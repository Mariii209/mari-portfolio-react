import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li>
          <a href="/">
            <i className="fa-brands fa-linkedin FooterIcons"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa-regular fa-envelope FooterIcons"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa-brands fa-github FooterIcons"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
