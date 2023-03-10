const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let map = new Map()
    while(line = await readline()){
        let tokens = line.split(' ');
        tokens.forEach((item,index) => {
           let itemArr = item.split('')
           tokens[index] = itemArr.sort().join('')
        });

        tokens.forEach((item,index) =>{
            if(map.has(item)){
                map.set(item,map.get(item) + 1)
            }else{
                map.set(item,1)
            }
        })
        let resArr = [...map]
        resArr = resArr.sort((a,b) =>{
            if(a[1] == b[1]){
                if(a[0].length == b[0].length){
                   s1 = a[0].split('');
                   s2 = b[0].split('');
                    
                   let flag = 0;
                   while(flag <= s1.length){
                    if(flag === s1.length){
                        return 0
                    }
                    if(s1[flag].toString().charCodeAt(0) > s2[flag].toString().charCodeAt(0)){
                        return 1
                    }
                    if(s1[flag].toString().charCodeAt(0) < s2[flag].toString().charCodeAt(0)){
                        return -1
                    }
                    if(s1[flag].toString().charCodeAt(0) === s2[flag].toString().charCodeAt(0)){
                        flag++
                    }
                   }

                }
                return a[0].length - b[0].length
            }
            return b[1] - a[1];
        })

        let res = '';

        resArr.forEach((item) =>{
            if(item[1] > 1){
                for(let i = 0; i< item[1];i++){
                    res += item[0];
                    res +=" ";
                }
            }else{
                res += item[0];
                res +=" ";
            }
        })
        console.log(res.trim());
    }
}()
