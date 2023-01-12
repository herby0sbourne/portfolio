import React from 'react';
import useScroll from './../hooks/useScroll';

const NavBar = () => {
  const { isScroll } = useScroll();
  return (
    <header className={`header ${isScroll ? 'scrolled' : ''} `}>
      <nav>
        <div className="logo">HO</div>
        <div className="navlinks">
          <ul>
            <li className="navlink">
              <a href="#home">Home</a>
            </li>
            <li className="navlink">
              <a href="#">About</a>
            </li>
            <li className="navlink">
              <a href="#projects">Projects</a>
            </li>
            <li className="navlink">
              <a href="#">Contact</a>
            </li>
            <li className="navlink">
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
        <div className="hamburger">H</div>
      </nav>
    </header>
  );
};

export default NavBar;
