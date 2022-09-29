/**
 * 
 * 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

示例 1:

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const test = [1, 5, 8, 9, 10, 88, 77];
var rotate = function (nums, k) {
  if (k < 0) {
    return;
  }

  if (k === 0 || k === nums.length) {
    // console.log(nums);

    return nums;
  } else {
    let l = nums.length;
    k = k % l;
    let arr = [];
    for (let i = 0; i < l; i++) {
      if (i + k < l) {
        arr[i + k] = nums[i];
      } else {
        arr[i + k - l] = nums[i];
      }
    }

    // console.log("k不是0或数组长度", k);
    // console.log(arr);

    return arr;
  }
};

console.log(rotate(test, 3));

/**
 * 翻转数组
 * 思路：此题可以采用头插法，一个一个的移动。但是有种更加简单的选择数组的方式。我们可以采用翻转的方式，比如12345经过翻转就变成了54321，这样已经做到了把前面的数字放到后面去，但是还没有完全达到我们的要求，比如，我们只需要把12放在后面去，目标数组就是34512，与54321对比发现我们就只需要在把分界线前后数组再进行翻转一次就可得到目标数组了。所以此题只需要采取三次翻转的方式就可以得到目标数组，首先翻转分界线前后数组，再整体翻转一次即可。此题面试常考，大家可以记一下此方法。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverse = (nums, begin, end) => {
  let temp;
  while (begin < end) {
    temp = nums[end];
    nums[end] = nums[begin];
    nums[begin] = temp;
    end--;
    begin++;
  }
};
const rotate1 = function (nums, k) {
  if (nums.length < 2) {
    return;
  }
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};

let a = rotate1(test, 2);
// console.log(a);
