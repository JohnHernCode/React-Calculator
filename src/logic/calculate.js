import operate from './operate';

const calculate = (() => {
  const calculateOption = (calculatorObject, buttonName) => {
    let { total, next, operation } = calculatorObject;
    const arrOperators = ['-', '+', '%', '÷', 'X'];

    if (arrOperators.includes(buttonName)) {
      if (total !== '') {
        next = total;
        total = buttonName;
        operation = buttonName;
      }
    } else if (buttonName === '=') {
      if (operation === '%') {
        total = '100';
      }
      total = operate(total, next, operation);
    } else if (buttonName === 'AC') {
      total = '';
    } else if (buttonName === '.') {
      if (total.indexOf('.') === -1) {
        total += buttonName;
      }
    } else if (buttonName === '+/-') {
      if (total.indexOf('-') === -1) {
        total = `-${total}`;
      } else {
        total = total.slice(1);
      }
    } else if (operation !== null) {
      const removeOperator = total.replace(operation, '');
      total = removeOperator + buttonName;
    } else {
      total += buttonName;
    }

    return { total, next, operation };
  };

  return { calculateOption };
})();

export default calculate;
