function solution(num) {
    var answer = 0;
    for(;answer<501;answer++){
        if(num==1) return answer;
        if(num%2==0){
            num = num /2;
        }else{
            num = num * 3 + 1;
        }
    }
    return -1;
}

console.log(solution(626331));