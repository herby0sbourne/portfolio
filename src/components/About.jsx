import React from 'react';
import SkillIcon from './SkillIcon';
import LoopScrolling from '../features/loopScrolling/LoopScrolling';

import CV from '../assets/resume.pdf';
import images from '../constants/images';

const About = () => {
  return (
    <section className="about">
      <div className="top-loop">
        <LoopScrolling />
      </div>
      <div className="container about-container">
        <div className="about-me">
          <h2>About Me</h2>
          <div className="description">
            <div className="my-image">
              <img src={images.me} alt="herby osbourne" />
            </div>
            <div className="details">
              <h4>Hi, i'm Herby Osbourne</h4>
              <p>
                a frontend developer who loves to bring wireframe and mockup to life with
                React and JavaScript simple or complex. I have a passion to learn and help
                further my skills in front-end development
              </p>
              <div className="cv-btn">
                <a href={CV} download="HERBY_Osbourne_CV">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-container">
          <h2>Skills</h2>
          <div className="skill-tree">
            <SkillIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
