import React from 'react';
import '../styles/Navbar.css';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <nav className="navbar__section navbar__section--right">
        <div className="navbar__item">
          <a className="navbar__link" href="https://www.alispit.tel/#/about">Home</a>
        </div>
        <div className="navbar__item">
          <a className="navbar__link" href="https://www.alispit.tel/#/about">About</a>
        </div>
        <div className="navbar__item">
          <a className="navbar__link" href='https://www.alispit.tel/#/about'>Projects</a>
        </div>
        <div className="navbar__item">
          <a className="navbar__link" href='https://www.alispit.tel/#/about'>Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;