import React from 'react';

import react from '../assets/react.png';
import nodeJs from '../assets/nodejs.png';
import mern from '../assets/mern.png';

const About = () => {
  return (
    <section className="about">
      <div className="container about-container">
        <h2>About me</h2>
        <p>
          I’m a front-end developer who loves bring wireframe and mockup to life with
          react and JavaScript, simple or complex with a passion to learn and help further
          my skills in front-end development
        </p>
        <div className="about-cards">
          {/* REACT */}
          <div className="card">
            <div className="card-img">
              <img src={react} alt="node js" />
            </div>
            <div className="card-info">
              <p className="text-title">React</p>
              <div className="text-body">
                <div>
                  <ul>
                    <li>Redux</li>
                    <li>Redux-thunk</li>
                    <li>Stripe API</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Context API</li>
                    <li>React Router</li>
                    <li>Styled-components</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* NODE>.JS */}
          <div className="card">
            <div className="card-img">
              <img src={nodeJs} alt="node js" />
            </div>
            <div className="card-info">
              <p className="text-title">node js</p>
              <div className="text-body">
                <div>
                  <ul>
                    <li>Express</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Sequelize/SQL</li>
                    <li>GraphQl</li>
                    <li>Auth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={mern} alt="node js" />
            </div>
            <div className="card-info">
              <p className="text-title">MERN</p>
              <div className="text-body">
                <div>
                  <ul>
                    <li>Redux</li>
                    <li>Redux-thunk</li>
                    <li>Stripe API</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Context API</li>
                    <li>React Router</li>
                    <li>Styled-components</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
