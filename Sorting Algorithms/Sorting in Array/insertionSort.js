const numbers = [3,1,4,6,7,3,2,66,2]

function insertionSort(array) {
    for (let i = 1; i < array.length; i++){
        let current = array[i]
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array; 
}


console.log(numbers);
insertionSort(numbers);
console.log(numbers);      