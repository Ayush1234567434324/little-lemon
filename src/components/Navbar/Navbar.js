import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <span className="icon">
            <CodeIcon />
          </span>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/menu"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/reservations"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Reservations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/order-online"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Order Online
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/login"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/donate"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Donate
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
           
              <HamburgetMenuClose />
            </span>
          ) : (
            <span className="icon">
              <HamburgetMenuOpen />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
