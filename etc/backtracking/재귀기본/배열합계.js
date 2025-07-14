function solution(arr){
	function back(arr){
		if(arr.length==0){
			return 0;
		}
		let cur = arr.pop();
		console.log(cur,arr);
		let result = cur + back(arr);
		console.log(result);
		return result;
	}
	let answer = back(arr);
	return answer;
}

console.log(solution([1,2,3,4,5]));