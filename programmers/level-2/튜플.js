// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution2(s) {
	var answer = [];
	let map = new Map();
	let arr = s.split(/{|}|,/).filter((word) => word !== "");
	arr.forEach((item) => {
		map.set(
			Number(item),
			map.get(Number(item)) ? map.get(Number(item)) + 1 : 1,
		);
	});

	for (const [key, val] of map.entries()) {
		let inserted = false;
		for (let i = 0; i < answer.length; i++) {
			let k = answer[i];
			if (map.get(k) < val) {
				answer.splice(i, 0, key);
				inserted = true;
				break;
			}
		}
		if (!inserted) answer.push(key);
	}

	return answer;
}

function solution(s) {
	let map = new Map();
	let arr = s.split(/{|}|,/).filter((word) => word !== "");

	arr.forEach((item) => {
		const num = Number(item);
		map.set(num, (map.get(num) || 0) + 1);
	});

	return Array.from(map.entries())
		.sort((a, b) => b[1] - a[1])
		.map(([key, _]) => key);
}

// console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{20,111},{111}}"));
