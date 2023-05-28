function largest(nums) {
    nums = nums.map(String); // Convert all numbers to strings
    nums.sort(function (a, b) {
        return (b + a).localeCompare(a + b);
    });
    if (nums[0] === "0") {
        return "0"; // Return "0" if the largest number is "0"
    }
    console.log(nums);
}


const arr = [3, 30, 34, 5, 9]

largest(arr)