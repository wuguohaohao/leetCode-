const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let arr = []
    while(line = await readline()){
        arr.push(line)
    }
    arr.sort()
    arr.forEach((item,index) =>{
        if(index === 0){
            return
        }
     console.log(item);
    })
}()