function minHeapSort(arr) {
    // build the heap
    buildMinHeap(arr);

    // perform the sort
    for (let i = arr.length - 1; i > 0; i--) {
        // swap the root (minimum value) with the last element
        swap(arr, 0, i);
        // maintain the heap property for the remaining elements
        heapify(arr, 0, i);
    }
    return arr;
}

function buildMinHeap(arr) {
    const n = arr.length;
    // start at the first non-leaf node and work backwards
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        heapify(arr, i, n);
    }
}

function heapify(arr, i, n) {
    // determine the left and right child indices
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // assume the current node is the minimum
    let smallest = i;

    // compare the current node to its left child, if it exists
    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }
    // compare the current node to its right child, if it exists
    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }
    // if the minimum is not the current node, swap them and
    // continue heapifying the subtree rooted at the new node
    if (smallest !== i) {
        swap(arr, i, smallest);
        heapify(arr, smallest, n);
    }
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var arr = [6, 7, 550, 22, 66]
console.log(minHeapSort(arr));