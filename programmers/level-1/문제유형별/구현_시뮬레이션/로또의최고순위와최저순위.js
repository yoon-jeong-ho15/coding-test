function solution(lottos, win_nums) {
    var answer = [];
    let zeroCount = 0;
    let count = 0;
    let map = {
        6:1,5:2,4:3,3:4,2:5,1:6,0:6
    }


    for (let i=0;i<lottos.length;i++){
        let guess = lottos[i];
        // console.log(guess);
        if(guess==0){
            zeroCount++;
        }else{
            for(let j=0;j<win_nums.length;j++){
                let num = win_nums[j];
                if(guess == num){
                    count++;
                }
            }
        }
    }
    // console.log(zeroCount, count);
    answer.unshift(map[count+zeroCount], map[count]);
    return answer;
}

console.log(solution([44,1,0,0,31,25],[31,10,45,1,6,19]));
console.log(solution([0,0,0,0,0,0],[38,19,20,40,15,25]));