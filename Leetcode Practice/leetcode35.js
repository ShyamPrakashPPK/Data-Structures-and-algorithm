var searchInsert = function (nums, target) {
   
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === target) {
            return i
        } else {
            for (let j = 0; j <= nums.length; j++){
                if (nums[j] < target) {
                    console.log("not yet");
                } else {
                    return j;
                }
            }
                
        }
    }
};

const nums = [1, 3, 5, 6]

searchInsert(nums, 2)
