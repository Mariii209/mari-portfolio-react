import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./HamburgerNavBar.css";

export default function HamburgerNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="HamburgerNavBar">
      {!isOpen && (
        <div className="HamburgerIcon" onClick={() => setIsOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {isOpen && (
        <button className="CloseButton" onClick={() => setIsOpen(false)}>
          <i class="fa-solid fa-xmark"></i>
        </button>
      )}

      <aside className={`Sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About Me
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </aside>
    </div>
  );
}
