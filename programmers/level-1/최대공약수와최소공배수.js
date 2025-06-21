function solution(n, m) {
    var answer = [];
    let min = n>m? m:n;
    let max = n>m? n:m;

    for(let i=min;i>0;i--){
        if(min % i == 0 && max % i == 0){
            answer.push(i)
            for(let j=max; ;j++){
                if(j % min == 0 && j % max == 0){
                    answer.push(j);
                    break;
                }
            }
            break;
        }
    }

    return answer;
}

console.log(solution(3,12));
console.log(solution(2,5));