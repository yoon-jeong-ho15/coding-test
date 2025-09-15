//https://www.acmicpc.net/problem/1926

const source = `6 5
1 1 0 1 1
0 1 1 0 0
0 0 0 0 0
1 0 1 1 1
0 0 1 1 1
0 0 1 1 1`;

const source2 = `6 6
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0`;

const input = source2.split("\n");
// console.log(input);

const [n, m] = input[0].split(" ").map(Number);
// console.log(n, m);
const picture = input.slice(1).map((row) => {
	return row.split(" ").map(Number);
});
// console.log(picture);
const visited = Array(n)
	.fill()
	.map(() => Array(m).fill(false));
// console.log(visited);

const result = [];

const findSize = (queue) => {
	// console.log(queue);
	let size = 1;

	const directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	while (queue.length > 0) {
		const [i, j] = queue.shift();

		for (const dir of directions) {
			const y = i + dir[0];
			const x = j + dir[1];

			if (
				x >= 0 &&
				y >= 0 &&
				x < m &&
				y < n &&
				picture[y][x] === 1 &&
				!visited[y][x]
			) {
				visited[y][x] = true;
				queue.push([y, x]);
				size++;
			}
		}
	}

	return size;
};

for (let i = 0; i < n; i++) {
	for (let j = 0; j < m; j++) {
		if (!visited[i][j]) {
			visited[i][j] = true;
			if (picture[i][j] === 1) {
				const size = findSize([[i, j]]);
				result.push(size);
			}
		}
	}
}

console.log(result.length);
console.log(result.length > 0 ? Math.max(...result) : 0);
