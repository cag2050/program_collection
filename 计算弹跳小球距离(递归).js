/*
 ����
 һ��С���ָ���߶����£�����߶�Ϊ���¸߶ȵ�һ�룻����������������С�ڵ���1�ף�����Ϊ��ֹ��
 ����С���ܹ������ľ��롣
 ������
 ָ���ĸ߶�
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