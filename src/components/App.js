// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import styles from '../styles/App.module.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [calc, setCalc] = useState(null);

  const handleClick = (buttonName) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  useEffect(() => {
    if (operation === null) {
      setCalc(<Display calc="0" />);
    }
    if (next !== null) {
      setCalc(next);
    } else if (total !== null) {
      setCalc(total);
    }
  }, [total, next]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.app}>
          <Display calc={calc} />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};

export default App;
