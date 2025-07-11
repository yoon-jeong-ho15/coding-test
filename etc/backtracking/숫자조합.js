function solution(N,K){
	let result = [];

	function backtrack(i,arr){
		if(arr.length===K){
			result.push([...arr]);
			return;
		}

		if(i>N){
			return;
		}

		backtrack(i+1,arr);

		arr.push(i);
		backtrack(i+1,arr);
		arr.pop();
	}

	backtrack(1,[]);

	return result;
}

console.log(solution(4,2));