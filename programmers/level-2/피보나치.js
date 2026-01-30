//https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
	var answer = 0;

	let arr = [0, 1];

	for (let i = 2; i <= n; i++) {
		const num = arr[i - 2] + arr[i - 1];
		arr.push(num % 1234567);
	}

	return arr[n];
}

console.log(solution(3));
