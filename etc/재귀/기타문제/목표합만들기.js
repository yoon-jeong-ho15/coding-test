function solution(N,target){
	let result = [];

	function backtrack(i,arr){
		let sum = arr.reduce((a,b)=>a+b,0);
		if(sum===target){
			result.push([...arr]);
			return;
		}
		if(i>N || sum>target){
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

console.log(solution(4,5));