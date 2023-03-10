const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void async function () {
    // Write your code here
    while(line = await readline()){

        // 正则解法 
        // 通过正则表达式进行分割，生成数组后直接reverse，再join空格成一个字符串输出。 
        // 正则解析：^ 在[]中表示 非；A-Za-z表示大小写字母；[^A-Za-z]表示非大小写字母，后面再加上一个加号，表示一个或多个连续的非大小写字母。
        // var arr = line.split(/[^A-Za-z]+/).reverse().join(' ')
        // console.log(arr);

        // 不用正则
        let tokens = line.split(''); //分隔字符串
        tokens.forEach((item,index) => {
            let asc = item.charCodeAt(0) //记录ascii码值
            if((asc>=97 && asc <=122) || (asc>=65 && asc <=90) ){
            }else{
                tokens[index] = " " //非字母的字符用空格代替
            }
        });
        tokens = tokens.join("").split(" "); //将替换后的字符串用空格分隔
        console.log(tokens.reverse().join(" ")); //翻转后根据" "拼接
    }
}()