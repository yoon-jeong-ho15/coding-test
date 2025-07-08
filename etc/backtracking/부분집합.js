function solution(target, nums) {
    const result = [];
    
    function backtrack(index, selected) {
        const sum = selected.reduce((a, b) => a + b, 0);
        
        if (sum === target) {
            result.push([...selected]);
            return;
        }
        
        if (sum > target || index >= nums.length) {
            return;
        }

        backtrack(index + 1, selected);
        
        selected.push(nums[index]);
        backtrack(index + 1, selected);
        selected.pop();
    }
    
    backtrack(0, []);
    return result;
}

console.log(solution(9, [3, 34, 4, 12, 5, 2]));
