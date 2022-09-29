// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
/**
 * @param {string} s
 * @return {character}
 */

// 方法一，借助countBy实现哈希表存储频数
var _ = require("lodash");
const s = "ssadadfasda";
var firstUniqChar = function (s) {
  // 调用lodash方法countBy
  const frequency = _.countBy(s);
  console.log(frequency);
  console.log(Array.from(s).entries());
  for (const [i, ch] of Array.from(s).entries()) {
    console.log(i, ch);
    if (frequency[ch] === 1) {
      return ch;
    }
  }
  return " ";
};
console.log(firstUniqChar(s));

// 方法二 队列

var firstUniqChar1 = (s) => {
  let q = [];
  let position = new Map();
  for (const [i, ch] of Array.from(s).entries()) {
    if (!position.has(ch)) {
      position.set(ch, i);
      q.push([ch, i]);
    } else {
      position.set(ch, -1);
      while (q.length && position.get(q[0][0]) === -1) {
        q.shift();
      }
    }
  }
  console.log("q", q);
  return q.length ? q[0][0] : " ";
};

console.log(firstUniqChar1(s));
