/**
 * 假设 中间值为一个标准值，然后将其他的值跟他对比，然后放入左右两侧
 * 然后再去子集中的中间值作为标准值，对比子集，分为左右两侧
 * 直到子集长度为1或0时，结束循环
 */

Array.prototype.quickSort = function quickSort() {

    function sortFn(array) {
        if(array.length < 2) return array;
        var middle = Math.floor(array.length / 2);
        let newList = [...array];

        let leftArr = [],
            rightArr = [];
        var [reference] = newList.splice(middle, 1);

        for(let i = 0; i < newList.length; i++) {
            let current = newList[i];
            if(current < reference) {
                leftArr.push(current);
            } else {
                rightArr.push(current);
            }
        }

        return [...sortFn(leftArr), reference, ...sortFn(rightArr)]
    }

    return sortFn(this);
}

console.log(arr.quickSort())