import React, { useState } from 'react';
import useScroll from './../hooks/useScroll';

const NavBar = () => {
  const { isScroll } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`header ${isScroll ? 'scrolled' : ''} `}>
      <nav className={`${isOpen ? 'open' : ''}`}>
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
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburgerIcon ${isOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
