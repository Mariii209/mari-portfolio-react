import React from "react";
import Me from "./Me.jpeg";
import "./HomeSection.css";

export default function HomeSection() {
  return (
    <div className="HomeSection">
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
            <a href="/">
              <i className="fa-brands fa-linkedin icons"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-regular fa-envelope icons"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-brands fa-github icons"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <h1>Hello!</h1>
        <h2>Who is Maritza Gutierrez</h2>
        <ul>
          <li>
            <a href="/">About Me</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
