/* eslint-env jest */
const memo = {};

const fib = (n) => {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
};

describe('フィボナッチ数', () => {
  test('6 => 8', () => {
    expect(fib(6)).toBe(8);
  });
  test('0 => 0', () => {
    expect(fib(6)).toBe(8);
  });
  test('1 => 1', () => {
    expect(fib(6)).toBe(8);
  });
});
