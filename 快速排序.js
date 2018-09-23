// http://www.cnblogs.com/zichi/p/4788953.html
// ©ЛкыеепР
function quickSort(arr) {
    return arr.length <= 1 ? arr : quickSort(arr.slice(1).filter(item => item <= arr[0])).concat(arr[0], quickSort(arr.slice(1).filter(item => item > arr[0])));
}

let arr = [1,3,2]
console.log(quickSort(arr));