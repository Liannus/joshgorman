import React from "react";
import { ProjectCard } from "components/partials/";

const cards = [
  {
    projectTitle: "Skillhub",
    subTitle: "React, PostgreSQL and NodeJS",
    content: `A web based social network capable of linking users by their
      skills and projects using machine learning and data analysis.`,
    gitLink: "https://github.com/CDH-Studio/skillhub",
    imgSide: "left",
    status: "Complete",
    tooltip: {
      placement: "top",
      text: "top"
    }
  },
  {
    projectTitle: "Recipe Repo",
    subTitle: "NodeJS, MongoDB and Express",
    content: `A dynamic website which features CRUD functions allowing
        users to sign-up, login and submit or edit their own recipes.`,
    gitLink: "https://github.com/Liannus/Recipe-Repo",
    imgSide: "right",
    status: "In Development",
    tooltip: {
      placement: "top",
      text: "top"
    }
  },
  {
    projectTitle: "Warframe Tracker",
    subTitle: "OpenCV, Electron, Redux and Jest",
    content: `A desktop application using OpenCV to read from the screen
        and Electron to display profile data.`,
    gitLink: "https://github.com/Liannus/Warframe-Tracker",
    imgSide: "left",
    status: "Planned",
    tooltip: {
      placement: "top",
      text: "top"
    }
  },
  {
    projectTitle: "Thompson Boiler Works",
    subTitle: "AWS, React, SCSS",
    content: `A React based website built for Thompson Boiler Works to showcase services and projects.`,
    webLink: "https://ThompsonBoilerWorks.ca",
    imgSide: "right",
    status: "In Development",
    tooltip: {
      placement: "top",
      text: "top"
    }
  }
];
const Projects = props => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="row">
        {cards.map(i => {
          return (
            <div key={i.projectTitle} className="col-md-6">
              <ProjectCard
                key={i.projectTitle}
                projectTitle={i.projectTitle}
                subTitle={i.subTitle}
                content={i.content}
                gitLink={i.gitLink}
                webLink={i.webLink}
                status={i.status}
                tooltip={i.tooltip}
                imgSide={i.imgSide}
              />
            </div>
          );
        })}
      </div>
      <style jsx="jsx">
        {`
          h2 {
            text-align: center;
            color: #fcfaf9;
            margin-bottom: 28px;
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
