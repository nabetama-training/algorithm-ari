/* eslint-env jest */
const ok = (cards, _sum) => cards.reduce((acum, card) => acum + card, 0) === _sum;

const main = (cards, _sum) => {
  for (const card1 of cards) {
    for (const card2 of cards) {
      for (const card3 of cards) {
        for (const card4 of cards) {
          if (ok([card1, card2, card3, card4], _sum)) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

// n: 紙の枚数
// expect: 引いた数字の和
// cards: 箱の中のカード
describe('箱の中の紙が1,3,5のとき', () => {
  const cards = [1, 3, 5];
  test('4回箱から引いたら和が10になること', () => {
    expect(main(cards, 10)).toEqual(true);
  });
});
