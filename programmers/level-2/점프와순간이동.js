// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
	var ans = 0;
	while (n > 0) {
		// console.log(n);
		const r = n % 2;
		if (r === 1) {
			ans++;
		}
		n = Math.floor(n / 2);
	}
	return ans;
}

console.log(solution(5000));
