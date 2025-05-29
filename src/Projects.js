import React from "react";
import SiteMenu from "./SiteMenu";
import WeatherApp from "./WeatherApp.jpg";
import Dictionary from "./Dictionary.jpeg";
import AI from "./AI.jpeg";
import Photography from "./Photography.jpeg";
import Recipe from "./Recipe.jpeg";
import Lisbon from "./Lisbon.jpeg";
import "./Projects.css";
import Footer from "./Footer";

export default function Projects() {
  return (
    <div className="Projects">
      <SiteMenu />
      <div className="container ProjectSection">
        <h1 className="ProjectsHedding">What I’ve Been Building</h1>
        <div className="AllProjects">
          <div className="row">
            <div className="col-md ProjectInfo">
              <a
                href="https://photography-mariii.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="ProjectLinks"
              >
                <img
                  src={Photography}
                  alt="Photography"
                  className="img-fluid"
                />
                <h4 className="ProjectName">Photography Project</h4>
                <p className="ProjectRole">Frontend Developer</p>
              </a>
            </div>
            <div className="col-md ProjectInfo">
              <a
                href="https://food-recipe-collection.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="ProjectLinks"
              >
                <img src={Recipe} alt="Recipe App" className="img-fluid" />
                <h4 className="ProjectName">Recipe App</h4>
                <p className="ProjectRole">Frontend Developer</p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md ProjectInfo">
              <a
                href="https://marii-lisbon-website.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="ProjectLinks"
              >
                <img src={Lisbon} alt="Lisbon" className="img-fluid" />
                <h4 className="ProjectName">Lisbon Website</h4>
                <p className="ProjectRole">Frontend Developer</p>
              </a>
            </div>
            <div className="col-md ProjectInfo">
              <a
                href="https://mariii-ai-generator-project.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="ProjectLinks"
              >
                <img src={AI} alt="AI Chat" className="img-fluid" />
                <h4 className="ProjectName">AI Chat</h4>
                <p className="ProjectRole">Frontend Developer</p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md ProjectInfo">
              <a
                href="https://dictionary-mariii.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="ProjectLinks"
              >
                <img src={Dictionary} alt="Dictionary" className="img-fluid" />
                <h4 className="ProjectName">Dictionary Project</h4>
                <p className="ProjectRole">Frontend Developer</p>
              </a>
            </div>
            <div className="col-md ProjectInfo">
              <a
                href="https://weather-app-mariii.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="ProjectLinks"
              >
                <img src={WeatherApp} alt="Weather App" className="img-fluid" />
                <h4 className="ProjectName">Weather Project</h4>
                <p className="ProjectRole">Frontend Developer</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
