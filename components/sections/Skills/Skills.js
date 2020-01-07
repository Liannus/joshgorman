import React from "react";

const Skills = props => {
  return (
    <>
      <div className="skill-section">
        <i className="icon devicon-amazonwebservices-original"></i>
        <i className="icon devicon-react-original"></i>
        <i className="icon devicon-nodejs-plain"></i>
        <i className="icon devicon-docker-plain"></i>
        <i className="icon devicon-git-plain"></i>
        <i className="icon devicon-javascript-plain"></i>
        <i className="icon devicon-linux-plain"></i>
        <i className="icon devicon-postgresql-plain"></i>
        <style jsx="jsx">
          {`
            .icon {
              margin: 5px 5px;
            }
            .skill-section {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
              padding: 15px;
              font-size: 35px;
              color: #bd6f2b;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Skills;
