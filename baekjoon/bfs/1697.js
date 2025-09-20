const source = `5 17`;

const [N, K] = source.split(" ").map(Number);

const queue = [[[N], N]];
// console.log(queue);
const max = Math.max(N, K);
const visited = Array(max * 2).fill(false);
// console.log(visited, max);

let answer = 0;

let second = 0;

while (queue.length > 0) {
	const n = queue.shift();

	visited[n] = true;

	if (n === K) {
		answer = second;
		break;
	}

	const directions = [n - 1, n + 1, n * 2];

	for (const next of directions) {
		if (next >= 0 && next < visited.length && !visited[next]) {
			queue.push(next);
			visited[next] = true;
		}
	}
	second++;
}

// console.log(answer.join("->"));
console.log(answer);

// function solution(N, K) {
// 	if (N >= K) {
// 		// N이 K보다 크거나 같으면 -1로만 이동 가능
// 		return N - K;
// 	}

// 	const queue = [N];
// 	const visited = new Array(100001).fill(false);
// 	visited[N] = true;

// 	let time = 0;

// 	while (queue.length > 0) {
// 		const size = queue.length;

// 		// 현재 시간에서 갈 수 있는 모든 위치 처리
// 		for (let i = 0; i < size; i++) {
// 			const current = queue.shift();

// 			if (current === K) {
// 				return time;
// 			}

// 			// 세 가지 이동 방법
// 			const next = [current - 1, current + 1, current * 2];

// 			for (const pos of next) {
// 				if (pos >= 0 && pos <= 100000 && !visited[pos]) {
// 					visited[pos] = true;
// 					queue.push(pos);
// 				}
// 			}
// 		}

// 		time++;
// 	}

// 	return -1; // 도달 불가능한 경우
// }

// console.log(solution(5, 17));
