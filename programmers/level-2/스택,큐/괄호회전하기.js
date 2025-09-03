// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
	var answer = 0;
	for (let i = 0; i < s.length; i++) {
		const str = s.substr(i) + s.substr(0, i);
		// console.log(str);
		const result = check(str);
		// console.log(str, result);
		if (result) answer++;
	}

	return answer;
}

function check(str) {
	const bracket = {
		"(": ")",
		"{": "}",
		"[": "]",
	};
	const stack = [];
	for (let i = 0; i < str.length; i++) {
		const cur = str[i];
		if (bracket[cur]) {
			stack.push(bracket[cur]);
			// console.log(stack);
		} else {
			if (cur !== stack.pop()) {
				return false;
			}
		}
	}
	return stack.length === 0;
}

// console.log(solution("[](){}"));
console.log(solution("}]()[{"));
// console.log(solution("[)(]"));
// console.log(solution("}}}"));
