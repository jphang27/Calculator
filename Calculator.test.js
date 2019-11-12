const Calculator = require('./Calculator');

describe('Calculator', () => {
  test('has equal function', () => {
    const subject = new Calculator(0);
    expect(subject.equal).toBeDefined()
  });

  test('has add function', () => {
    const subject = new Calculator(0);
    expect(subject.add).toBeDefined()
  });

  test('add 15', () => {
    const subject = new Calculator(0);
    expect(subject.add(15).equal()).toBe(15)
  });

  test('subtract 5', () => {
    const subject = new Calculator(0);
    expect(subject.add(15).subtract(5).equal()).toBe(10)
  });

  test('multiply 5', () => {
    const subject = new Calculator(5);
    expect(subject.multiply(5).equal()).toBe(25)
  });

  test('divide 5', () => {
    const subject = new Calculator(5);
    expect(subject.divide(5).equal()).toBe(1)
  });

  test('has clear function', () => {
    const subject = new Calculator(5);
    expect(subject.add(5).cleared()).toBeDefined()
  });

  test('add function works after clear function', () => {
    const subject = new Calculator(5);
    expect(subject.add(5).cleared().add(5).equal()).toBe(5)
  });

})
