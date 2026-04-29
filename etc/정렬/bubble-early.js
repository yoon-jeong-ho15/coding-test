const list = [25, 21, 22, 24, 23, 27, 26];

for (let i = 0; i < list.length; i++) {
	console.log(`${i} cycle - [${list}]`);
	let switched = false;

	for (let j = i; j < list.length - 1; j++) {
		let cur = list[j];
		let next = list[j + 1];

		if (next < cur) {
			list[j] = next;
			list[j + 1] = cur;
			switched = true;
		}
	}

	if (!switched) break;
}

console.log(list);
