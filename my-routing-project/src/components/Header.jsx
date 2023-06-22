import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`navbar navbar-expand-lg navbar-dark bg-dark ${isNavOpen ? 'show' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">React Route</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={toggleNav}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={toggleNav}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/123" onClick={toggleNav}>
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
