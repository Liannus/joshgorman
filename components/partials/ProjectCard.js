import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';

const ProjectCard = (props) => {

  return (
    <div>
      <div className={props.imgSide + " card flex-md-row mb-4 shadow-sm h-md-250"}>
        {props.imgSide=="left" && <img className="card-img flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="//placeimg.com/250/250/arch" style={{width: "200px", height: "250px"}} /> }
        <div className={props.imgSide + " card-body d-flex flex-column align-items-" + (props.imgSide=="left" ? "start" : "end")}>
          <h3 className={"card-title d-inline-block mb-2 text-primary"}>{props.projectTitle}</h3>
          <h4 className={"card-subtitle mb-1 text-muted small"}>{props.subTitle}</h4>
          <p className={"card-text mb-auto"}>{props.content}</p>
          <Button className="btn-outline-primary btn-sm">Project Link</Button>
        </div>
        {props.imgSide=="right" && <img className="card-img flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="//placeimg.com/250/250/arch" style={{width: "200px", height: "250px"}} /> }
      </div>
      <style jsx>{`
        .right {
          justify-content: flex-start !important;
        }
        .card {
          background-color: #333C42;
        }
        p {
          color: #fcfaf9;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
