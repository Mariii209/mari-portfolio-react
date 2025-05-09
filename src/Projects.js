import React from "react";
import SiteMenu from "./SiteMenu";
import WeatherApp from "./WeatherApp.jpg";
import Dictionary from "./Dictionary.jpeg";
import AI from "./AI.jpeg";
import Photography from "./Photography.jpeg";
import Recipe from "./Recipe.jpeg";
import Lisbon from "./Lisbon.jpeg";

export default function Projects() {
  return (
    <div>
      <SiteMenu />
      <div className="container ProjectSection">
        <h1 className="projects-heading">What I’ve Been Building</h1>
        <div className="row">
          <div className="col-md ProjectInfo">
            <a
              href="https://your-photography-link.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Photography} alt="Photography" className="img-fluid" />
              <h4 className="ProjectName">Photography Project</h4>
              <p className="ProjectRole">Frontend Developer</p>
            </a>
          </div>
          <div className="col-md ProjectInfo">
            <a
              href="https://your-recipe-link.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Recipe} alt="Recipe App" className="img-fluid" />
              <h4 className="ProjectName">Recipe App</h4>
              <p className="ProjectRole">Frontend Developer</p>
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-md ProjectInfo">
            <a
              href="https://your-lisbon-link.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Lisbon} alt="Lisbon" className="img-fluid" />
              <h4 className="ProjectName">Lisbon Website</h4>
              <p className="ProjectRole">Frontend Developer</p>
            </a>
          </div>
          <div className="col-md ProjectInfo">
            <a
              href="https://your-ai-chat-link.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={AI} alt="AI Chat" className="img-fluid" />
              <h4 className="ProjectName">AI Chat</h4>
              <p className="ProjectRole">Frontend Developer</p>
            </a>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-md ProjectInfo">
            <a
              href="https://your-dictionary-link.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Dictionary} alt="Dictionary" className="img-fluid" />
              <h4 className="ProjectName">Dictionary Project</h4>
              <p className="ProjectRole">Frontend Developer</p>
            </a>
          </div>
          <div className="col-md ProjectInfo">
            <a
              href="https://your-weather-app-link.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={WeatherApp} alt="Weather App" className="img-fluid" />
              <h4 className="ProjectName">Weather Project</h4>
              <p className="ProjectRole">Frontend Developer</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
