function solution(target, nums) {
    const result = [];
    
    function backtrack(i,selected){
        let sums = selected.reduce((a,b)=>a+b,0);
        if(sums===target){
            result.push([...selected]);
            return;
        }

        if(i===nums.length){
            return;
        }
        if(sum>target){
            return;
        }

        let cur = nums[i];
        // console.log(cur);

    }

    backtrack(0,[]);

    return result;
}

console.log(solution(9, [3, 34, 4, 12, 5, 2]));

