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

  test('add works', () => {
    const subject = new Calculator(0);
    expect(subject.add(5).equal()).toBe(5)
  });
})
