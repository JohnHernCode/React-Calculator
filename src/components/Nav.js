import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';

const Navbar = () => (
  <div className={styles.nav}>
    <li className={styles.logo}>Math Magician</li>
    <ul className={styles.menu}>
      <li><Link to="/" className={styles.item}>Home</Link></li>
      <li><Link to="/calculator" className={styles.item}>Calculator</Link></li>
      <li className={styles.item}><Link to="/quote" className="nav-link">Quote</Link></li>
    </ul>
  </div>
);

export default Navbar;
