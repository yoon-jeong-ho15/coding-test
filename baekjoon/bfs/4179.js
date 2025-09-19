const source = `4 4
####
#JF#
#..#
#..#`;

const input = source.split("\n");
const [R, C] = input[0].split(" ").map(Number);

const queue = [];
const fire = [];
const exit = Array(R)
	.fill()
	.map(() => Array(C).fill(false));

const maze = input.slice(1).map((row, r) =>
	row.split("").map((item, c) => {
		if (
			(c === 0 || c === C - 1 || r === 0 || r === R - 1) &&
			item !== "#"
		) {
			exit[r][c] = true;
		}
		if (item === "J") queue.push([r, c, 0]);
		if (item === "F") fire.push([r, c]);
		return item;
	}),
);

const directions = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];

let answer = [];
let isOut = false;

// console.log(maze);
// console.log("queue :", queue);
// console.log("fire :", fire);
// console.log("exit :", exit);
let head = 0;

while (queue.length > 0) {
	const [r, c, d] = queue.shift();

	// console.log(r, c, exit[r][c]);
	if (exit[r][c]) {
		answer = d + 1;
		isOut = true;
		break;
	}

	for (const dir of directions) {
		const y = r + dir[0];
		const x = c + dir[1];

		const check1 = y >= 0 && y < R && x >= 0 && x < C;
		// console.log("check1 :", x, y, check1);
		if (check1 && maze[y][x] === ".") {
			queue.push([y, x, d + 1]);
		}
	}

	const max = fire.length;
	for (let i = head; i < max; i++) {
		const [fr, fc] = fire[i];
		// console.log("fire", fr, fc);
		for (const dir of directions) {
			const y = fr + dir[0];
			const x = fc + dir[1];

			const check2 = y >= 0 && y < R && x >= 0 && x < C;
			// console.log("check2 :", x, y, check2);
			if (check2 && maze[y][x] !== "#" && maze[y][x] !== "F") {
				fire.push([y, x]);
				maze[y][x] = "F";
			}
		}
	}
	head = max;
}

console.log(isOut ? answer : "IMPOSSIBLE");
