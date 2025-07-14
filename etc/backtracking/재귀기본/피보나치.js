function solution2(nn){
	let answer = 0;
	// console.log(nn);

	function backtrack(n){
		if(n<=2){
			return 1;
		}

		return backtrack(n-1) + backtrack(n-2); 
	}

	answer = backtrack(nn);
	return answer;
}

function solution(n){
	let answer = 0;
	let f1 = 1;
	let f2 = 1;
	for(let i=3;i<=n;i++){
		let temp = f1+f2;
		f1 = f2;
		f2 = temp;
		console.log(i,f1,temp);
	}
	answer = f2;
	return answer;
}

console.log(solution(6));