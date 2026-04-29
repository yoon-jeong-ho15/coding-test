const list = [25, 21, 22, 24, 23, 27, 26];

for (let i = 0; i < list.length; i++) {
	console.log(`${i} cycle - [${list}]`);
	for (let j = i; j < list.length; j++) {
		let cur = list[j];
		let next;

		if (list[j + 1]) next = list[j + 1];

		if (next && next < cur) {
			list[j] = next;
			list[j + 1] = cur;
		}
	}
}

console.log(list);
