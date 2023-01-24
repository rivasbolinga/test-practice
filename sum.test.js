const stringLength = require('./main');


test('String must return 5 with "toast"', () => {
  //arrange
  const str = 'toast';
  // act
  const stLength = stringLength(str)
  // Assert
  expect(stLength).toBe(5);
});


test('String must return 7 with "welcome"', () => {
  //arrange
  const str = 'welcome';
  // act
  const stLength = stringLength(str)
  // Assert
  expect(stLength).toBe(7);
});

test('String must throw an error with "imagination"', () => {
  //arrange
  const str = 'imagination';
  // act
  const stLength = stringLength(str)
  // Assert
  expect(stLength).toThrow(Error);
});