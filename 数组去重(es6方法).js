// JavaScript数组去重的10种方法：https://www.cnblogs.com/lewiscutey/p/8269567.html

let arr = ['1', 1, 1, 2, 3]

let newArr = [...new Set(arr)]
console.log(newArr);