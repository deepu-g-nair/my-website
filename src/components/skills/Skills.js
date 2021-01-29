import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div id="skills">
      <div className="technical-skills">
        <h3 className="skills-heading">Technical Skills</h3>
        <div className="skill-box">
          <p>Html</p>
          <p>90%</p>
          <div className="skill">
            <div className="skill-level" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="skill-box">
          <p>Css</p>
          <p>85%</p>
          <div className="skill">
            <div className="skill-level" style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="skill-box">
          <p>Javascript</p>
          <p>60%</p>
          <div className="skill">
            <div className="skill-level" style={{ width: "60%" }}></div>
          </div>
        </div>
        <div className="skill-box">
          <p>Bootstrap</p>
          <p>75%</p>
          <div className="skill">
            <div className="skill-level" style={{ width: "75%" }}></div>
          </div>
        </div>
        <div className="skill-box">
          <p>React</p>
          <p>70%</p>
          <div className="skill">
            <div className="skill-level" style={{ width: "70%" }}></div>
          </div>
        </div>
      </div>
      <div className="professional-skills">
        <h3 className="skills-heading">Professional Skills</h3>
        <div className="skills-body">
          <div className="percent">
            <svg>
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50" strokeDashoffset="62"></circle>
              <text x="50%" y="50%" textAnchor="middle">
                80%
              </text>
            </svg>
            <p style={{ paddingLeft: "30px" }}>Communication</p>
          </div>
          <div className="percent">
            <svg>
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50" strokeDashoffset="124"></circle>
              <text x="50%" y="50%" textAnchor="middle">
                60%
              </text>
            </svg>
            <p style={{ paddingLeft: "45px" }}>Team&nbsp;work</p>
          </div>
          <div className="percent">
            <svg>
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50" strokeDashoffset="78"></circle>
              <text x="50%" y="50%" textAnchor="middle">
                75%
              </text>
            </svg>
            <p style={{ paddingLeft: "10px" }}>Project&nbsp;Management</p>
          </div>
          <div className="percent">
            <svg>
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50" strokeDashoffset="93"></circle>
              <text x="50%" y="50%" textAnchor="middle">
                70%
              </text>
            </svg>
            <p style={{ paddingLeft: "46px" }}>Creativity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
