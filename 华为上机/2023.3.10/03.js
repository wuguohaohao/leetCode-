const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let linArr = []
    let tokens = ""
    while(line = await readline()){
        tokens = line.split(' ');
        linArr.push(tokens)
    }
    const line1 = linArr[0];
    const line2 = linArr[1];

    const num = Number(line1[0]);
    const maxVal = Number(line1[1]);

    let resArr = []
    for(let i=0;i<num;i++){

        let count = maxVal;
        for(let j=i+1; j<num;j++){
            let tmp = Math.abs(line2[i] - line2[j]) 
            count = tmp < count ? tmp:count;
        }
        resArr.push([line2[i],count])

    }
    // console.log(resArr);
    let flg = 0;
    let res = 0;
    resArr.forEach(item =>{
        if(item[1] === maxVal){
            flg++
        }
        if(item[1]<maxVal){
            res+=item[1]
        }
    })
    if(flg === num){
       console.log(-1);
    }
    console.log(res);

}()
