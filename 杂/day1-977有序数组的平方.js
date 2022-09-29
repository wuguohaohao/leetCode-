/**
给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

 

示例 1：

输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
示例 2：

输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/squares-of-a-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

let test = [-9, -4, 0, 2, 5, 10];

/**
 * 
冒泡排序
 */
const sortedSquares = (nums) => {
  let arr = [];

  nums.forEach((element) => {
    arr.push(element * element);
  });
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};
let res = sortedSquares(test);

console.log(res);

/**
 * @desc 双指针
 * @link https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 * @param nums Array  e.g. [-4,-1,0,3,10]
 * @return {array}    e.g. [0,1,9,16,100]
 */
const sortedSquares1 = function (nums) {
  let res = [];
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    const left = Math.abs(nums[i]);
    const right = Math.abs(nums[j]);
    if (right > left) {
      // push element to the front of the array
      res.unshift(right * right);
      j--;
    } else {
      res.unshift(left * left);
      i++;
    }
  }
  return res;
};
