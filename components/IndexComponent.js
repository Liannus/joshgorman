import React from "react";
import { Row, Col } from "reactstrap";
import { Footer, MainHeading, BackgroundVideo } from "components/partials/";
import { AboutMe, Experience, Education, Projects } from "components/sections/";

export default class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row
          style={{
            backgroundColor: "#2B343A"
          }}
        >
          <Col className="dd" sm="12">
            <MainHeading />
            <BackgroundVideo />
          </Col>
          <div id="AboutMe" className="col-sm-12">
            <div className="container">
              <AboutMe />
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
        <style jsx="jsx">
          {`
            .container {
              padding: 0;
            }
            #AboutMe,
            #Education {
              background-color: #242b30;
              padding: 50px 15px;
            }
            #Footer {
              background-color: #242b30;
              padding: 50px 15px;
            }
            #Portfolio {
              padding: 50px 0;
            }
          `}
        </style>
      </div>
    );
  }
}
