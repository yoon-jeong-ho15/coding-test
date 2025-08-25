// https://school.programmers.co.kr/learn/courses/30/lessons/12914

// 정답률 6/16
function solution2(n) {
    var answer = 0;
    let arr = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        let num = arr[i - 2] + arr[i - 1];
        arr.push(num);
        console.log(arr[arr.length - 1]);
    }
    answer = arr[n] % 1234567;
    return answer;
}

// 정답률 6/16 (시간초과)
function solution3(n) {
    let answer = 0;
    function backtrack(n) {
        if (n < 2) {
            return 1;
        }
        return backtrack(n - 1) + backtrack(n - 2);
    }
    answer = backtrack(n) % 1234567;
    return answer;
}

// solution2가 정답률이 낮았던 이유는 어느정도 커지면 'infinity'라고 입력해버리기 때문에
function solution(n) {
    var answer = 0;
    let arr = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        let num = arr[i - 2] + arr[i - 1];
        arr.push(num % 1234567);
        console.log(arr[arr.length - 1]);
    }
    answer = arr[n];
    return answer;
}

console.log(solution3(5));
