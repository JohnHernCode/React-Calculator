import React from 'react';
import styles from '../styles/Home.module.css';
import img from '../images/math.png';

const Home = () => (
  <div className={styles.home}>
    <img src={img} alt="math" />
    <h1 className={styles.head}>OH YEAH, WE LOVE MATH!</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui o!cia deserunt
      mollit anim id est laborum. IpsuLorem ipsum dolor sit amet, consectetur
      adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui o!cia deserunt mollit anim id est laborum. Ipsu
    </p>
  </div>
);

export default Home;
