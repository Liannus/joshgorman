import React from 'react';
import ProjectCard from './partials/ProjectCard.js'

const Projects = (props) => {
  return (
    <div>
      <h2> PROJECTS </h2>
      <div className="row">
        <div className="col-md-6">
          <ProjectCard imgSide="left"/>
        </div>
        <div className="col-md-6">
          <ProjectCard imgSide="right"/>
        </div>
        <div className="col-md-6">
          <ProjectCard imgSide="left"/>
        </div>
        <div className="col-md-6">
          <ProjectCard imgSide="right"/>
        </div>
      </div>
      <style jsx> {`
        h2 {
            text-align: center;
            color: #fcfaf9;
        }
      `}</style>
    </div>
  );
};

export default Projects;
