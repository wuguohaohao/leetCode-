// 描述
// 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）

// 题解：
// 
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let num = parseInt(line)
        let arr = []
        for(let i = 2; i*i <= num;i++){
            if(num%i == 0){
                while(num%i ==0){
                    arr.push(i)
                    num = num/i
                }
            }
        }
        if(num != 1){
            arr.push(num)
        }
        console.log(arr.join(" "));
        return 0;
    }
}()