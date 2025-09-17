const source = `4 4
####
#JF#
#..#
#..#`;

const input = source.split("\n");
const [r, c] = input[0].split(" ");

const queue = [];
const fire = [];
const maze = input.slice(1).map((row, r) =>
	row.split("").map((item, c) => {
		if (item === "J") queue.push([r, c]);
		if (item === "F") fire.push([r, c]);
		return item;
	}),
);

console.log(maze);
console.log(queue);
console.log(fire);
