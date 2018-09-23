// 二分查找：从一个有序数组中找到元素第一次出现的位置

function binarySearch (arr, value) {
    let low = 0
    let high = arr.length - 1
    let middle
    let item

    while (low < high) {
        middle = Math.floor((high - low) / 2)
        if (arr[middle] < value) {
            low = middle + 1
        } else if (arr[middle] > value) {
            high = middle -1
        } else {
            return middle
        }
    }

    return -1
}

let arr = [1,2,3,4,5]
console.log(binarySearch(arr, 3))