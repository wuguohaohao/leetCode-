/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，
 * 但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  // 利用辅助栈
  let stack = [];
  for (let i = 0, j = 0; i < popped.length; i++) {
    stack.push(pushed[i]);
    // 判断栈顶元素是否和popped[j]相等
    while (popped[j] === stack[stack.length - 1] && stack.length) {
      stack.pop();
      j++;
    }
  }
  // 若全部出栈，则顺序正确
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
