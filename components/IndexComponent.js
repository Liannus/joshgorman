import React from 'react';
import { Row, Col } from 'reactstrap';
import BackgroundVideo from './partials/BackgroundVideo.js'
import '../style.css'
import ForestFire from 'forestfiresim';
import MainHeading from './partials/MainHeading.js'
import Projects from './partials/Projects.js'

export default class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="dd" sm="12">
            <MainHeading />
            <BackgroundVideo />
          </Col>
          <Col sm="12">
            <Projects />
          </Col>
          <footer>
          </footer>
        </Row>
      </div>
    );
  }
}
