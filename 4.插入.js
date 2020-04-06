/**
 * 插入排序，类似于打扑克牌，摸牌阶段，你会去找到比摸到的这张牌小的和大的中间，插进去
 */

Array.prototype.insertSort = function() {
    let newList = [];
    for(let i = 0; i < this.length; i++) {
        const current = this[i];
        console.log(current, newList)
        if(newList.length === 0) {
            newList.push(current);
        } else {
            for(let j = newList.length - 1; j >= 0; j--) {
                let bigItem = newList[j]
                if(current > bigItem) {
                    newList.push(current);
                    break;
                } else {
                    if(j > 0) {
                        var smallItem = newList[j - 1];
                        if(current > smallItem) {
                            newList.splice(j, 0, current);
                            break;
                        }
                    } else {
                        newList.unshift(current)
                    }
                }
            }
        }
    }

    return newList;
}

console.log(arr.insertSort())