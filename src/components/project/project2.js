import React from 'react';
import graph1 from "../assets/travelGraph1.png";
import graph2 from "../assets/travelGraph2.png";
import graph3 from "../assets/travelGraph3.png";
import graph4 from "../assets/travelGraph4.png";


const Project2 = ({display}) => {
  if(display === 'show'){
    return (
      <div>
      <div className="row">
        <div className="col-md-6">
          <div className="projectTitle">
            <h3>Travel Package Manager</h3>
          </div>
          <div className="projectContent">
            <p>Travel Package Manager is an API built with Swagger framework which provide an very detail documentation of the routes but also does validations when taking inputs. Vacation Package Manager uses Node.js Express framework and Knex.js to connect with a PostgreSQL database to store users, flights, hotel, and restaurants data. user authentication and authorization is transmitted and decoded using JWT. Travel Package Manager also use Mocha testing framework, Chai Library and Super Test NPM package for testing purposes.</p>
          </div>
        </div>
        <div className="col-md-6">
          <img id="fig-2" src={graph1} alt="Travel Manager" className="yamal"></img>
          <figcaption>Figure 1</figcaption>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img id="fig-1" src={graph2} alt="Travel Manager" className="projectExampleDown"></img>
          <figcaption>Figure 2</figcaption>
        </div>
        <div className="col-md-4">
          <img id="fig-1" src={graph3} alt="Travel Manager" className="projectExampleDown"></img>
          <figcaption>Figure 3</figcaption>
        </div>
        <div className="col-md-4">
          <img id="fig-1" src={graph4} alt="Travel Manager" className="projectExampleDown"></img>
          <figcaption>Figure 4</figcaption>
        </div>
      </div>

      <p className="GraphExplanation">The first graph(Figure 1) is a swagger.yaml file, which conduct my back end. The swagger.yaml file define the input type of the query such as integer or string when try to use the speicific route. It serves the purpose of backed validations, so it reduce the risk of producing unexpected return value. Finally, the swagger.yaml file also define the response types, such as an array or an object. Figure 4 show a snapshot of the app by using the swagger UI interface. For information, click my (<a href="https://github.com/kvinzheng/Travel-Package-Manager" target="_blank">GitHub</a>).</p>

      <p className="stackSummary">
        <span className="tech-stack">Technical Stack:</span>
        Javascript, Swagger, PostgreSQL, Node.js, Express.js, Knex.js, Authentication middleware, Mocha, and Chai.</p>
      </div>
    )
  } else {
    return (<div></div>)
  }
};

export default Project2;
