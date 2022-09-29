// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

let test = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const rows = matrix.length;
  const columns = matrix[0].length;

  const order = [];
  let left = 0,
    top = 0,
    right = columns - 1,
    bottom = rows - 1;

  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      order.push(matrix[top][column]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      order.push(matrix[row][right]);
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        order.push(matrix[bottom][column]);
      }

      for (let row = bottom; row > top; row--) {
        order.push(matrix[row][left]);
      }
    }
    // left = left + 1;
    // top = top + 1;
    // right = right - 1;
    // bottom = bottom - 1;

    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }

  return order;
};

var spiralOrder1 = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  const rows = matrix.length,
    columns = matrix[0].length;
  const order = [];
  let left = 0,
    right = columns - 1,
    top = 0,
    bottom = rows - 1;
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      order.push(matrix[top][column]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      order.push(matrix[row][right]);
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        order.push(matrix[bottom][column]);
      }
      for (let row = bottom; row > top; row--) {
        order.push(matrix[row][left]);
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return order;
};

console.log(spiralOrder1(test));
