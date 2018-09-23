/*
 需求：
 一个小球从指定高度落下，弹起高度为落下高度的一半；如果下落距离或弹起距离小于等于1米，则视为静止。
 计算小球总共经过的距离。
 参数：
 指定的高度
 */
function calcDistance(highValue) {
    console.log(`highValue = ${highValue}`);
    if (highValue <= 1) {
        return 0
    } else {
        let sum = 0
        sum += highValue
        halfHighValue = highValue / 2
        console.log(`child sum = ${sum}`);
        if (halfHighValue <= 1) {
            return sum
        } else {
            return calcDistance(halfHighValue) + sum
        }
    }
}

console.log(`calcDistance(x) = ${calcDistance(3)}`);