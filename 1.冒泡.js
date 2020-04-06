var arr = [2,3,4,5,1,23,0,6,9,8,7];
/**
 * 循环遍历，将每一个值与后面的值进行对比，如果后面的值比当前值小，就交换位置，从而达到冒泡排序
 * 每次需要循环 n-1, n-2, n-3, n-4, ..., 1, 一共n次
 * 所以是 (n-1 + 1)*n / 2 =》 n^2/2舍去常数，也就是n^2
 **/
Array.prototype.bubbling = function() {
    for(let i = 0; i < this.length; i++) {
        for(let j = i + 1; j < this.length; j++) {
            let current = this[i];
            let compare = this[j];
            if(compare < current) {
                swap(this, i, j);
            }
        }
    }
    return this;
}



console.log(arr.bubbling());