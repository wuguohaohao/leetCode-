// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
/**
 * @param {string} s
 * @return {string}
 */
const str = "we are five";
var replaceSpace = function (s) {
  var n = s.replaceAll(" ", "%20");
  return n;
};
console.log(replaceSpace(str));
