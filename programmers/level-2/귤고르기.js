//https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
	var answer = 0;
	const max = Math.max(...tangerine);
	const arr = new Array(max + 1).fill(0);
	tangerine.forEach((t) => {
		arr[t]++;
	});
	arr.sort((a, b) => b - a);
	// console.log(arr);

	let i = 0;
	while (k > 0) {
		k -= arr[i];
		i++;
	}

	return i++;
}

// console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
// console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
// console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
