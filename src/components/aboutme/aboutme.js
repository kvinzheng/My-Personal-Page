import React from 'react';
import headPicture from '../assets/LEARN.jpg';

const Aboutme = () => {

    return (
      <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="aboutme">
              <h3>About Me</h3>
            </div>
            <div className="summary">
            <p >Ever since I took my first programming class from UC Davis, I have been passionate about using technology to solve problems.Prior to attending  <a href="https://www.galvanize.com/san-francisco/web-development" target="_blank" className="linkStyle">Galvanize's web development immsersive program</a>, I have sought to combine my interest in problem solving and analystical skills in positions in data analytics and business analysis.</p>
          <br/>
            <p>My background in data analytics stems from my passion for using data to help people solve problems. Since the day I was exposed to SQL, I’ve really enjoyed the programming side in data analytics and I hope to use my engineering mindset to help companies solve problems.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="picture">
              <img src={headPicture} className="headPicture" alt="Kevin Zheng headPicture"  ></img>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
    )
}

export default Aboutme;
