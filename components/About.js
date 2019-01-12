import react from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
<<<<<<< HEAD
    return (<div>
      <h2>This is me.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices euismod erat placerat fermentum. Pellentesque quis velit varius, dignissim risus vitae, rhoncus lacus. Vestibulum condimentum aliquet tincidunt. Nullam dolor ligula, lacinia sed aliquet at, molestie ut erat. Nam pharetra malesuada eleifend. Aenean lobortis dui varius tortor porttitor semper. Donec congue eros dui, rutrum consectetur nulla eleifend a.</p>
      <style jsx="jsx">
        {
          ` h2 {
            text-align: center;
            color: #fcfaf9;
          }
          p {
            color: #fcfaf9;
            text-align: center;
          }
           `;
        }</style>
    </div>);
=======
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
>>>>>>> dee4366c311b95db3b8073bdbe6c6368897f859a
  }
}
