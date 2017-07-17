import React from 'react'; // eslint-disable-next-line
import Title from '../title/title';
import Aboutme from '../aboutme/aboutme';
import Skill from '../skill/skill.js';
import Project from '../project/project.js';
const Home = () => {

  return (
    <div>
      <div className="home-component">
        <Title />
      </div>
      <div className="">
        <Aboutme />
        <Skill />
        <Project />
      </div>
    </div>
  );
};

export default Home;
