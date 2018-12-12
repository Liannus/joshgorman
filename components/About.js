import react from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h2>This is me</h2>
          <p>Third year computer science student at Carleton University, obsessive climber and self-taught musician. With a focus on both front and back-end web development I pursue my interests building a variety of applications from Electron based desktop applications to simplistic static sites with Jekyll. </p>
            <style jsx> {`
            h2 {
              text-align: center;
              color: #fcfaf9;
            }
            p {
              color: #fcfaf9;
              text-align: center;
            }
          `}</style>
        </div>
    );
  }
}
