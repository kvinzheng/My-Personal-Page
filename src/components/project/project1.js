import React from 'react';
import graph1 from "../assets/graph1.png";
import graph2 from "../assets/graph2.png";
import graph3 from "../assets/graph3.png";
import graph4 from "../assets/graph4.png";

const Project1 = ({display}) => {
  if(display === 'show'){
    return (
      <div>
      <div className="row">
        <div className="col-md-6">
          <div className="projectTitle">
            <h3>IntuneNation</h3>
          </div>
          <div className="projectContent">
            <p>Recently, I’ve worked as part of a team of three on InTuneNation, an app that helps users improve their singing voices. My team and I built the app using React, Redux, Express, and PostgreSQL. As I worked on the front end, I was responsible for converting data into visualization on the page and determining how I could provide a comfortable user experience. My role on the team for the front end included building the user profile component, and using C3 charting libraries to display data for users’ past performance on vocal exercise. On the back end, my role included building routes and authentications middleware, as well as the Google OAuth login feature.</p>
          </div>
        </div>
        <div className="col-md-6">
          <img id="fig-1" src={graph2} alt="intuneNation" className="projectExample"></img>
          <figcaption>Figure 2</figcaption>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img id="fig-1" src={graph1} alt="intuneNation" className="projectExampleDown"></img>
          <figcaption>Figure 1</figcaption>
        </div>
        <div className="col-md-4">
          <img id="fig-1" src={graph3} alt="intuneNation" className="projectExampleDown"></img>
          <figcaption>Figure 3</figcaption>
        </div>
        <div className="col-md-4">
          <img id="fig-1" src={graph4} alt="intuneNation" className="projectExampleDown"></img>
          <figcaption>Figure 4</figcaption>
        </div>
      </div>

      <p className="GraphExplanation">The first graph (Figure 2) shows you a table and a graph. Each row of the table represent one exercise. By clicking on a row, user is able to see its score on the specific performance. I implemented C3 charting library to display data for users' past performance on vocal exercise by showing line graph and bar graph. Figure 1 shows the css design for the login feature and it includes the Google in log in feature. I used OAuth technolog to allow users to sign in through Google and authenticate users whenever user sign into my app. For more information, click my (<a href="https://github.com/kvinzheng/InTuneNation" target="_blank">GitHub</a>).</p>

      <p className="stackSummary">
        <span className="tech-stack">Technical Stack:</span>
        React.js, Redux.js, HTML5, Node.js, Express.js, Knex.js, Axios, React-Router-DOM, Bootstrap, Redux-Thunk/Redux-Promise-Middleware, Jest for testing, Google OAuth technolog, Authentication middleware, and C3 charting library.</p>
      </div>
    )
  } else {
    return (<div></div>)
  }
};

export default Project1;
