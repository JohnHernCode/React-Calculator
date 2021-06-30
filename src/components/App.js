import React, { Component } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '',
    };
  }

  render() {
    const display = this.state;
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <Display result={display.result} />
          <ButtonPanel onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
