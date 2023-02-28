function minHeapSort(arr) {
    buildMinHeap(arr)
    for (let i = arr.length - 1; i > 0; i--){
        swap(arr, 0, i)
        heapify(arr,0,i)
    }
    return arr
}

function buildMinHeap(arr) {
    const n = arr.length
    for (let i = Math.floor(n / 2); i > 0; i--){
        heapify(arr,i,n)
    }
}


function heapify(arr, i, n) {
    const left = 2 * i + 1
    const right = 2 * i + 2
    
    let smallest = i
    
    if (left < n && arr[left] < arr[smallest]) {
        smallest=left
    }
    if (right < n && arr[right] < arr[smallest]) {
        smallest=right
    }
    if (smallest !== i) {
        swap(arr, i, smallest)
        heapify(arr,smallest,n)
    }
}

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j]=temp
}




const arr = [4, 2, 66, 7, 1]

console.log(minHeapSort(arr));