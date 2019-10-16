import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ textAlign: "center" }}>Patrick Caserta</h2>
            <h4 style={{ color: "grey", textAlign: "center" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <p>
              Web/Software Developer and versatile IT professional with superior
              problem-solving skills, coupled with creativity utilizing
              technical skills. Graduated Longwood University in 2018 with a B.S
              in Business and a focus in Computer Information Systems and
              Technology. Currently Data Analyst for Bank of America, completing
              numerous projects gaining technical knowledge of various systems
              and softwares, developing critical decision making skills, and
              utilizing team coordination. Currently enrolled in full-stack
              coding bootcamp at the University of Richmond to further my
              knowledge in web development. Well-versed in JavaScript, HTML,CSS,
              and jQuery. Always furthering my education, to stay on top of
              current technologies, and keep up with current trends.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <h5>Location</h5>
            <p>Richmond, Virginia</p>
            <h5>Phone</h5>
            <p>804-997-5633</p>
            <h5>Email</h5>
            <p>patrick.caserta@live.longwood.edu</p>
            <h5>GitHub</h5>
            <p>https://github.com/pcaserta</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={"January 2019"}
              endYear={"July 2019"}
              schoolName="University of Richmond Coding Boot Camp"
              schoolDescription="Learned the process of serving a webpage and how the browser renders code. Built front-end websites from scratch, as well as with ready-made frameworks. Createt full-stack, single-page web applications with RESTful routes and AJAX methods. Generated dynamic content and implemented user-authentication schemes by incorporating different types of databases — MySQL, MongoDB and Firebase. Developed apps while applying the accepted and standard basics of social coding — source control, issue tracking, functional feedback, etc. Ran through the entire development cycle of complex projects in both independent and collaborative settings."
            />

            <Education
              startYear={"August 2013"}
              endYear={"May 2017"}
              schoolName="Longwood University"
              schoolDescription="Graduated from Longwood University with a BS in Business and Economics, and a focus in Information Systems and Cyber Security. Here I designed, engineered, and implemented secure networks and information systems. I also learned and conducted research with information systems and cyber security experts. "
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={"September 2018"}
              endYear={"March 2019"}
              jobName={"Data Analyst for Bank of America"}
              jobDescription="Provided end to end data analysis on business strategy and function. Includes trending analysis, views on data treatments and success analytics for determining future strategy focused on improving operational performance. Gained insight on business strategies using data mining, data aggregation, business planning, inventory analysis, program analysis, E2E platform and performance/milestone analytics. Tracked compliance to implement standards for the prioritized functions. Monitored and tested controls and data quality measures for validity."
            />

            <Experience
              startYear={"June 2017"}
              endYear={"August 2017"}
              jobName={"IT Intern for Rivada Networks"}
              jobDescription="Worked with IT and engineering teams in to prepare technology proposals for state governments. Worked closely with IT and Engineering teams who familiarized me with details of bandwidth management technologies, the intricacies of the bandwidth market, and the communication tools necessary to communicate and sell complex technology solutions to nontechnical audience. Constructed compliance matrixes from state proposals for the engineering team using Microsoft Excel."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills
              style={{ marginRight: "0px" }}
              skill="JavaScript"
              progress={75}
            />
            <Skills skill="HTML/CSS" progress={75} />
            <Skills skill="Node.js" progress={60} />
            <Skills skill="React" progress={39} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
