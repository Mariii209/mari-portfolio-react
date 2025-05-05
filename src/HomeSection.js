import React from "react";
import "./HomeSection.css";
import Profile from "./Profile.js";

export default function HomeSection() {
  return (
    <div className="HomeSection">
      <Profile />
      <div className="MeetMaritza">
        <h1 className="GreetingTitle">Hello!</h1>
        <h2 className="IntroSubtitle">Who is Maritza Gutierrez?</h2>
        <ul className="IntroNav">
          <li className="IntroNavItem">
            <a href="/" className="IntroNavLink">
              About Me
            </a>
          </li>
          <li className="IntroNavItem">
            <a href="/" className="IntroNavLink">
              Projects
            </a>
          </li>
          <li className="IntroNavItem">
            <a href="/" className="IntroNavLink">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
