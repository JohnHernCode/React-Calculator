import React from 'react';
import styles from '../styles/Quote.module.css';
import img from '../images/sign.jpg';

const Quote = () => (
  <div className={styles.quote}>
    <h1 className={styles.head}>Quote of the day</h1>
    <p>
      Mathematics is not about numbers, equations, computations, or algorithms:
      it is about understanding.
    </p>
    <p>
      –William Paul ThurstonHome
    </p>
    <img src={img} alt="sign" />
  </div>
);

export default Quote;
