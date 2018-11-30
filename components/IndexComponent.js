import React from 'react';
import { Row, Col } from 'reactstrap';
import BackgroundVideo from './partials/BackgroundVideo.js'
import ForestFire from 'forestfiresim';
import MainHeading from './partials/MainHeading.js'
import Projects from './Projects.js'
import About from './About.js'
import Experience from './Experience.js'
import Footer from './Footer.js'
import Education from './Education.js'

export default class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row style={{backgroundColor: "#2B343A"}}>
          <Col className="dd" sm="12">
            <MainHeading />
            <BackgroundVideo />
          </Col>
          <div id="AboutMe" className="col-sm-12">
            <div className="container">
              <About />
            </div>
          </div>
          <div id="Portfolio" className="col-sm-12">
            <div className="container">
              <Projects />
            </div>
          </div>
          <div id="Education" className="col-sm-12">
            <div className="container">
              <Education />
            </div>
          </div>
          <div id="Experience" className="col-sm-12">
            <div className="container">
              <Experience />
            </div>
          </div>
          <footer id="Footer" className="col-sm-12">
            <div className="container">
              <Footer />
            </div>
          </footer>
        </Row>
        <style jsx>{`
          .container {
            padding: 0px;
          }
          #AboutMe, #Education{
              background-color: #242B30;
              padding: 50px 15px;
          }
          #Footer {
              background-color: #242B30;
              padding: 50px 15px;
          }
          #Portfolio {
              padding: 50px 0px;
          }
        `}</style>
      </div>
    );
  }
}
