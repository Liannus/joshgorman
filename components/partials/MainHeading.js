import React from 'react';

const centerDiv = {
  position: 'absolute',
  zIndex: '1',
  top: '50%',
  transform: 'translate(0, -50%)',
  textAlign: 'center',
  width: '100%'
};

export default class MainHeading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={centerDiv}>
        <h1>Web Developer</h1>
        <p>Josh Gorman</p>
        <style jsx>{`
          h1 {
            color: white;
            font-size: 4em;
          }
          p {
            color: white;
            font-size: 2em;
          }
        `}</style>
      </div>
    );
  }
}
