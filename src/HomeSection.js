import React from "react";
import "./HomeSection.css";
import Profile from "./Profile.js";
<<<<<<< Updated upstream
import SiteMenu from "./SiteMenu";
import { NavLink } from "react-router-dom";
=======
import AboutMe from "./AboutMe";
>>>>>>> Stashed changes

export default function HomeSection() {
  return (
    <div className="HomeSection">
<<<<<<< Updated upstream
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
=======
      <Profile />
      <div className="MeetMaritza">
        <h1 className="GreetingTitle">Hello!</h1>
        <h2 className="IntroSubtitle">Who is Maritza Gutierrez?</h2>
        <ul className="IntroNav">
          <li className="IntroNavItem">
            <a href="/AboutMe" className="IntroNavLink">
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
>>>>>>> Stashed changes
      </div>
    </div>
  );
}
