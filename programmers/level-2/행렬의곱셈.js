//https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
	var answer = [];

	for (let i = 0; i < arr1.length; i++) {
		let arr = [];
		for (let ii = 0; ii < arr2[i].length; ii++) {
			let num = 0;
			for (let iii = 0; iii < arr2.length; iii++) {
				const n = arr1[i][iii];
				const m = arr2[iii][ii];
				console.log(n, m);
				num += n * m;
			}
			arr.push(num);
		}
		answer.push(arr);
	}

	return answer;
}

console.log(
	solution2(
		[
			[2, 3, 2],
			[4, 2, 4],
			[3, 1, 4],
		],
		[
			[5, 4, 3],
			[2, 4, 1],
			[3, 1, 1],
		],
	),
);
