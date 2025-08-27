// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
	var answer = [0, 0];
	const set = new Set();

	for (let i = 0; i < words.length; i++) {
		// console.log(set);
		const current = words[i];
		const player = (i % n) + 1;
		const turn = Math.floor(i / n) + 1;

		const single = current.length < 2;
		if (single) return [player, turn];

		const before = words[i - 1];
		if (!before) {
			set.add(current);
			continue;
		}

		const wrong = before[before.length - 1] !== current[0];
		const repeated = set.has(current);

		if (wrong || repeated) {
			return [player, turn];
		}
		set.add(current);
	}

	return answer;
}

console.log(
	solution(3, [
		"tank",
		"kick",
		"know",
		"wheel",
		"land",
		"dream",
		"mother",
		"robot",
		"tank",
	]),
);

// console.log(
// 	solution(5, [
// 		"hello",
// 		"observe",
// 		"effect",
// 		"take",
// 		"either",
// 		"recognize",
// 		"encourage",
// 		"ensure",
// 		"establish",
// 		"hang",
// 		"gather",
// 		"refer",
// 		"reference",
// 		"estimate",
// 		"executive",
// 	]),
// );

// console.log(
// 	solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]),
// );
