import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import img from '../images/fdm.jpg';
import styles from '../styles/App.module.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import Navbar from './Nav';
import Home from './Home';
import Quote from './Quote';

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
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/calculator"
            render={() => (
              <div className={styles.container}>
                <div className={styles.row}>
                  <div className={styles.column}>
                    <img src={img} alt="meme" className={styles.img} />
                  </div>
                  <div className={styles.column}>
                    <Display calc={calc} />
                    <ButtonPanel clickHandler={handleClick} />
                  </div>
                </div>
              </div>
            )}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/quote" component={Quote} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
