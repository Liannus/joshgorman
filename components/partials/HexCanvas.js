import React from 'react';

const percentSizing = {
  height: '100%',
  width: '100%',
  padding: '15px'
};

export default class HexCanvas extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    //put the code to load in 48*36px image into the canvas -> hold canvas in state?
  }

  render() {
    return (
      <div style={percentSizing}>
        <canvas style={percentSizing}></canvas>
        <style jsx>{`
          canvas {
            background-color: white;
          }
        `}</style>
      </div>
    );
  }
}
