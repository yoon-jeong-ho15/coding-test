//https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution2(n, left, right) {
	var answer = [];
	let count = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			const k = (j > i ? j : i) + 1;
			if (count >= left && count <= right) {
				answer.push(k);
			}
			if (count > right) {
				break;
			}
			count++;
		}
		if (count > right) {
			break;
		}
	}

	return answer;
}

function solution(n, left, right) {
	const answer = [];

	for (let a = left; a <= right; a++) {
		const i = Math.floor(a / n);
		const j = a % n;
		// console.log(j, k);

		const k = (j > i ? j : i) + 1;
		answer.push(k);
	}

	return answer;
}

console.log(solution(3, 2, 5));
// console.log(solution(4, 7, 14));
