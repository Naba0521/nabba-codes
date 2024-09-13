// 26. Remove Duplicates from Sorted Array-leet
nums = [1, 4, 6, 6, 8, 10]
function RemoveDuplicates(nums) {
    const expectedNums = [];
    if (nums[0] <= nums[1]) {
        expectedNums.push(nums[0]);
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            expectedNums.push(nums[i]);
        }
    }
    return expectedNums;
}
const result = RemoveDuplicates(nums);
console.log(result);