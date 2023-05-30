//heapsort
function heapSort(arr) {
    
    buildMaxHeap(arr)

    for (let i = arr.length - 1; i > 0; i--){
        
        swap(arr, 0, i);

        heapify(arr, 0, i);

    }
    return arr;
}


//build min heap
function buildMaxHeap(arr) {
    
    const startIdx = Math.floor(arr.length / 2) - 1;

    for (let i = startIdx; i >= 0; i--){
        heapify(arr,i,arr.length)
    }

}


//heapify
function heapify(arr,idx,length) {
    
    const leftChildIdx = 2 * idx + 1;
    const rightChildIdx = 2 * idx + 2;
    let largestIdx = idx;

    if (leftChildIdx < length && arr[leftChildIdx] > arr[largestIdx]) {
        largestIdx =leftChildIdx
    }

    if (rightChildIdx < length && arr[rightChildIdx] > arr[largestIdx]) {
        largestIdx=rightChildIdx
    }

    if (largestIdx!==idx) {
        swap(arr, idx, largestIdx)
        heapify(arr, largestIdx, length)
    }
}


function swap(arr, i, j) {
    [arr[i],arr[j]]=[arr[j],arr[i]]
}
