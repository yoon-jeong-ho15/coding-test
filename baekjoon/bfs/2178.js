//https://www.acmicpc.net/problem/2178

const source = `4 6
101111
101010
101011
111011`;

const input = source.split("\n");
const [n, m] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((row) => row.split("").map(Number));
const visited = Array(n)
	.fill()
	.map(() => Array(m).fill(false));

const queue = [[0, 0, 1]];

const directions = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];

visited[0][0] = true;

let result = 0;

while (queue.length > 0) {
	const [r, c, dist] = queue.shift();

	if (r === n - 1 && c === m - 1) {
		result = dist;
		break;
	}

	for (const dir of directions) {
		const y = r + dir[0];
		const x = c + dir[1];

		if (
			x >= 0 &&
			y >= 0 &&
			x < m &&
			y < n &&
			!visited[y][x] &&
			maze[y][x] === 1
		) {
			visited[y][x] = true;
			queue.push([y, x, dist + 1]);
		}
	}
}

console.log(result);
