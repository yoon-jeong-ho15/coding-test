function solution(arr){
    var answer = [];
    let lastNum = null;
    for(const num of arr){
        if(num != lastNum) {
            lastNum = num;
            answer.push(num);
        }
    }
    
    return answer;
}

console.log(solution([1,1,3,3,0,1,1]));