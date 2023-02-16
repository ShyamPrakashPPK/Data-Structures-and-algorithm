// const arr = ['a', 'b', 'c', 'x', 'y', 'z'];

// function binarySearch(arr, target, start, end) {
//     if (start > end) {
//         return 'not found';
//     }

//     const middle = Math.floor((start + end) / 2);

//     if (target === middle) {
//         return `found at ${middle}`
//     }

//     if (arr[target] > middle) {
//         return binarySearch(arr, target, start, middle - 1);
//     } else {
//         return binarySearch(arr,target,middle+1,end)
//     }
    
// }

// function binarySearch(arr, target, start, end) {
//     if (start > end) {
//         return 'Not found';
//     }

//     let middle = Math.floor((start + end) / 2);
//     if (target === middle) {
//         return 'Found at middle'
//     } else if (arr[middle] > target) {
//         return binarySearch(arr, target, start, middle - 1)
        
//     } else {
//         return binarySearch(arr,target,middle+1,end)
//     }

// }


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i+1;
        } 
    }
}