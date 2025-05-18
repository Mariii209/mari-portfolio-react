import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./HamburgerNavBar.css";

export default function HamburgerNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="HamburgerNavBar">
      {!isOpen && (
        <div className="HamburgerIcon" onClick={() => setIsOpen(!isOpen)}>
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

      {isOpen && (
        <aside ref={sidebarRef} className={`Sidebar ${isOpen ? "open" : ""}`}>
          <nav>
            <NavLink
              to="/"
              className="SideBarLink"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="SideBarLink"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </NavLink>
            <NavLink
              to="/projects"
              className="SideBarLink"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="SideBarLink"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </aside>
      )}
    </div>
  );
}
