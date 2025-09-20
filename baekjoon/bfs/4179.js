const source = `4 4
####
#JF#
#..#
#..#`;

const input = source.split("\n");
const [R, C] = input[0].split(" ").map(Number);

const queue = [];
const fires = [];
const visited = Array(R)
	.fill()
	.map(() => Array(C).fill(false));
// console.log(visited);
const fireTime = Array(R)
	.fill()
	.map(() => Array(C).fill(Infinity));

const maze = input.slice(1).map((row, r) =>
	row.split("").map((item, c) => {
		if (item === "J") {
			queue.push([r, c, 0]);
			visited[r][c] = true;
		}
		if (item === "F") {
			fires.push([r, c, 0]);
			fireTime[r][c] = 0;
		}
		return item;
	}),
);

// console.log(queue, fires);
// console.log(maze);

const directions = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];

while (fires.length > 0) {
	const [r, c, d] = fires.shift();

	for (const [dy, dx] of directions) {
		const y = r + dy;
		const x = c + dx;

		const check = y >= 0 && x >= 0 && y < R && x < C;

		if (check && maze[y][x] !== "#" && fireTime[y][x] === Infinity) {
			fires.push([y, x, d + 1]);
			fireTime[y][x] = d + 1;
		}
	}
}
// console.log(fireTime);

let answer = "IMPOSSIBLE";
let found = false;
while (queue.length > 0 && !found) {
	const [r, c, d] = queue.shift();

	for (const [dy, dx] of directions) {
		const y = r + dy;
		const x = c + dx;

		const check = y >= 0 && x >= 0 && y < R && x < C;
		if (!check) {
			answer = d + 1;
			found = true;
			break;
		}
		if (
			check &&
			!visited[y][x] &&
			maze[y][x] === "." &&
			d + 1 < fireTime[y][x]
		) {
			visited[y][x] = true;
			queue.push([y, x, d + 1]);
		}
	}
}

console.log(answer);
