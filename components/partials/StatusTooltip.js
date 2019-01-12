import React from 'react';
import { Button, Tooltip } from 'reactstrap';

const circleStyle = {
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  marginTop: 'auto',
  marginBottom: 'auto',
  border: '0px'
}

export default class StatusTooltip extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <span>
        <button className={this.props.status}  title={this.props.status} style={circleStyle} id={'Tooltip-' + this.props.id}>
        </button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          {this.props.status}
        </Tooltip>
        <style jsx> {`
          .Development {
            background: #ffc107;
          }
          .Planned {
            background: #dc3545;
          }
          .Complete {
            background #28a745;
          }
          `}
        </style>
      </span>
    );
  }
}
