// const disappearingnum = (nums) => {

//     nums.sort()

//     let largest = nums[nums.length - 1]
//     let arr = new Array()

//     for (let i = 1; i < largest+1; i++){
//         arr.push(i)
//     }

//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length; j++){
//             if (arr[j] === nums[i]) {
//                 nums.pop(i)
//             }
//         }
//     }
//     console.log(arr);

//     console.log(nums);

//     // for (let i = 0; i < nums.length; i++){
        
//     // }
// }


function findMissingNumbers(nums) {
    const n = nums.length;
    const present = Array(n).fill(false);
    for (const num of nums) {
        present[num - 1] = true;
    }
    const missing = [];
    for (let i = 0; i < n; i++) {
        if (!present[i]) {
            missing.push(i + 1);
        }
    }
    console.log(missing);
}



const nums = [4, 3, 2, 7, 8, 2, 3, 1]

findMissingNumbers(nums)