import React from 'react';
import { Row, Col } from 'reactstrap';

export default class MainBackground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

  render() {
    return (
        <Row style={{ "background-color" : "red"}}>
          <Col sm="12" style={{ "height": "100vh", "width": "100vh"}}>
            <p>hello</p>
          </Col>
          <Col sm="12" style={{ "height": "100vh", "width": "100vh"}}>
            <p>hello</p>
          </Col>
        </Row>
    );
  }
}
