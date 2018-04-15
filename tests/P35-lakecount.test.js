/* eslint-env jest */
class Graph {
  constructor(lake, row, col) {
    this.lake = lake;
    this.row = row;
    this.col = col;
    this.count = 0;
  }

  countIsGrass() {
    this.lake.map((line, i) =>
      line.map((l, j) => {
        if (this.lake[i][j] === 'w') {
          this.dfs(i, j);
          this.count += 1;
        }
        return 1;
      }));
    return this.count;
    // console.log(this.lake);
  }

  dfs(x, y) {
    this.lake[x][y] = '.';

    for (let dx = -1; dx <= 1; dx += 1) {
      for (let dy = -1; dy <= 1; dy += 1) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && nx < this.row && ny >= 0 && ny < this.col && this.lake[nx][ny] === 'w') {
          this.dfs(nx, ny);
        }
      }
    }
  }
}

describe('水たまりが', () => {
  test('3つ', () => {
    const lake = [
      ['w', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'w', 'w', '.'],
      ['.', 'w', 'w', 'w', '.', '.', '.', '.', '.', 'w', 'w', 'w', 'w'],
      ['.', '.', '.', '.', 'w', 'w', '.', '.', '.', '.', 'w', 'w', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'w', 'w', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'w', '.', '.'],
      ['.', '.', 'w', '.', '.', '.', '.', '.', '.', '.', 'w', '.', '.'],
      ['.', 'w', '.', 'w', '.', '.', '.', '.', '.', '.', 'w', 'w', '.'],
      ['w', '.', 'w', '.', 'w', '.', '.', '.', '.', '.', '.', 'w', '.'],
      ['.', 'w', '.', 'w', '.', '.', '.', '.', '.', '.', '.', 'w', '.'],
      ['.', '.', 'w', '.', '.', '.', '.', '.', '.', '.', '.', 'w', '.'],
    ];

    expect(new Graph(lake, lake.length, lake[0].length).countIsGrass()).toBe(3);
  });

  test('2つ', () => {
    const lake = [
      ['w', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'w', 'w', '.'],
      ['.', 'w', 'w', 'w', '.', '.', '.', '.', '.', 'w', 'w', 'w', 'w'],
      ['.', '.', '.', '.', 'w', 'w', '.', '.', '.', '.', 'w', 'w', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'w', 'w', '.'],
    ];

    expect(new Graph(lake, lake.length, lake[0].length).countIsGrass()).toBe(2);
  });

  test('1つ', () => {
    const lake = [
      ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
      ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
      ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
      ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ];

    expect(new Graph(lake, lake.length, lake[0].length).countIsGrass()).toBe(1);
  });
  test('ない', () => {
    const lake = [['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']];

    expect(new Graph(lake, lake.length, lake[0].length).countIsGrass()).toBe(0);
  });
});
