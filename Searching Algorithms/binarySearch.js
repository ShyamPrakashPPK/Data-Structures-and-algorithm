const arr = [9,8,7,6,5,4,3,2,1];


//basic binary search operation using recurssion
function binarySearch(arr, target, start, end) {
    if (start > end) {
        return 'Not found';
    }
    let middle = Math.floor((start + end) / 2);
    if (target === middle) {
        return 'Found at middle'
    } else if (arr[middle] > target) {
        return binarySearch(arr, target, start, middle - 1)      
    } else {
        return binarySearch(arr, target, middle + 1, end)
    }
}


console.log(binarySearch(arr,3,0,9));
