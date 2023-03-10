const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let str = line.split(" ");
    let a = parseInt(str[0]);
    let b = parseInt(str[1]);
    if (a > b) {
      [a, b] = [b, a];
    }
    let i = b;
    while (i % a !== 0) {
      i = i + b;
    }
    console.log(i);
  }
})();
