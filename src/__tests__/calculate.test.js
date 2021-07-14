import calculate from '../logic/calculate';

describe('calculate', () => {
  let result = {
    total: '',
    next: '',
    operate: '',
  };

  it('initially adds a number to the total', () => {
    result = calculate(result, '3');
    expect(result.total).toBe('3');
  });

  it('returns the the sum of numbers', () => {
    result = calculate(result, '+');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(5);
  });

  it('returns the the difference between two numbers', () => {
    result = calculate(result, '-');
    result = calculate(result, '1');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(4);
  });

  it('divides two numbers', () => {
    result = calculate(result, '÷');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(2);
  });

  it('multiply two numbers', () => {
    result = calculate(result, 'X');
    result = calculate(result, '7');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(14);
  });

  it('converts positive to a negative number', () => {
    result = calculate(result, '+/-');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(-14);
  });

  it('converts negative to a positive number', () => {
    result = calculate(result, '+/-');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(14);
  });

  it('divide by 0', () => {
    result = calculate(result, '÷');
    result = calculate(result, '0');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(0);
  });

  it('resets the result values', () => {
    result = calculate(result, 'AC');
    expect((result)).toEqual({ total: null, next: null, operation: null });
  });
});
