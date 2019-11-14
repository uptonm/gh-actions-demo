const sum = require('./sum');
const factorial = require('./factorial');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('factorial of 3 === 6', () => {
  expect(factorial(10)).toBe(3628800);
});
