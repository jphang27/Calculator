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

  test('has subtract function', () => {
    const subject = new Calculator(0);
    expect(subject.subtract).toBeDefined()
  });

  test('has multiply function', () => {
    const subject = new Calculator(0);
    expect(subject.multiply).toBeDefined()
  });

  test('has divide function', () => {
    const subject = new Calculator(0);
    expect(subject.divide).toBeDefined()
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

  test('RPN function with no input returns 0', () => {
    const subject = new Calculator(0);
    expect(subject.rpn()).toBe(0)
  });

  test('RPN function with addition works', () => {
    const subject = new Calculator(0);
    expect(subject.rpn("1 2 +")).toBe(3)
  });

  test('RPN function with substraction works', () => {
    const subject = new Calculator(0);
    expect(subject.rpn("2 1 -")).toBe(1)
  });

  test('RPN function with multiplcation works', () => {
    const subject = new Calculator(0);
    expect(subject.rpn("2 1 *")).toBe(2)
  });

  test('RPN function with division works', () => {
    const subject = new Calculator(0);
    expect(subject.rpn("2 2 /")).toBe(1)
  });

  

})
