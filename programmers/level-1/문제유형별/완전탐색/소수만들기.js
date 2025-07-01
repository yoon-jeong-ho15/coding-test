
function solution(nums) {
    var answer = 0;
    let set = new Set();

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                sum = nums[i]+nums[j]+nums[k];
                // console.log(`sum:${sum}`);
                let count = 0;  
                for(let l=1;l*l<=sum;l++){
                    if(sum%l==0){
                        // count++;
                        if(l*l<sum){
                            count+=2;
                        }else{
                            count++;
                        }
                    }
                }
                if(count <= 2){
                    // console.log(`sum:${sum}`);
                    // console.log(`i:${nums[i]},j:${nums[j]},k:${nums[k]}`);
                    set.add([nums[i],nums[j],nums[k]]);
                }
            }
        }
    }
    // console.log(set);
    return set.size;
}

function solution2(nums){
    let answer = 0;
    let set = new Set();

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                sum = nums[i]+nums[j]+nums[k];
                set.add(sum);
            }
        }
    }
    console.log(set);
    for(let num of set){
        // console.log(`num:${num}`);
        let count=0;
        for(let i=1;i<=num;i++){
            if(num%i==0) count++;
        }
        if(count!=2){
            set.delete(num);
        }
    }
    console.log(set);
    if(set.size==0) return -1;
    return set.size;
}

// console.log(solution([1,2,3,4]));
// console.log(solution([1,2,7,6,4]));
// console.log(solution([1,2,7,6,4,3,9,8]));
