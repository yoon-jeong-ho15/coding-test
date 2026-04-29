const list = [25, 26, 22, 24, 27, 23, 21];

for (let i = 1; i < list.length; i++) {
	let num = arr[i];
	let j = i - 1;

	while (j >= 0 && list[j] > num) {
		list[j + 1] = list[j];
		j--;
	}

	list[j + 1] = num;
}
