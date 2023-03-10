// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

//  

// 示例 1：

// 输入：target = 9
// 输出：[[2,3,4],[4,5]]

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
let i = 1;
let j = 2;
let sum = 3;
let resArray = []
while(i<j){
    if(sum == target){
        let tarArray = []
       for(let k = i;k<=j;k++){
        tarArray.push(k)
       }
       resArray.push(tarArray)
    }

     if(sum >=target){
        sum -= i;
        i++;
    }else{
        j++;
        sum += j;
    }

}
console.log(resArray);
return resArray
};

findContinuousSequence(102)