//https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
	var answer = "";
	for (let i = 1; i < food.length; i++) {
		for (let j = Math.floor(food[i] / 2); j > 0; j--) {
			answer += i;
		}
	}
	answer += "0";

	for (let i = food.length - 1; i > 0; i--) {
		for (let j = Math.floor(food[i] / 2); j > 0; j--) {
			answer += i;
		}
	}
	return answer;
}

// console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
