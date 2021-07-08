// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

// class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick = (buttonName) => {
//     const { total, next, operation } = calculate(this.state, buttonName);
//     this.setState({
//       total,
//       next,
//       operation,
//     });
//   }
//
//   render() {
//     let calc;
//     const { next, total } = this.state;
//     if (next !== null) {
//       calc = next;
//     } else if (total !== null) {
//       calc = total;
//     }
//     return (
//       <div className="app">
//         <Display calc={calc} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </div>
//     );
//   }
// }
//
// export default App;

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
      <div className="app">
        <Display calc={calc} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
