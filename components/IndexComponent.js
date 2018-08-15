import React from 'react';
import { Row, Col } from 'reactstrap';
import '../style.css'

const colStyle = {
  height: '100vh',
  width: '100vh',
  border: '1px solid black'
};

export default class IndexComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

  render() {
    return (
      <div>
        <Row style={{ "background-color": "white"}}>
          <Col className="dd" sm="12">
            <p>hello</p>
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
