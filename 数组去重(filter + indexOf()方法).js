// JavaScript����ȥ�ص�10�ַ�����https://www.cnblogs.com/lewiscutey/p/8269567.html
// ��5�ַ�����filter + indexOf()

let arr = [1, 'a', 'a', 'b', 1];
function unique(arr) {
    // indexOf ����Ԫ���������һ�γ��ֵ��±ꣻ
    // filter ������ֻ������indexOf���ڵ�ǰԪ���±��Ԫ�أ�Ҳ����Ԫ�ص�һ�γ���ʱ���ż���������
    return arr.filter((item, index, array) =>  array.indexOf(item) === index);
}
console.log(unique(arr));