import React, {Component} from 'react';
import Project1 from './project1';
import Project2 from './project2';
import Project3 from './project3';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display1: 'show',
      display2: 'none',
      display3: 'none'
    };
    this.toggleDisplay1 = this.toggleDisplay1.bind(this);
    this.toggleDisplay2 = this.toggleDisplay2.bind(this);
    this.toggleDisplay3 = this.toggleDisplay3.bind(this);
  }
  // componentDidMount(){
  //   this.state = { display1: 'none' , display2: 'none', display: 'none'};
  // }
  toggleDisplay1() {
    this.setState({display1: 'show', display2: 'none', display3: 'none'})
  }
  toggleDisplay2() {
    this.setState({display1: 'none', display2: 'show', display3: 'none'})
  }
  toggleDisplay3() {
    this.setState({display1: 'none', display2: 'none', display3: 'show'})
  }

  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="project-header">
            <h2 className="project-title">Project</h2>
            <p>Check out my projects by selecting the one you are interested:</p>
            <div>
              <button className="btn btn-primary butDis" onClick={this.toggleDisplay1}>InTuneNation</button>
              <button className="btn btn-success butDis" onClick={this.toggleDisplay2}>Travel App</button>
              <button className="btn btn-info butDis" onClick={this.toggleDisplay3}>Traffic Accident GPS</button>
            </div>
          </div>
          <Project1 display={this.state.display1}/>
          <Project2 display={this.state.display2}/>
          <Project3 display={this.state.display3}/>
        </div>
        <div className="bot">
          <div className="contact-area">
            <h2>CONTACT <span>KEVIN ZHENG</span></h2>
            <p className="email">kvinzheng@gmail.com</p>
            <div className="row">
              <a href="https://github.com/kvinzheng" target="_blank" className="icon">
                <i id="github" className="fa fa-github fa-3x"></i>
              </a>
              <a href="https://www.linkedin.com/in/kevin-zheng-ucd" target="_blank" className="icon">
                <i id="linkedin" className="fa fa-linkedin fa-3x" ></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    )
  };
};

export default Project;
