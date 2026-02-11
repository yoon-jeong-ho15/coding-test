//https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
	const set = new Set();

	for (let i = 0; i < elements.length; i++) {
		let arr = [];
		let num = 0;
		let j = 0;
		do {
			let n = (i + j) % elements.length;
			num += elements[n];
			set.add(num);
			// console.log(i, j, n, num);
			j++;
		} while ((i + j) % elements.length !== i);
	}
	// console.log(set);
	return set.size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
