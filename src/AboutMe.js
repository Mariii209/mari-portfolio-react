import React from "react";
<<<<<<< Updated upstream
import SiteMenu from "./SiteMenu";
import "./AboutMe.css";
import Me from "./Me.jpeg";
import { NavLink } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <SiteMenu />
      <div className="container MeSection">
        <div className="row">
          <div className="col-md">
            <div className="MeSectionDescription">
              <h1>Hi I am Maritza Gutierrez</h1>
              <h2>Frontend Developer, based in Modesto, California.</h2>
              <p>
                Hi, I’m Maritza Gutierrez — a front-end developer in training,
                based in Modesto, California. I’m currently focused on building
                clean, responsive web apps using HTML, CSS, JavaScript, and
                React. I enjoy turning ideas into real websites, and I’ve
                already created beginner projects like a weather app, a
                dictionary, a world clock, and my personal portfolio. I also use
                APIs to fetch and display real-time data in my apps. I’m a quick
                learner, a strong communicator, and a good team player who
                enjoys collaborating and bringing positive energy to every
                project. My goal is to join a team where I can keep growing and
                contribute to meaningful work.
              </p>
              <NavLink to="/projects" className="ProjectsLink">
                View all projects
              </NavLink>
            </div>
          </div>
          <div className="col-md">
            <div className="MeSectionImage">
              <img
                src={Me}
                alt="Maritza Gutierrez"
                className="img-fluid AboutMeImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
=======

export default function AboutMe() {
  return <div>hello</div>;
>>>>>>> Stashed changes
}
