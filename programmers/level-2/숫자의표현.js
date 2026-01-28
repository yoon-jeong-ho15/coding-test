// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
    var answer = 1;
    let c = 1;

    for (let d = 2; d + c <= n; d++) {
        let isEven = d % 2 === 0;
        let q = Math.floor(n / d);
        let r = n % d;
        let flag = false;

        if (isEven) {
            flag = d / r === 2;
        } else {
            flag = r === 0;
        }

        if (flag) {
            answer++;
        }

        c += d;
    }
    return answer;
}

console.log(solution(15)); // 4
