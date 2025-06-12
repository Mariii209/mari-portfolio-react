import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/maritza-gutierrez-165618343/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin FooterIcons"></i>
          </a>
        </li>
        <li>
          <a href="mailto:maritza.gutierrez115@gmail.com" rel="noreferrer">
            <i className="fa-regular fa-envelope FooterIcons"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mariii209"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github FooterIcons"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
