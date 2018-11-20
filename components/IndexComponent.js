import React from 'react';
import { Row, Col } from 'reactstrap';
import BackgroundVideo from './partials/BackgroundVideo.js'
import ForestFire from 'forestfiresim';
import MainHeading from './partials/MainHeading.js'
import Projects from './Projects.js'
import About from './About.js'
import Experience from './Experience.js'
import Footer from './Footer.js'

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
            <About />
          </Col>
          <Col sm="12">
            <Projects />
          </Col>
          <Col sm="12">
            <Experience />
          </Col>
          <footer>
            <Footer />
          </footer>
        </Row>
      </div>
    );
  }
}
