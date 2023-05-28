// function minHeapSort(arr) {
//     // build the heap
//     buildMinHeap(arr);

//     // perform the sort
//     for (let i = arr.length - 1; i > 0; i--) {
//         // swap the root (minimum value) with the last element
//         swap(arr, 0, i);
//         // maintain the heap property for the remaining elements
//         heapify(arr, 0, i);
//     }
//     return arr;
// }

// function buildMinHeap(arr) {
//     const n = arr.length;
//     // start at the first non-leaf node and work backwards
//     for (let i = Math.floor(n / 2); i >= 0; i--) {
//         heapify(arr, i, n);
//     }
// }

// function heapify(arr, i, n) {
//     // determine the left and right child indices
//     const left = 2 * i + 1;
//     const right = 2 * i + 2;

//     // assume the current node is the minimum
//     let smallest = i;
   
//     // compare the current node to its left child, if it exists
//     if (left < n && arr[left] < arr[smallest]) {
//         smallest = left;
//     }
//     // compare the current node to its right child, if it exists
//     if (right < n && arr[right] < arr[smallest]) {
//         smallest = right;
//     }
//     // if the minimum is not the current node, swap them and
//     // continue heapifying the subtree rooted at the new node
//     if (smallest !== i) {
//         swap(arr, i, smallest);
//         heapify(arr, smallest, n);
//     }
// }

// function swap(arr, i, j) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// var arr = [6, 7, 550, 22, 66]
// console.log(minHeapSort(arr));






///////////////////////////////////////////////////////////////////////

function heapSort(array) {
    // Build max heap
    buildMaxHeap(array);
    // Heap sort
    for (let i = array.length - 1; i > 0; i--) {
        // Swap the root (maximum value) with the last element
        swap(array, 0, i);
        // Heapify the reduced heap
        heapify(array, 0, i);
    }
    return array;
}

function buildMaxHeap(array) {
    // Start from the first non-leaf node (i.e., the parent of the last element)
    const startIdx = Math.floor(array.length / 2) - 1;
    // Heapify each node starting from the bottom up
    for (let i = startIdx; i >= 0; i--) {
        heapify(array, i, array.length);
    }
}

function heapify(array, idx, length) {
    const leftChildIdx = 2 * idx + 1;
    const rightChildIdx = 2 * idx + 2;
    let largestIdx = idx;
    // Find the largest element among the current node and its children
    if (leftChildIdx < length && array[leftChildIdx] > array[largestIdx]) {
        largestIdx = leftChildIdx;
    }
    if (rightChildIdx < length && array[rightChildIdx] > array[largestIdx]) {
        largestIdx = rightChildIdx;
    }
    // If the largest element is not the current node, swap them and heapify the affected subtree
    if (largestIdx !== idx) {
        swap(array, idx, largestIdx);
        heapify(array, largestIdx, length);
    }
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// Example usage:
// console.log("Original array:", arr);
// const sortedArr = heapSort(arr);
// console.log("Sorted array:", sortedArr);


var arr = [6, 7, 550, 22, 66]
console.log(heapSort(arr));
