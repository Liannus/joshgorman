import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <ul id="links">
        <li>
          <a href="#AboutMe">ABOUT</a>
        </li>
        <li>
          <a href="#Portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#Education">EDUCATION</a>
        </li>
        <li>
          <a href="#Experience">EXPERIENCE</a>
        </li>
      </ul>
      <p>@Copyright Josh Gorman - 2018</p>
      <ul>
        <a className="fab fa-github" href="https://github.com/Liannus"></a>
        <a className="fab fa-linkedin-in" href="https://github.com/Liannus"></a>
      </ul>
      <style jsx="jsx">
        {
          ` @media (max-width: 576px) {
            #links {
              flex-direction: column;
              text-align: center;
            }
          }
          ul {
            display: flex;
            justify-content: center;
            list-style: none;
            margin: 0;
            padding: 0;
          }
          li {
            padding: 15px;
            font-weight: 700;
          }
          .fab {
            color: #ffffff4d;
            text-align: center;
            padding: 10px;
            font-size: 30px;
          }
          a:hover {
            color: #bcbcbc;
          }
          a {
            text-align: center;
            color: #fcfaf9;
            list-style: none;
            text-decoration: none;
          }
          p {
            color: #ffffff4d;
            font-size: 1rem;
            text-align: center;
          }
          `;
        }</style>
    </div>);
  }
}
