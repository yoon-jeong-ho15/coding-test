function solution(num){
	function back(n){
		if(n==1){
			return 1;
		}
		return n*back(n-1);
	};
	let answer = back(num);
	return answer;
}

console.log(solution(4));