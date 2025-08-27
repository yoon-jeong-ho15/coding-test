// https://school.programmers.co.kr/learn/courses/30/lessons/42885

// 시간 초과
function solution2(people, limit) {
	var answer = 0;
	people.sort((a, b) => b - a);

	while (people.length > 0) {
		answer++;
		const heavy = people.shift();
		const light = people.pop();
		if (heavy + light > limit) {
			people.push(light);
		}
	}

	return answer;
}

// 투 포인터 방식
// shift의 문제는 원본 배열을 수정하면서 n^2 복잡도가 더해진다.
function solution(people, limit) {
	people.sort((a, b) => a - b);

	let left = 0;
	let right = people.length - 1;
	let boats = 0;

	while (left <= right) {
		boats++;
		const heavy = people[right--];

		if (left <= right && people[left] + heavy <= limit) {
			left++;
		}
	}

	return boats;
}

console.log(solution([70, 50, 80, 50], 100));
