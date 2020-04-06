var arr = [2, 3, 4, 5, 1, 23, 0, 6, 9, 8, 7];

/**
 * 希尔排序，是基于冒泡之上的，理念差不多，只不过从之前的每一个都要和后面的所有项对比改为，间隔着对比
 * 在一定程度上可以减少运算量
 */
Array.prototype.hillSort = function () {
	let gap = Math.floor(this.length / 2);

	while (gap >= 1) {
		for (let i = 0; i < this.length - gap; i++) {
			if (this[i] > this[i + gap]) {
				swap(this, i, gap + i);
			}
		}
		gap = Math.floor(gap / 2);
    }
    
    return this;
};

console.log(arr.hillSort());
