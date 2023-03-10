
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let tokens = line.split('');
        let arr = new Set()
        console.log(tokens);
        for(let i = 0;i < tokens.length;i++){
           arr.add(tokens[i])
        }

        console.log(arr.size);
    }
}()