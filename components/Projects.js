import React from 'react';
import ProjectCard from './partials/ProjectCard.js'

const cards = [
      {
        projectTitle: "Forest Fire",
        subTitle: "React, NPM and Webpack",
        content: 1,
        link: 1,
        imgSide: "left"
      },
      {
        projectTitle: "Recipe Repo",
        subTitle: "NodeJS, MongoDB, Express and Pug",
        content: 1,
        link: 1,
        imgSide: "right"
      },
      {
        projectTitle: "Warframe Tracker",
        subTitle: "Electron, Redux and Jest",
        content: 1,
        link: 1,
        imgSide: "left"
      },
      {
        projectTitle: "Path of Tools",
        subTitle: "?",
        content: 1,
        link: 1,
        imgSide: "right"
      }
  ];
const Projects = (props) => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="row">
      {cards.map(i=> {
        return(
        <div key={i.projectTitle} className="col-md-6">
          <ProjectCard key={i.projectTitle}
                       projectTitle={i.projectTitle}
                       subTitle={i.subTitle}
                       content={i.content}
                       link={i.link}
                       imgSide={i.imgSide}/>
        </div>
        );
      })}
      </div>
      <style jsx> {`
        h2 {
            text-align: center;
            color: #fcfaf9;
            margin-bottom: 28px;
        }
      `}</style>
    </div>
  );
};

export default Projects;
