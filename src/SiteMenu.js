import React from "react";
import "./SiteMenu.css";
import { NavLink } from "react-router-dom";

export default function SiteMenu() {
  return (
    <div className="SiteMenu">
      <h3 className="BrandName">Maritza Gutierrez</h3>
      <ul className="MenuList">
        <li className="MenuItem">
          <NavLink to="/" className="MenuLink">
            Home
          </NavLink>
        </li>
        <li className="MenuItem">
          <NavLink to="/about" className="MenuLink">
            About Me
          </NavLink>
        </li>
        <li className="MenuItem">
          <NavLink to="/projects" className="MenuLink">
            Projects
          </NavLink>
        </li>
        <li className="MenuItem">
          <NavLink to="/contact" className="MenuLink ">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
