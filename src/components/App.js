import React, { Component } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = calculate(this.state, buttonName);
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    let calc;
    const { next, total } = this.state;
    if (next !== null) {
      calc = next;
    } else if (total !== null) {
      calc = total;
    }
    return (
      <div className="app">
        <Display calc={calc} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
