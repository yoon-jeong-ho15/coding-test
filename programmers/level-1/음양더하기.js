function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0;i<signs.length;i++){
        if(signs[i]){
            answer += absolutes[i]; 
        }else{
            answer -= absolutes[i];
        }
    }
    return answer;
}

console.log(solution([4,7,12],[true, false, true]));