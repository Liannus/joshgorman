import react from 'react';

export default class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h2>Education</h2>
          <div className="card">
            <div className="card-header">
              <h3>Carleton University</h3>
              <p>2020</p>
            </div>
            <div className="card-body">
              <h4 className="card-title">Computer Science Honours: Software Engineering</h4>
            </div>
          </div>
          <style jsx>{`
            @media (min-width: 576px) {
            }
            .card {
              margin: 0px 15px
            }
            h2 {
              text-align: center;
              color: white;
            }
            h3 {
              color: white;
              font-size: 1.5em;
              font-weight: 700;
            }
            h4 {
              color: white;
              font-size: 1.5em;
              font-weight: 700;
            }
          `}</style>
        </div>
    );
  }
}
