import React from 'react';
import { Collapse } from 'reactstrap';

export default class MainBackground extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
