//https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
	var answer = -1;
	const my = maps.length;
	const mx = maps[0].length;

	// const visited = Array(5).fill(Array(5).fill(false));
	const visited = Array(my)
		.fill()
		.map(() => Array(mx).fill(false));
	// console.log(visited);

	const queue = [[0, 0, 1]];
	visited[0][0] = true;

	const directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	while (queue.length > 0) {
		const [y, x, dist] = queue.shift();
		// console.log(x, y, dist);
		if (x === mx - 1 && y === my - 1) {
			answer = dist;
			break;
		}

		for (const dir of directions) {
			const nx = x + dir[1];
			const ny = y + dir[0];

			if (nx < 0 || ny < 0 || nx > mx - 1 || ny > my - 1) continue;
			if (visited[ny][nx]) continue;
			if (maps[ny][nx] === 0) continue;

			visited[ny][nx] = true;
			queue.push([ny, nx, dist + 1]);
		}
	}

	return answer;
}

// console.log(
// 	solution([
// 		[1, 0, 1, 1, 1],
// 		[1, 0, 1, 0, 1],
// 		[1, 0, 1, 1, 1],
// 		[1, 1, 1, 0, 1],
// 		[0, 0, 0, 0, 1],
// 	]),
// );

console.log(
	solution([
		[1, 0, 1, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 1, 1],
		[1, 1, 1, 0, 0],
		[0, 0, 0, 0, 1],
	]),
);
