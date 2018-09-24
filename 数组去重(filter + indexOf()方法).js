// JavaScript数组去重的10种方法：https://www.cnblogs.com/lewiscutey/p/8269567.html
// 第5种方法：filter + indexOf()

let arr = [1, 'a', 'a', 'b', 1];
function unique(arr) {
    // indexOf 返回元素在数组第一次出现的下标；
    // filter 函数，只返回了indexOf等于当前元素下标的元素，也就是元素第一次出现时，才加入新数组
    return arr.filter((item, index, array) =>  array.indexOf(item) === index);
}
console.log(unique(arr));