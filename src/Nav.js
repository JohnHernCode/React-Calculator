import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">Math Magician</div>
    <div className="nav">
      <div className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </div>
      <div className="separator">|</div>
      <div className="nav-item">
        <Link to="/calculator" className="nav-link">Calculator</Link>
      </div>
      <div className="separator">|</div>
      <div className="nav-item">
        <Link to="/quote" className="nav-link">Quote</Link>
      </div>
    </div>
  </div>
);

export default Navbar;
