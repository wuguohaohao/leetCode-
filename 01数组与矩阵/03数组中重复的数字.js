/**
 * @param {number[]} numbers
 * @return {number}
 */
var findRepeatNumber = function (numbers) {
  if (numbers.length === 0) {
    return -1;
  }
  let repeat = -1;
  let numMap = new Set();
  for (let i = 0; i < numbers.length; i++) {
    repeat = numbers[i];
    if (numMap.has(repeat)) {
      return repeat;
    } else {
      numMap.add(repeat);
    }
  }
};
