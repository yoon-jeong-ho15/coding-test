// https://school.programmers.co.kr/learn/courses/30/lessons/12953

// 유클리드 알고리즘
function gcd(a, b) {
	if (b == 0) return a;
	return gcd(b, a % b);
}

function solution(arr) {
	let lcm = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		let a = i === 0 ? arr[0] : lcm;
		let b = arr[i + 1];
		let g = gcd(a, b);
		lcm = (a / g) * b;
	}
	return lcm;
}

console.log(solution([2, 6, 8, 14]));
