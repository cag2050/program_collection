function shuffle(arr) {
    let newArr = [...arr]
    // i > 0����˼�����鳤�ȴ���1���Ž������forѭ��
    for (let i = newArr.length - 1; i > 0; i--) {
        // rand ��0~i֮�����������������±귶Χ��
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
    }
    return newArr
}

//let arr = [1, 2, 3, 4, 5]
let arr = [1, 2]
console.log(shuffle(arr))