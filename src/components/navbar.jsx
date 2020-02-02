import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import 'hover.css';

const NavBar = () => {
  return (
    <nav style={{padding: "20px 15px 10px 15px"}} className="flex-column navbar-light">
      <Link className="" to="/">
        <img src="https://newrepublique.com/wp-content/themes/newrepublique/img/LOGO_Big_RGB.png" alt="Logo" />
      </Link>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button> */}
      <div className="menu-items" id="navbarNav">
        <ul className="navbar-nav">
        {/* <li className="nav-item">
            <NavLink className="nav-link" to="/">
              HOME
              <span className="nav-link-border" rel="HOME"></span>
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              ABOUT US
              <span className="nav-link-border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/work">
              WORK
              <span className="nav-link-border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/services">
              SERVICES
              <span className="nav-link-border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog">
              BLOG
              <span className="nav-link-border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/research">
              RESEARCH
              <span className="nav-link-border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/careers">
              CAREERS
              <span className="nav-link-border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact-us">
              CONTACT US
              <span className="nav-link-border" rel="ABOUT US"></span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
