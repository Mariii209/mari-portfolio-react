import React from "react";
import "./GetInTouch.css";

export default function GetInTouch() {
  return (
    <div className="GetInTouch">
      <h2>Let's Content</h2>
      <p>
        Feel free to reach out if you'd like to discuss a project, collaborate
        on an idea, or just say hello. I'm always open to new opportunities and
        conversations — and I’ll get back to you quickly!
      </p>
      <ul className="ContactLinks">
        <li>
          <a href="/">
            <i className="fa-brands fa-linkedin Icons"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa-regular fa-envelope Icons"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa-brands fa-github Icons"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
