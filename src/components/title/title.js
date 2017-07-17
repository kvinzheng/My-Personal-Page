import React, {Component} from 'react';
// import VictorySunburst from 'victory-sunburst'

class Title extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">LEFT</div>
          <div className="col-md-8 home-header">
            <h1>Kevin Zheng</h1>
            <p>Software Engineer</p>
          </div>
          <div className="col-md-2">RIGHT</div>
        </div>
      </div>
    )
  }
}

export default Title;
