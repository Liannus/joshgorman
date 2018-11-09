import React from 'react';

const percentSizing = {
  height: '100%',
  width: '100%',
  padding: '15px'
};

export default class MainHeading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1 style={{
          "margin": "auto",
          "position": "absolute"
        }}>Josh</h1>
      </>
    );
  }
}
