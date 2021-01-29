import React, { useState } from "react";
import "./home.css";
import headerImage from "./img.png";
import Mobilemenu from "../Mobilemenu";

function Home() {
  const [view, setView] = useState(false);
  return (
    <div id="home">
      <div className="header-nav">
        <svg>
          <text x="25%" y="80%" fill="transparent" textAnchor="middle">
            Deepu G Nair
          </text>
        </svg>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="menu" onClick={() => setView(!view)}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
      {view ? <Mobilemenu /> : ""}
      <div className="header-body">
        <div className="sec-left">
          <h4>Hi,</h4>
          <h3>I'm Deepu,</h3>
          <h3> Web Developer</h3>
          <div className="socio-icons">
            <a
              href="https://www.facebook.com/deepu.rockzz.1675"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook icon-style" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/DeepuGNair1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter icon-style" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/deepu.g.nair/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram icon-style" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/deepu-g-nair"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github icon-style" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/deepu-g-nair-4a80181b2/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin icon-style" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="sec-right">
          <img src={headerImage} />
        </div>
      </div>
    </div>
  );
}

export default Home;
