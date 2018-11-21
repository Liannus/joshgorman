import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';

const ProjectCard = (props) => {
  return (
    <>
      <Card className="flex-md-row mb-4 shadow-sm h-md-250">
        {props.imgSide=="left" && <CardImg className="flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="//placeimg.com/250/250/arch" style={{width: "200px", height: "250px"}} /> }
        <CardBody className="d-flex flex-column align-items-start">
          <CardTitle className="d-inline-block mb-2 text-primary">{props.imgSide}</CardTitle>
          <CardSubtitle className="mb-1 text-muted small">Card subtitle</CardSubtitle>
          <CardText className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button className="btn-outline-primary btn-sm">Button</Button>
        </CardBody>
        {props.imgSide=="right" && <CardImg className="flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="//placeimg.com/250/250/arch" style={{width: "200px", height: "250px"}} /> }
      </Card>
    </>
  );
};

export default ProjectCard;
