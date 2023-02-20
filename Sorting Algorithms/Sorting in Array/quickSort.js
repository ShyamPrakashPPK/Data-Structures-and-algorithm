 function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length-1; i++){ 
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]   
}

const array = [-1, 3, 4, 7, 2, 0, -5, 9]
console.log(array,"<----before sorting");

console.log(quickSort(array),'<-----supposed to be sorted');

console.log(array, '<-----after sorted');

