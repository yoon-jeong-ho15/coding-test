//https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    var answer = "";
    const arr = s
        .split(" ")
        .map(Number)
        .sort((a, b) => b - a);
    const max = arr[0];
    const min = arr[arr.length - 1];
    answer = min + " " + max;

    return answer;
}

console.log(solution("1 2 3 4"));
