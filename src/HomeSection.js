import React from "react";
import "./HomeSection.css";
import Profile from "./Profile.js";
import SiteMenu from "./SiteMenu";
import { NavLink } from "react-router-dom";

export default function HomeSection() {
  return (
    <div className="HomeSection">
      <SiteMenu />
      <div className="HomeContent">
        <Profile />
        <div className="MeetMaritza">
          <h1 className="GreetingTitle">Hello!</h1>
          <h2 className="IntroSubtitle">Who is Maritza Gutierrez?</h2>
          <ul className="IntroNav">
            <li className="IntroNavItem">
              <NavLink to="/about" className="IntroNavLink">
                About Me
              </NavLink>
            </li>
            <li className="IntroNavItem">
              <NavLink to="/projects" className="IntroNavLink">
                Projects
              </NavLink>
            </li>
            <li className="IntroNavItem">
              <NavLink to="/contact" className="IntroNavLink">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
