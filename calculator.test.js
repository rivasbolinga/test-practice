const Calculator = require('./calculator.js');
const calculator  = require('./calculator.js');

// For add function
describe('add', () => {
  test('2 + 2 should be equal 4', () => {
    //arrange
    const a = 2;
    const b = 2;
    const calculator = new Calculator;
    //act
    const sum = calculator.add(a,b);
    //asset
    expect(sum).toBe(4) 
  });
  test('55 + 55 should be equal 110', () => {
    //arrange
    const a = 55;
    const b = 55;
    const calculator = new Calculator;
    //act
    const sum = calculator.add(a,b);
    //asset
    expect(sum).toBe(110) 
  });
  test('0.5 + 23 should be equal 23.5', () => {
    //arrange
    const a = 0.5;
    const b = 23;
    const calculator = new Calculator;
    //act
    const sum = calculator.add(a,b);
    //asset
    expect(sum).toBe(23.5) 
  })

})

// For subtract function
describe('subtract', () => {
  test('10 - 5 should be equal 5', () => {
    //arrange
    const a = 10;
    const b = 5;
    const calculator = new Calculator;
    //act
    const rest = calculator.subtract(a,b);
    //asset
    expect(rest).toBe(5) 
  });
  
  test('1090 - 290 should be equal 5', () => {
    //arrange
    const a = 1090;
    const b = 290;
    const calculator = new Calculator;
    //act
    const rest = calculator.subtract(a,b);
    //asset
    expect(rest).toBe(800) 
  });
  test('0 - 1 should be equal 5', () => {
    //arrange
    const a = 0;
    const b = 1;
    const calculator = new Calculator;
    //act
    const rest = calculator.subtract(a,b);
    //asset
    expect(rest).toBe(-1) 
  });
})

// For divide function
describe('divide', () => {
  test('2 / 2 should be equal 1', () => {
    //arrange
    const a = 2;
    const b = 2;
    const calculator = new Calculator;
    //act
    const divide = calculator.divide(a,b);
    //asset
    expect(divide).toBe(1) 
  });
  test('100 / 2 should be equal 50', () => {
    //arrange
    const a = 100;
    const b = 2;
    const calculator = new Calculator;
    //act
    const divide = calculator.divide(a,b);
    //asset
    expect(divide).toBe(50) 
  });
  test('20 / 5 should be equal 4', () => {
    //arrange
    const a = 20;
    const b = 5;
    const calculator = new Calculator;
    //act
    const divide = calculator.divide(a,b);
    //asset
    expect(divide).toBe(4) 
  });
});

// For multiply function
describe('divide', () => {
  test('1 * 1 should be equal 1', () => {
    //arrange
    const a = 1;
    const b = 1;
    const calculator = new Calculator;
    //act
    const multiply = calculator.multiply(a,b);
    //asset
    expect(multiply).toBe(1) 
  });
  test('41 * 61 should be equal 2501', () => {
    //arrange
    const a = 41;
    const b = 61;
    const calculator = new Calculator;
    //act
    const multiply = calculator.multiply(a,b);
    //asset
    expect(multiply).toBe(2501) 
  });
  test('100 * 69 should be equal 1', () => {
    //arrange
    const a = 100;
    const b = 69;
    const calculator = new Calculator;
    //act
    const multiply = calculator.multiply(a,b);
    //asset
    expect(multiply).toBe(6900) 
  });
});