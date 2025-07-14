function solution(num){
	let a = [];
	let b = [];
	let c = [];
	for(let i=num;i>0;i--){
		a.push(i);
	}
	let count=0;
	function backtrack(n,from,aux,to){ // a,b,c
		if(n==1){
			let cur = from.pop();
			to.push(cur);
			count++;
			return;
		}

		backtrack(n-1,from,to,aux); // a,c,b
		
		let cur = from.pop();
		to.push(cur);
		count++;

		backtrack(n-1,aux,from,to); // b,c,a
	}

	backtrack(num,a,b,c);
	return count;
}

console.log(solution(3));