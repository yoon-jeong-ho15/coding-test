// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
	var answer = 0;
	const cache = [];

	for (const cityname of cities) {
		const city = cityname.toLowerCase();
		if (cache.includes(city)) {
			answer = answer + 1;
			cache.splice(cache.indexOf(city), 1);
			cache.push(city);
		} else if (cache.length == cacheSize) {
			cache.push(city);
			cache.shift();
			answer = answer + 5;
		} else {
			cache.push(city);
			answer = answer + 5;
		}
	}

	return answer;
}

// console.log(
// 	solution(3, [
// 		"Jeju",
// 		"Pangyo",
// 		"Seoul",
// 		"NewYork",
// 		"LA",
// 		"Jeju",
// 		"Pangyo",
// 		"Seoul",
// 		"NewYork",
// 		"LA",
// 	]),
// );
// console.log(
// 	solution(3, [
// 		"Jeju",
// 		"Pangyo",
// 		"Seoul",
// 		"Jeju",
// 		"Pangyo",
// 		"Seoul",
// 		"Jeju",
// 		"Pangyo",
// 		"Seoul",
// 	]),
// );
// console.log(
// 	solution(2, [
// 		"Jeju",
// 		"Pangyo",
// 		"Seoul",
// 		"NewYork",
// 		"LA",
// 		"SanFrancisco",
// 		"Seoul",
// 		"Rome",
// 		"Paris",
// 		"Jeju",
// 		"NewYork",
// 		"Rome",
// 	]),
// );
