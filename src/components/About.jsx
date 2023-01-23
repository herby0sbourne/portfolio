import React from 'react';
import CV from '../assets/resume.pdf';
import allIcons from 'simple-icons';

// import react from '../assets/react.png';
// import nodeJs from '../assets/nodejs.png';
// import mern from '../assets/mern.png';

const About = () => {
  const iconSlugs = [
    'typescript',
    'javascript',
    'dart',
    'java',
    'react',
    'flutter',
    'android',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
    'prisma',
    'amazonaws',
    'postgresql',
    'firebase',
    'nginx',
    'vercel',
    'testinglibrary',
    'jest',
    'cypress',
    'docker',
    'git',
    'jira',
    'github',
    'gitlab',
    'visualstudiocode',
    'androidstudio',
    'sonarqube',
    'figma',
  ];
  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug),
  }));

  console.log(iconTags);

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
            <div className="loop">
              <div className="loop-item">1</div>
              <div className="loop-item">2</div>
              <div className="loop-item">3</div>
              <div className="loop-item">4</div>
              <div className="loop-item">5</div>
              <div className="loop-item">6</div>
              <div className="loop-item">7</div>
              <div className="loop-item">8</div>
              <div className="loop-item">9</div>
              <div className="loop-item">10</div>
            </div>
            <div className="loop loop2">
              <div className="loop-item">1</div>
              <div className="loop-item">2</div>
              <div className="loop-item">3</div>
              <div className="loop-item">4</div>
              <div className="loop-item">5</div>
              <div className="loop-item">6</div>
              <div className="loop-item">7</div>
              <div className="loop-item">8</div>
              <div className="loop-item">9</div>
              <div className="loop-item">10</div>
            </div>
          </div>
        </div>
      </div>
      {iconTags.map(({ simpleIcon }) => {
        return <> {simpleIcon.svg}</>;
      })}
    </section>
  );
};

export default About;
