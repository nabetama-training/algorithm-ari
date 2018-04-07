/* eslint-env jest */
const getMin = (len, ants) =>
  ants.reduce((acum, ant) => Math.max(acum, Math.min(ant, len - ant)), 0);
const getMax = (len, ants) =>
  ants.reduce((acum, ant) => Math.max(acum, Math.max(ant, len - ant)), 0);

const solve = (len, ants, f) => f(len, ants);

describe('10cmの竿の上に3匹のアリがいる', () => {
  const L = 10;
  describe('左端からそれぞれ2,6,7の位置にいる', () => {
    const ants = [2, 6, 7];
    test('アリが竿から落ちるまでの最小は4である', () => {
      expect(solve(L, ants, getMin)).toBe(4);
    });
    test('アリが竿から落ちるまでの最大は8である', () => {
      expect(solve(L, ants, getMax)).toBe(8);
    });
  });
});
