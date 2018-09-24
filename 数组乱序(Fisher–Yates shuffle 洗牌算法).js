function shuffle(arr) {
    let newArr = [...arr]
    // i > 0，意思是数组长度大于1，才进入这个for循环
    for (let i = newArr.length - 1; i > 0; i--) {
        // rand 是0~i之间的数（就是数组的下标范围）
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
    }
    return newArr
}

//let arr = [1, 2, 3, 4, 5]
let arr = [1, 2]
console.log(shuffle(arr))