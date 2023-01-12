import React from 'react';
import NavBar from './NavBar';

import About from './About';
import Skills from './Skills';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="landing" id="home">
        <main className="page">
          <div></div>
          <div className="intro">
            <p className="tracking-in-expand-fwd welcome">Hi, my name is</p>
            <h1 className="name">
              <span className="first">Herby</span> <span className="last">Osbourne</span>
            </h1>
            <p className="title">I build Front-End Web Apps</p>
            <span className="subtitle">
              <p>
                i'm a Front-End developer who skilled in React and javascript, a popular
                JavaScript library for building user interfaces.
              </p>
              <p>
                I'm able to take a wireframe, which is a visual representation of a
                website or app's layout and design, turn it into a fully functional app.
              </p>
            </span>
            <button className="cta-btn">Contact ME</button>
          </div>
          <div></div>
        </main>
      </div>
      <About />
      <Skills />
    </>
  );
};

export default Home;
