/**
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 */


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 借鉴天勤考研快排代码
var getLeastNumbers = function (arr, k) {
    const quickSort = (arr,low,high) => {
        let i = low;
        let j = high;
        let flag = arr[i]
        if(i>j){
            return
        }
        while(i<j){
            while(i<j && flag <= arr[j]){
                j--
            }
            if(i<j){
                swap(arr,i,j)
                i++
            }

            while(i<j && flag >= arr[i]){
                i++
            }

            if(i<j){
                swap(arr,i,j)
                j--
            }

        }
        quickSort(arr,low,i-1);
        quickSort(arr,i+1,high);

    }

    const swap = (arr,i,j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    quickSort(arr,0,arr.length-1);
    return arr.slice(0,k)
};

