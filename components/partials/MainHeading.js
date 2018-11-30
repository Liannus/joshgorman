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
        <h2>Josh Gorman</h2>
        <style jsx>{`
          @media (min-width: 576px) {
            h1 {
              font-size: 4em !important;
            }
            h2 {
              font-size: 2em !important;
            }
          }
          h1 {
            color: white;
            font-size: 3em;
            font-weight: 700;
          }
          h2 {
            color: white;
            font-size: 1.5em;
          }
        `}</style>
      </div>
    );
  }
}
