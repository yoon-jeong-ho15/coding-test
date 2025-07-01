function solution(s) {
    var answer = [];
    for(let i=0;i<s.length;i++){
        let ch1 = s[i];
        let match = false;
        for(let j=i-1;j>=0;j--){
            let ch2 = s[j];
            if(ch1==ch2) {
                answer.push(i-j);
                match = true;
                break;
            }
        }
        if(!match){
            answer.push(-1);
        }
    }
    return answer;
}

console.log(solution("banana"));