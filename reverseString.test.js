const reverseString = require('./reverseString.js');

test('"Hello" should return "olleH', () => {
  //Arrange
  const str = "Hello";
  //Act
  const strReversed = reverseString(str);
  //Asset
  expect(strReversed).toBe('olleH')
})