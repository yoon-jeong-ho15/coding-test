function solution(nums) {
    var answer = 0;
    let set = new Set();
    let max = nums.length/2;
    // console.log(`max:${max}`);

    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        if(!set.has(nums[i])){
            set.add(nums[i]);
        }
    }
    set.delete(0);
    // console.log(set);
    answer = set.size>max? max : set.size;
    return answer;
}

console.log(solution([3,3,3,2,2,2]));