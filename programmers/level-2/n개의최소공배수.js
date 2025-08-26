// https://school.programmers.co.kr/learn/courses/30/lessons/12953

// 유클리드 알고리즘
function gcd(a, b) {
	if (b == 0) return a;
	return gcd(b, a % b);
}

function solution(arr) {
	let lcm = arr[0];

	for (let i = 1; i < arr.length; i++) {
		let a = lcm;
		let b = arr[i];
		let gcd_val = gcd(a, b);
		lcm = (lcm * arr[i]) / gcd_val;
	}

	return lcm;
}

console.log(solution([2, 6, 8, 14]));
