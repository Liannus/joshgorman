import react from 'react';
import 'jquery';

export default class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="cardContainer">
          <h2>Education</h2>
          <div className="card">
            <div className="card-body">
              <div className="flexoj">
                <h3>Carleton University</h3>
                <p>2016-2021</p>
              </div>
              <h4 className="card-title">Computer Science Honours: Software Engineering</h4>
              <p>Minor in Business</p>
              <p>Co-op</p>
            </div>
          </div>
          <style jsx>{`
            @media (min-width: 576px) {
            }
            .cardContainer {
                display: flex;
                flex-direction: column;
                align-items: center;
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
            p {
              margin: 0px;
              color: #fcfaf9;
            }
            h2 {
              text-align: center;
              color: #fcfaf9;
            }
            h3 {
              color: #fcfaf9;
              margin: 0px;
              font-weight: 700;
            }
            h4 {
              color: #fcfaf9;
              margin: 0px;
              font-weight: 700;
            }
          `}</style>
        </div>
    );
  }
}
