import React from "react";
import "./about.css";
import aboutImage from "./aboutt.png";

function About() {
  return (
    <div id="about">
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="about-body">
        <div className="about-left">
          <img src={aboutImage} alt="" />
        </div>
        <div className="about-right">
          <p>
            I am a undergraduate student on the stream computer science and
            engineering and focusing more on front-end web development for the
            past one year. One of the finalist of Kerala Reboot Hackathon 2020
            on the theme LSGD. I'm very much intrested in the web development
            domain and actively learning new techs and doing challenging works
            to keep me charged.
          </p>
          <a
            href="https://drive.google.com/file/d/1cj4plhcUh8Y71yjgkZyCePuuOzqiUUBa/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Get my resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
