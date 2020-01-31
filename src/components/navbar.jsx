import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav flex-column navbar-light">
      <Link className="" to="/">
        <img src="https://newrepublique.com/wp-content/themes/newrepublique/img/LOGO_Big_RGB.png" />
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
          <li className="">
            <NavLink className="nav-link" to="/about-us">
              ABOUT US
              <span className="item_border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/work">
              WORK
              <span className="item_border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/services">
              SERVICES
              <span className="item_border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog">
              BLOG
              <span className="item_border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/research">
              RESEARCH
              <span className="item_border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/careers">
              CAREERS
              <span className="item_border" rel="ABOUT US"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact-us">
              CONTACT US
              <span className="item_border" rel="ABOUT US"></span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
