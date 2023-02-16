const numbers = [99, 11, 2, 5, 63, 234, 1, 231, 55, 1, 23, 634,]

function selectionSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++){
        let min = i;
        let temp = array[i]
        for (let j = i + 1; j < length; j++){
            if (array[j] < array[min]) {
                min=j
            }
        }
        array[i] = array[min]
        array[min]=temp
    }
    return array;
}
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = 1
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         if (minIndex != i) {
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//         }
//     }
//     return arr
// }


console.log(numbers);

console.log(selectionSort(numbers));