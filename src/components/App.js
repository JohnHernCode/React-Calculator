import React, { Component } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: '',
    };
  }

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <Display result={this.state.result} />
          <ButtonPanel onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
