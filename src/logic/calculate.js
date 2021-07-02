import operate from './operate';

const calculate = (props, name) => {
  let { total, next, operation } = props;
  const operands = ['+', 'X', '-', '÷'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (name === 'AC') {
    [total, next, operation] = [null, null, null];
  }
  if (name === '+/-') {
    if (total) (total *= -1);
    if (next) (next *= -1);
    operation = null;
  }
  if (name === '%') {
    if (total) next = (0.01 * total);
  }
  if (name === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }
  if (operands.includes(name)) {
    if (total) operation = name;
  } else if (operation && nums.includes(name)) {
    next = next ? next + name : name;
  } else if (total && nums.includes(name)) {
    total += name;
  } else if (nums.includes(name)) {
    total = total ? total + name : name;
  } else if (!next && !operation && name === '.') {
    total = total.includes(name) ? total : total + name;
  } else if (total && operation && name === '.') {
    next = next.includes(name) ? next : next + name;
  }
  return { total, next, operation };
};

export default calculate;
