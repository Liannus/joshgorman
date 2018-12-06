import React from 'react';
import ExperienceCard from './partials/ExperienceCard.js'

export default class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.cards = [
          {
            jobName: "Canadian Food Inspection Agency",
            jobTitle: "Web Developer Student",
            content: "",
            date: "April 2018 - December 2018",
            skills: ["Javascript", "AEM", "Python", "XML", "PDF-XFA"]
          },
          {
            jobName: "Red-D-Arc",
            jobtitle: "Junior Business Analyst",
            content: "",
            date: "July 2015 - August 2015",
            skills: ["Software Quality Assurance", "Microsoft Dynamics NAV"]
          }
      ];
  }

  render() {
    return (
      <div>
        <h2>Experience</h2>
        <section id="cd-timeline" className="cd-container">
        {this.cards.map(i=> {
          return(
            <ExperienceCard key={i.jobName}
                         jobName={i.jobName}
                         jobtitle={i.jobtitle}
                         content={i.content}
                         date={i.date}
                         skills={i.skills}/>
          );
        })}
      	</section>
        <style jsx>{`
          h2 {
            text-align: center;
            padding-top: 50px;
            color: #fcfaf9;
          }
          html, body {
            background-color: #222C32;
            height: 100%;
            font-family: 'Open Sans', sans-serif;
            box-sizing: border-box;
          }

          .cd-container {
            margin: 0 auto;
            background: #2B343A;
            padding: 0 10%;
            border-radius: 2px;
          }

          .cd-container::after {
            content: '';
            display: table;
            clear: both;
          }

          /* --------------------------------

          Main components

          -------------------------------- */
          #cd-timeline {
            position: relative;
            padding: 2em 0;
            margin-bottom: 2em;
          }

          #cd-timeline::before {
            content: '';
            position: absolute;
            top: 0;
            left: 25px;
            height: 100%;
            width: 4px;
            background: linear-gradient(to top, #2B343A , #673AB7 5%, #673AB7 95%, #2B343A);
          }

          @media only screen and (min-width: 1170px) {
            #cd-timeline {
              margin-bottom: 3em;
            }

            #cd-timeline::before {
              left: 50%;
              margin-left: -2px;
            }
          }

        `}</style>
      </div>
    );
  }
}
