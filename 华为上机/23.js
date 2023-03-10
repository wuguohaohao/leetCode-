const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let map = new Map();
  let str = "";
  while ((line = await readline())) {
    str = line;
    let strArr = line.split("");
    strArr.forEach((item) => {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1);
      } else {
        map.set(item, 0);
      }
    });
  }

  let arr = [...map]; //map转数组

  arr.sort((a, b) => {
    return a[1] - b[1]; //按出现次数升序
  });

  let lowNum = arr[0][1]; //获取最少出现次数

  arr.forEach((item) => {
    if (item[1] === lowNum) {
        while(str.indexOf(item[0]) !== -1){
         str = str.replace(item[0],"")
        }
    }
  });

  console.log(str);
})();
