function solution(a, b) {
    var answer = 0;
    let min = a>b? b:a;
    let max = a>b? a:b;

    for (min;min<=max;min++){
    	answer += min;
    }
    return answer;
}

console.log(solution(5,3));