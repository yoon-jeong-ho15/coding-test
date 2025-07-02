//https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    var answer = [];
    const str = String(n);

    for(let i=0;i<str.length;i++){
    	const j = Number(str.charAt(str.length-1-i));
    	answer.push(j); 
    }
    return answer;
}

console.log(solution(12345));