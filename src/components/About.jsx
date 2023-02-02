import React from 'react';
import SkillIcon from './SkillIcon';
import LoopScrolling from '../features/loopScrolling/LoopScrolling';

import CV from '../assets/resume.pdf';

const About = () => {
  return (
    <section className="about">
      <div className="top-loop">
        <LoopScrolling />
      </div>
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
          {/* <LoopScrolling /> */}
          <div className="skill-tree">
            <SkillIcon />
            {/* <div className="skill-item">
              <img src={images.figma} alt="fima" />
              <p>Figma</p>
            </div>
            <div className="skill-item">
              <img src={images.graphql} alt="name " />
              <p>GraphQl</p>
            </div>
            <div className="skill-item">
              <img src={images.git} alt="name " />
              <p>Git</p>
            </div>
            <div className="skill-item">
              <img src={images.html} alt="name " />
              <p>Html5</p>
            </div>
            <div className="skill-item">
              <img src={images.css} alt="name " />
              <p>Css3</p>
            </div>
            <div className="skill-item">
              <img src={images.graphql} alt="name " />
              <p>graphQl</p>
            </div> */}
            {/* second */}
            {/* <div className="skill-item">
              <img src={images.figma} alt="fima" />
              <p>Figma</p>
            </div>
            <div className="skill-item">
              <img src={images.graphql} alt="name " />
              <p>GraphQl</p>
            </div>
            <div className="skill-item">
              <img src={images.git} alt="name " />
              <p>Git</p>
            </div>
            <div className="skill-item">
              <img src={images.html} alt="name " />
              <p>Html5</p>
            </div>
            <div className="skill-item">
              <img src={images.css} alt="name " />
              <p>Css3</p>
            </div>
            <div className="skill-item">
              <img src={images.graphql} alt="name " />
              <p>graphQl</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
