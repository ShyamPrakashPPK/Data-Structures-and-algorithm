   class maxHeap {
    constructor() {
        this.data = []
    }
    getParentIdx(i) {
        return Math.floor((i - 1) / 2);
    }
    getLeftChildIdx(i) {
        return (i * 2) + 1
    }
    getRightChildIdx(i) {
        return (i * 2) + 2
    }
    swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    push(key) {
        this.data.push(key); // pushed to end need to rearrange
        this.heapifyUp()
    }

    heapifyUp() {
        let currentIdx = this.data.length - 1;
        let parentIdx = this.getParentIdx(currentIdx);

        while (currentIdx > 0 && this.data[currentIdx] > this.data[parentIdx]) { //if child is > parent node, swap
            this.swap(this.data, currentIdx, parentIdx);
            currentIdx = parentIdx;
            parentIdx = this.getParentIdx(currentIdx); 
        }
    }
    poll() {
        const maxValue = this.data[0]
        this.data[0] = this.data[this.data.length - 1]
        this.data.length--;  //assigned last value to the root
        this.heapifyDown()
        return maxValue
    }
    heapifyDown() {
        let currentIdx = 0;
        let leftChildIdx = this.getLeftChildIdx(currentIdx);
        let rightChildIdx = this.getRightChildIdx(currentIdx);
        while (this.data[leftChildIdx]) {//if left exists right also -- complete tree
            let biggestChild = this.data[rightChildIdx] && this.data[rightChildIdx] > this.data[leftChildIdx]
                ? rightChildIdx
                : leftChildIdx;

            if (this.data[currentIdx] < this.data[biggestChild]) {
                this.swap(this.data, currentIdx, biggestChild);
                currentIdx = biggestChild;
                leftChildIdx = this.getLeftChildIdx(currentIdx);
                rightChildIdx = this.getRightChildIdx(currentIdx);
            } else {
                return;
            }
        }
    }
}

const heap = new maxHeap()
console.log(heap);
heap.push(25)
heap.push(15)
heap.push(6)
heap.push(80)
heap.push(45)
console.log(heap.data);

let a = []
a.push(heap.poll())
a.push(heap.poll())

console.log(`top ${a.length} items `);
console.log(a);
console.log(heap);