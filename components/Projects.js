import React from 'react';
import ProjectCard from './partials/ProjectCard.js'

const Projects = (props) => {
  return (
    <>
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
      </div>
    </>
  );
};

export default Projects;
