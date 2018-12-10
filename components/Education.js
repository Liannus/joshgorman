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
            <div className="card-body">
              <div className="flexoj">
                <h3>Carleton University</h3>
                <p>2020</p>
              </div>
              <h4 className="card-title">Computer Science Honours: Software Engineering</h4>
            </div>
          </div>
          <style jsx>{`
            @media (min-width: 576px) {
            }
            .card {
              margin: 0px 15px;
              background-color: #2B343A;
              max-width: 650px
            }
            .flexoj {
                display: flex;
                justify-content: space-between;
            }
            h2 {
              text-align: center;
              margin: 0px;
              color: white;
            }
            h3 {
              color: white;
              margin: 0px;
              font-weight: 700;
            }
            h4 {
              color: white;
              font-weight: 700;
            }
          `}</style>
        </div>
    );
  }
}
