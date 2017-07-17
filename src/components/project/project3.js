import React from 'react';
import graph1 from "../assets/trafficGraph1.png";
import graph2 from "../assets/trafficGraph2.png";
import graph3 from "../assets/trafficGraph3.png";

const Project3 = ({display}) => {
  if (display === 'show') {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="projectTitle">
              <h3>Traffic Accident GPS</h3>
            </div>
            <div className="projectContent">
              <p>Traffic Accident Spy track is my Quarter 1 project. It Built without any front-end frameworks. Traffic Accident Spy find all the traffic accident data occurred between 2003 to present in San Francisco. Using data from SF Open Data, Traffic Accident plots the traffic accidents on a Google Map based on a input of a time of the day, a day of the week, a month of the year or district in San Francisco. Traffic Accident Spy populate with pop-up on the google map with a clickable icon that show the detail of the traffic accident. A table also appended at the bottom of the page about the traffic accident with scrollable feature.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img id="fig-3" src={graph1} alt="Traffic Accident GPS" className="trafficGraph"></img>
            <figcaption>Figure 1</figcaption>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img id="fig-1" src={graph2} alt="intuneNation" className="trafficGraph"></img>
            <figcaption>Figure 2</figcaption>
          </div>
          <div className="col-md-6">
            <img id="fig-1" src={graph3} alt="intuneNation" className="trafficGraph"></img>
            <figcaption>Figure 3</figcaption>
          </div>
        </div>
      <p className="GraphExplanation">The first graph(Figure 1) is a homepage of my app, and it utilizes the animiation effect as you score down the page. Graph2 shows you a Google Map as well as selection drop down table that let you filter the traffic accidents by its time, day of the week, year and the district in San Francisco. Graph3 shows you a table that show all the traffic accidents that you selected and displays it on the table. For information, click my (<a href="https://github.com/kvinzheng/Q1-Project" target="_blank">GitHub</a>).</p>

      <p className="stackSummary">
        <span className="tech-stack">Technical Stack: </span>
        Javascript, HTML, CSS, Materialize Framework, Google Maps API</p>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default Project3;
