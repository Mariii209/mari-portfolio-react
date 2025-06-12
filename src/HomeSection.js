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
        <div className="ProfileContainer">
          <Profile />
        </div>
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
      <div className="HomeFooter">
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
    </div>
  );
}
