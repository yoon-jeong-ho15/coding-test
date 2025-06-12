function solution2(s) {
    var answer = 0;
    answer = Number(s);
    return answer;
}

function solution(s){
    let answer=0;
    let isNegative = false;
    if(s[0]=="-"){
        isNegative = true;
        s = s.substring(1);
    }else if(s[0]=="+"){4
        s = s.substring(1);
    }
    console.log(s);
    for(let i=0;i<s.length;i++){
        let j = 10 ** i;
        let k = s[s.length-1-i]*j;
        answer += k;
    }
    if(isNegative) answer = 0 - answer;
    return answer;
}

console.log(solution("112234"));