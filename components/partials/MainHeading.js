import React from 'react';

const centerDiv = {
  position: 'absolute',
  "zIndex": '1',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

export default class MainHeading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={centerDiv}>
        <h1>Web Developer</h1>
        <h2>Josh Gorman</h2>
        <style jsx>{`
          h1 {
            color: white;
            font-size: 4em;
          }
          h2 {
            color: white;
            font-size: 2em;
          }
        `}</style>
      </div>
    );
  }
}
