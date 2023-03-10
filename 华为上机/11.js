const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let num = Math.abs(line).toString();
        let res = num.split('').reverse().join('');
        console.log(res);
    }
}()
