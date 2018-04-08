/* eslint-env jest */
// n: 4
// nums: [1,2,4,7]
// sum: 13
const depthFirst = (n, nums, k) => {
  if (k === 0) return true;
  if (nums.length === 0) return false;
  // 1つ選ぶ
  const first = nums[0];
  return depthFirst(n - 1, nums.slice(1), k - first) || depthFirst(n - 1, nums.slice(1), k);
};

describe('[1,2,4,7]から4枚えらんで', () => {
  const nums = [1, 2, 4, 7];
  const n = 4;
  const k = 13;
  test('13にできる', () => {
    // 13から減らして数えていくー
    expect(depthFirst(n, nums, k)).toEqual(true);
  });
});
