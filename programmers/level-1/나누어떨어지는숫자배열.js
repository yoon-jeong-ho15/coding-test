function solution(arr, divisor) {
    var answer = [];
    let answer2 = [];

    for(const num of arr){
        if(num % divisor == 0) answer.push(num); 
    }
    if(answer.length == 0){
        answer2.push(-1);
    }else{
        for(let i=0;i<answer.length;i++){
            let inserted = false;
            const n = answer[i];
            for(let j=0;j<answer2.length;j++){
                const m = answer2[j];
                if(n<m){
                    answer2.splice(j,0,n);
                    inserted = true;
                    break;
                }
            }
            if(!inserted){answer2.push(n)};
        }
    }

    return answer2;
}

console.log(solution([3,2,6],10));