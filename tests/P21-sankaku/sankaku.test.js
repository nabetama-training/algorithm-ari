/* eslint-env jest */
const main = sticks => {
  let ret = 0;
  for (const stick1 of sticks) {
    for (const stick2 of sticks) {
      for (const stick3 of sticks) {
        // 重複排除
        const choiced = [...new Set([stick1, stick2, stick3].map(n => n))];
        if (choiced.length === 3) {
          // 周長
          const len = [stick1, stick2, stick3].reduce((sum, x) => sum + x);
          const longestStick = Math.max(stick1, stick2, stick3);
          const rest = len - longestStick;

          if (longestStick < rest) {
            ret = Math.max(ret, len);
          }
        }
      }
    }
  }
  return ret;
};

describe('長さがそれぞれ[2,3,4,5,10]の棒があるとき', () => {
  const a = [2, 3, 4, 5, 10];
  test('最大の三角形の周長は12である', () => {
    expect(main(a)).toBe(12);
  });
});
