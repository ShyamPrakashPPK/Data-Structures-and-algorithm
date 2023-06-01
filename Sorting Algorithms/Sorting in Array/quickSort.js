function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const array = [5, 8, 2, 1, 6, 3, 9, 4, 7,4556,232,6,3];
const sortedArray = quickSort(array);
console.log(sortedArray);
