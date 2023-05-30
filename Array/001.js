/////basic array operatons and its time compexities...

let array = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(arr[2]);  ///accessing an random element at index... time compexity O(1)

array.push(1); ///insert an element at the end of array... time complexity O(1)

array.unshift(1); ///insert an element at the beginning of the array... time complexity(1)

array.splice(5, 0, 10); //for inserting an element 10 at the index 5 .... time complexity O(n)

array.pop(); ///Remove the element a the end....    time compelxity O(1)

array.shift();  /// removes an element from the beginnig of the array.... time complexity O(n)

array.splice(5, 1); ///removes the element from  index 5.... time compelxity O(n)

array.indexOf(6);  ///finds the index where 6 is present...time complexity O(n)      