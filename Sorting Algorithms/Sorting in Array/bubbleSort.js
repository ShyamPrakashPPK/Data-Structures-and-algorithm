const arr = [1, 4, 5, 3, 2, 5, 56, 7, 2, 's', 'f']


function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len; j++){
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
console.log(arr);

bubbleSort(arr)

console.log(arr);

 