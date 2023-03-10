const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let tokens = line.split("");
    let map = new Map();
    tokens.forEach((element) => {
      if (map.has(element)) {
        map.set(element, map.get(element) + 1);
      } else {
        map.set(element, 1);
      }
    });
    let res = []; //排序结果
    for (const item of map) {
      res.push(item);
    }
    res.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0].charCodeAt(0) - b[0].charCodeAt(0);
      } else if (a[1] < b[1]) {
        return 1;
      } else {
        return -1;
      }
    });

    let s = "";
    res.forEach((el) => {
      s += el[0];
    });
    console.log(s);
    console.log(res);
  }
})();
