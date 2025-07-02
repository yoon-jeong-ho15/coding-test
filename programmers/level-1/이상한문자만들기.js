function solution(s) {
    var answer = '';
    let even = true;
    while(s.length>0){
        if(s[0]==" "){
            answer += s[0];
            even = true;
            s = s.substring(1);
        }else{
            if(even){
                answer += s[0].toUpperCase();
                s = s.substring(1);
                even = false;
            }else{
                answer += s[0].toLowerCase();
                s = s.substring(1);
                even = true;
            }
        }
    }
    return answer;
}

console.log(solution("try hello world"));