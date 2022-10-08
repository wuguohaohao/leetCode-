/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)。
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.

 */
var MinStack = function () {
  this.myStack = [];
  this.isEmpty = function () {
    let L = this.myStack.length;
    if (L === 0) {
      return;
    }
    return L;
  };
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.myStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.isEmpty();
  this.myStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let L = this.isEmpty();
  return this.myStack[L - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  this.isEmpty();
  let min = Math.min.apply(null, this.myStack);
  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
