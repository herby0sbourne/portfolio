import React from 'react';

const NavBar = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">HO</div>
        <div className="navlinks">
          <ul>
            <li className="navlink">
              <a href="#">Home</a>
            </li>
            <li className="navlink">
              <a href="#">About</a>
            </li>
            <li className="navlink">
              <a href="#">Projects</a>
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
