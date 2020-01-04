import React from "react";
import { Row, Col } from "reactstrap";
import { Footer, MainHeading, BackgroundVideo } from "components/partials/";
import {
  AboutMe,
  Experience,
  Education,
  Projects,
  Skills
} from "components/sections/";

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
          <div id="Skills" className="col-sm-12">
            <div className="container">
              <Skills />
            </div>
          </div>

          <div id="AboutMe" className="col-sm-12">
            <div className="container">
              <AboutMe />
            </div>
            <div className="about-background" />
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
            <div className="education-background" />
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
            <div className="footer-background" />
          </footer>
        </Row>
        <style jsx="jsx">
          {`
            #AboutMe,
            #Education {
              background-color: #242b30;
              padding: 50px 15px;
            }

            .about-background,
            .education-background,
            .footer-background {
              content: "";
              opacity: 0.2;
              top: 0;
              left: 0;
              position: absolute;
              width: 100%;
              height: 100%;
              z-index: 0;
            }

            .about-background {
              background: center url("static/section-background.jpg");
            }
            .education-background {
              background: bottom url("static/section-background2.jpg");
            }
            .footer-background {
              background: top url("static/section-background3.jpg");
            }

            .container {
              padding: 0;
              position: relative;
              z-index: 2;
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
