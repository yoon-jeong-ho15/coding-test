// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
	var answer = [];
	const map = new Map();
	const compMap = new Map();
	for (let i = 0; i < want.length; i++) {
		map.set(want[i], number[i]);
		compMap.set(want[i], 0);
	}
	// console.log(map);
	// console.log(compMap);

	for (let i = 0; i < discount.length; i++) {
		const curMap = new Map(map);
		for (let j = 0; j < 10; j++) {
			const item = discount[i + j];
			if (curMap.has(item)) {
				curMap.set(item, curMap.get(item) - 1);
			}
		}
		let empty = true;
		for (const val of curMap.values()) {
			if (val > 0) {
				empty = false;
				break;
			}
		}

		if (empty) answer.push(i + 1);
	}

	// console.log(map);
	return answer.length;
}

console.log(
	solution(
		["banana", "apple", "rice", "pork", "pot"],
		[3, 2, 2, 2, 1],
		[
			"chicken",
			"apple",
			"apple",
			"banana",
			"rice",
			"apple",
			"pork",
			"banana",
			"pork",
			"rice",
			"pot",
			"banana",
			"apple",
			"banana",
		],
	),
);
