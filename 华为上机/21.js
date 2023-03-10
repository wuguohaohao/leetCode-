const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let arr = []
    let str =''
    while(line = await readline()){
        str = line.split('');
    }
    str.forEach((item) =>{
        let asc = item.charCodeAt(0)
        if( 65 <= asc && asc <= 90){
            if(asc === 90){
                return arr.push('a')
            }else{
               return arr.push(String.fromCharCode(Number(asc) + 1).toLowerCase()) 
            }
        }
        if(['a','b','c'].includes(item)){
           return arr.push('2')
        }
        if(['d','e','f'].includes(item)){
            return arr.push('3')
        }
        if(['g','h','i'].includes(item)){
            return arr.push('4')
        }
        if(['j','k','l'].includes(item)){
            return arr.push('5')
        }
        if(['m','n','o'].includes(item)){
            return arr.push('6')
        }
        if(['p','q','r','s'].includes(item)){
            return arr.push('7')
        }
        if(['t','u','v'].includes(item)){
            return arr.push('8')
        }
        if(['w','x','y','z'].includes(item)){
            return arr.push('9')
        }
        arr.push(item)
    });
    let res = arr.join("")
    console.log(res);
}()
