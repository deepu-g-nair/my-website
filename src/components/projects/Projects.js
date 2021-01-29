import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div id="projects">
      <div className="title">
        <h1 style={{ paddingLeft: "4px" }}>Projects</h1>
      </div>
      <div className="projects-body">
        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Activity Point Management Software</h3>
              <p>
                This web application helps to manage activity points fo KTU
                students and colleges. Students can upload certificates for
                activity points and college can verify and approve/reject the
                same.
              </p>
              <a
                href="https://github.com/deepu-g-nair/activity-point-management-software-for-ktu"
                target="_blank"
                rel="noreferrer"
              >
                Know more &nbsp;<i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Socio-Demographic Data Collection and Analysis Platform</h3>
              <p style={{ marginBottom: "40px" }}>
                This offers a unique way for comprehensive, periodic,
                decentralized, acurate, systematic and verifiable data
                collection, processing and managing system
              </p>
              <a
                href="https://github.com/deepu-g-nair/socio-demographic-data-collection-and-analysis-platform-frontend"
                target="_blank"
                rel="noreferrer"
              >
                Know more &nbsp;<i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <h3>E-commerce website for Agricultural Crops</h3>
              <p>
                An exclusive platform for the selling and buying of farm
                products and crops. Sellers can sell their products directly
                with their own price and buyer can buy good and fresh farm
                products.
              </p>
              <a
                href="https://github.com/deepu-g-nair/e-commerce-website"
                target="_blank"
                rel="noreferrer"
              >
                Know more &nbsp;<i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
