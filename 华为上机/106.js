const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let num1 = 0;
  let num2 = 0;
  let count = 0;
  while ((line = await readline())) {
    let num = parseInt(line);
    if (num < 0) {
      num1++;
    } else {
      num2 = num2 + num;
      count++;
    }
  }
  console.log(num1);
  if (count > 0) {
    console.log((num2/count).toFixed(1));
  }else{
    console.log(Number(0).toFixed(1));
  }
})();
