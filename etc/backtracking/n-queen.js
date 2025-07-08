// function solution(n){
// 	let arr = [];
// 	for(let i=0;i<n;i++){
// 		let arrr = [];
// 		for(let j=0;j<n;j++){
// 			// console.log(i,j);
// 			arr.push([i,j]);
// 		}
// 	}
// 	// console.log(arr);

// 	let answer = backtrack(0,arr,arr.length);
// 	return answer;
// }

// function backtrack(i,arr,max){
// 	if(i===max){
// 		return 0;
// 	}

// 	let count = 0;

// 	for(let c of arr){
// 		for(let a of arr){
// 			let isChecked = checkQueen(a,c);
// 			if(isChecked){
// 				count++;
// 			}
// 		}
// 	}

// 	return count;
// }

// function checkQueen(a,c){
// 	// console.log(a,c);
// 	if(a[0] === c[0] || a[1] === c[1]) return false;
// 	if(Math.abs(a[0]-c[0]) === Math.abs(a[1]-c[1])) return false;
// 	return true;
// }

// 최대배치 경우의수
function solution2(n){
	let answer = 0;
	let total = [];
	let result = new Set();
	for(let i=0;i<n;i++){
		let line = [];
		for(let j=0;j<n;j++){
			line.push([i,j]);
		}
		total.push(line);
	}

	function backtrack2(i, queens){
		if(i===n){
			result.add(JSON.stringify(queens));
			return;
		}

		let line = total[i];
		for(let cur of line){
			// console.log(cur);
			if(check(cur, queens)){
				queens.push(cur);
				backtrack2(i+1,queens);
				queens.pop();
			}
		}

	}

	backtrack2(0,[]);

	console.log(result);

	return answer;
}


function check(c, queens){
	// console.log(queens);
	for(let q of queens){
		if(c[0] === q[0] || c[1] === q[1]) return false;
		if(Math.abs(c[0]-q[0]) === Math.abs(c[1]-q[1])) return false;
	}
	return true;
}


function solution(n){
	let answer = 0;
	let total = [];
	let result = [];
	for(let i=0;i<n;i++){
		let line = [];
		for(let j=0;j<n;j++){
			line.push([i,j]);
		}
		total.push(line);
	}

	function backtrack(i,queens){
		if(i===n){
			result.push([...queens]);
			return;
		}

		let line = total[i];
		let flag = false;

		for(let cur of line){
			// console.log(cur);
			if(check(cur, queens)){
				flag = true;
				queens.push(cur);
				backtrack(i+1,queens);
				queens.pop();
			}

		}
		if(!flag){
			backtrack(i+1,queens);
		}	
	}

	backtrack(0,[]);
	console.log(result);
}


console.log(solution(4));