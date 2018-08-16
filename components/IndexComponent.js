import React from 'react';
import { Row, Col } from 'reactstrap';
import HexCanvas from './partials/HexCanvas.js'
import '../style.css'

export default class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row style={{ "background-color": "white"}}>
          <Col className="dd" sm="12">
            <HexCanvas />
          </Col>
          <Col className="dd" sm="12">
            <p>hello</p>
          </Col>
        </Row>
        <style jsx>{`
          * {
          }
        `}</style>
      </div>
    );
  }
}
