// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
	var answer = 0;

	if (a > b) {
		let temp = b;
		b = a;
		a = temp;
	}

	for (let i = 1; i < 21; i++) {
		const m = 2 ** i;
		// console.log(i, m);
		a = Math.ceil(a / 2);
		b = Math.ceil(b / 2);
		console.log("i : ", i, "a,b :", a, b);
		if (a === b) {
			answer = i;
			break;
		}
	}

	return answer;
}

console.log(solution(8, 4, 7));
