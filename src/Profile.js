import React from "react";
import Me from "./Me.jpeg";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="Profile">
      <div className="ProfilePicture">
        <img src={Me} alt="Me" className="img-fluid" />
      </div>
      <h2>Maritza Gutierrez</h2>
      <div>
        <i className="fa-solid fa-minus Dash"></i>
      </div>
      <p>Front-end-Developer</p>
      <ul className="ProfileFooter">
        <li>
          <a
            href="https://www.linkedin.com/in/maritza-gutierrez-165618343/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin Icons"></i>
          </a>
        </li>
        <li>
          <a href="mailto:maritza.gutierrez115@gmail.com" rel="noreferrer">
            <i className="fa-regular fa-envelope Icons"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mariii209"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github Icons"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
