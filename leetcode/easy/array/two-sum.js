//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
    	const n = nums[i];
    	for(let j=i+1;j<nums.length;j++){
    		const m = nums[j];
    		if(n+m==target) return [i,j];
    	}
    }
};

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([4,3,2],6));
console.log(twoSum([0,4,2,3,0],0));
console.log(twoSum([-1,-2,-3,-4,-5],-8));