const source = `2 2
1 -1
-1 1`;

const input = source.split("\n");
const [m, n] = input[0].split(" ").map(Number);

let count = 0;

let queue = [];

const box = input.slice(1).map((row, r) =>
	row.split(" ").map((num, c) => {
		if (Number(num) === 0) count++;
		if (Number(num) === 1) queue.push([r, c]);
		return Number(num);
	}),
);

const directions = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];

let head = 0;
let days = 0;

while (queue.length > head) {
	const curSize = queue.length;
	let inserted = false;

	for (let i = head; i < curSize; i++) {
		const [r, c] = queue[i];

		for (const dir of directions) {
			const y = r + dir[0];
			const x = c + dir[1];

			if (y >= 0 && y < n && x >= 0 && x < m && box[y][x] === 0) {
				box[y][x] = 1;
				queue.push([y, x]);
				count--;
				insert = true;
			}
		}
	}

	if (inserted) days++;
	head = curSize;
}

if (count > 0) days = -1;

console.log(days);
