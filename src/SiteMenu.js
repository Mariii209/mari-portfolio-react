import React from "react";
import "./SiteMenu.css";

export default function SiteMenu() {
  return (
    <div className="SiteMenu">
      <h3 className="SiteTitle">Maritza Gutierrez</h3>
      <ul className="NavList">
        <li className="NavItem">Home</li>
        <li className="NavItem">About Me</li>
        <li className="NavItem">Projects</li>
        <li className="NavItem">Contact</li>
      </ul>
    </div>
  );
}
