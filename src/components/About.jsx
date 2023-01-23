import React from 'react';
import CV from '../assets/resume.pdf';
import Loop from './Loop';

const About = () => {
  return (
    <section className="about">
      <div className="container about-container">
        <div className="about-me">
          <h2>About me</h2>
          <p>
            I’m a front-end developer who loves to bring wireframe and mockup to life with
            React and JavaScript- simple or complex. I have a passion to learn and help
            further my skills in front-end development
          </p>
          <div className="cv-btn">
            <a href={CV} download="HERBY_Osbourne_CV">
              Download
            </a>
          </div>
        </div>
        <div className="skill-container">
          <h2>Skills</h2>
          <div className="loop-container">
            <Loop />
            <Loop second />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
