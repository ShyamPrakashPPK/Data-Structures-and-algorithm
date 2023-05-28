const numbers = [99, 11, 2, 5, 63, 234, 1, 231, 55, 1, 23, 634,]

function selectionSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++){
        let min = i;
        for (let j = i + 1; j < length; j++){
            if (array[j] < array[min]) {
                min=j
            }
        }
        let temp = array[i]
        array[i] = array[min]
        array[min]=temp
    }
    return array;
}



console.log(numbers);

console.log(selectionSort(numbers));