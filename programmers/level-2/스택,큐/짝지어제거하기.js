// https://school.programmers.co.kr/learn/courses/30/lessons/12973

//정확도 18/18, 효율성 1/8
function solution2(s) {
	while (s.length > 0) {
		for (let i = 0; i < s.length; i++) {
			const ch1 = s[i];
			const ch2 = s[i + 1];
			// console.log(ch1, ch2);
			if (ch1 === ch2) {
				s = s.substring(0, i) + s.substring(i + 2);
				// console.log("s : ", s);
				break;
			}
			if (i === s.length - 1) {
				return 0;
			}
		}
	}
	return 1;
}

function solution(s) {
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		const ch = s[i];
		// console.log(ch);
		if (stack.length > 0 && stack[stack.length - 1] === ch) {
			stack.pop();
		} else {
			stack.push(ch);
		}
	}

	return stack.length > 0 ? 0 : 1;
}

// console.log(solution("baabaa"));
console.log(solution("cdcd"));
