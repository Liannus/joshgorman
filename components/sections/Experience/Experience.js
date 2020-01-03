import React from "react";
import { ExperienceCard } from "components/partials/";

export default class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.cards = [
      {
        jobName: "Innovation Science and Economic Development Canada",
        jobTitle: "Full-Stack Developer",
        content:
          `Followed Agile methodologies, taking part in sprint planning, daily standups and retrospectives.\n` +
          `Developed Mock-ups in Figma and agile artifacts to properly estimate the development processes goals.\n` +
          `Developed front-end views, backend connections and database integrations to control application flow.\n` +
          `Collaborated with group members to maintain quality code with, linting, testing and code reviews.`,
        date: "May 2019 - August 2019",
        skills: ["Figma", "PostgreSQL", "NodeJS", "SCSS", "React"]
      },
      {
        jobName: "Canadian Food Inspection Agency",
        jobTitle: "Web Developer Student",
        content:
          `Developed SOAP web services using Java and Apache Tomcat. Received and manipulated data using JavaScript in PDF forms.\n` +
          `Built scripts using Python and various libraries to eliminate menial processes and increase efficiency while developing forms.`,
        date: "April 2018 - December 2018",
        skills: ["Javascript", "AEM", "Python", "XML", "PDF-XFA"]
      },
      {
        jobName: "Red-D-Arc Welderentals",
        jobTitle: "Junior Business Analyst",
        content:
          `Provided QA testing for easing the deplyment of localized web services\n` +
          `Tested and validated ERP software Microsoft Dynamics Nav.\n` +
          `Collaborated with team mates to reduce re-printing of e-documents`,
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
          {this.cards.map(i => {
            return (
              <ExperienceCard
                key={i.jobName}
                jobName={i.jobName}
                jobTitle={i.jobTitle}
                content={i.content}
                date={i.date}
                skills={i.skills}
              />
            );
          })}
        </section>
        <style jsx="jsx">
          {`
            h2 {
              text-align: center;
              padding-top: 50px;
              color: #fcfaf9;
            }
            body,
            html {
              background-color: #222c32;
              height: 100%;
              font-family: "Open Sans", sans-serif;
              box-sizing: border-box;
            }

            .cd-container {
              margin: 0 auto;
              background: #2b343a;
              padding: 0 10%;
              border-radius: 2px;
            }

            .cd-container::after {
              content: "";
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
              content: "";
              position: absolute;
              top: 0;
              left: 25px;
              height: 100%;
              width: 4px;
              background: linear-gradient(
                to top,
                #2b343a,
                #673ab7 5%,
                #673ab7 95%,
                #2b343a
              );
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
          `}
        </style>
      </div>
    );
  }
}
