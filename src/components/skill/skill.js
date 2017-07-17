import React, {Component} from 'react';

const Skill = () => {
    return (
      <div>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technologies and Skills</h2>
            <p>My interdisciplinary background in computer science, finance, and data analytics taught me how to build innovative products that solves real problems</p>
            <p>See the graph below to learn more about my skills and the technologies I've worked with:</p>
          </div>
          <div className="row">

            <div className="skills">
              <div className="skills wrap">
                <div className="skills-centerize">
                  <h3>General:</h3>
                  <i className="devicon-ruby-plain-wordmark colored"></i>
                  <i className="devicon-python-plain-wordmark colored"></i>
                  <i className="devicon-javascript-plain colored"></i>
                  <i className="devicon-java-plain-wordmark colored"></i>
                </div>
              </div>

              <div className="skills wrap">
                <div className="skills-centerize">
                  <h3>Frameworks:</h3>
                  <i className="devicon-rails-plain-wordmark colored"></i>
                  <i className="devicon-django-line-wordmark"></i>
                  <i className="devicon-nodejs-plain-wordmark colored"></i>
                </div>
              </div>

              <div className="skills wrap">
                <div className="skills-centerize">
                  <h3>Front End:</h3>
                  <i className="devicon-html5-plain-wordmark colored"></i>
                  <i className="devicon-css3-plain-wordmark colored"></i>
                  <i className="devicon-react-original-wordmark colored"></i>
                  <i className="devicon-jquery-plain-wordmark colored"></i>
                  <i className="devicon-bootstrap-plain-wordmark colored"></i>
                </div>
              </div>

              <div className="skills wrap">
                <div className="skills-centerize">
                  <h3>Database:</h3>
                  <i className="devicon-mysql-plain-wordmark"></i>
                  <i className="devicon-postgresql-plain-wordmark colored"></i>
                </div>
              </div>

              <div className="skills wrap">
                <div className="skills-centerize">
                  <h3>Deployment:</h3>
                  <i className="devicon-github-plain-wordmark"></i>
                  <i className="devicon-heroku-original-wordmark colored"></i>
                </div>
              </div>

              <div className="skills wrap">
                <div className="skills-centerize">
                  <h3>Project Management:</h3>
                  <i className="devicon-git-plain-wordmark colored"></i>
                  <i className="devicon-trello-plain-wordmark colored"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    );
}

export default Skill;
