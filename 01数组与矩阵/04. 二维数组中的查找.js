// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const test = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

var findNumberIn2DArray = function (matrix, target) {
  for (const row of matrix) {
    const index = search(row, target);
    if (index >= 0) {
      return true;
    }
  }
  return false;
};

var search = function (nums, target) {
  let low = 0;
  let heigh = nums.length - 1;
  while (low <= heigh) {
    let mid = Math.floor((heigh - low) / 2) + low;
    let num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      heigh = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

console.log("测试结果", findNumberIn2DArray(test, 20));
