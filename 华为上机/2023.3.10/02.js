const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let tokens = line.split(' ');
        tokens.forEach((item,index) => {
            tokens[index] =  parseInt(item)
        });
        
        let sum = 0;

        let resArr = [];
        let res = 0;
        
        for(let i = 0; i<tokens.length;i++){
            let count = 0; 
            let discount = 0;

            sum += tokens[i];

            for(let j = 0; j<i;j++){
                discount += (i-j)*tokens[j]
            }
            if(sum > 100){
                res = Number(100 - discount)
            }else{
              count = sum - discount
              resArr.push(count)
            }
        }
        resArr.sort()
        res = Number(resArr[resArr.length-1])
        console.log(res);
    }
}()
