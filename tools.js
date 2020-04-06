function swap(array, index_1, index_2) {
    let a = array[index_1];

    array[index_1] = array[index_2];
    array[index_2] = a;
    return array;
}