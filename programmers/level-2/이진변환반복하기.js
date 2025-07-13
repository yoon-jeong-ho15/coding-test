function solution(s){
	const answer = [];
	let count = 0;
	let m = 0;

	while(s.length>1){
		let zeroCount = 0;
		for(let i=0;i<s.length;i++){
			if(s[i]==="0") zeroCount++;
		}
	 	let ss = s.length-zeroCount;
	 	m+= zeroCount;
		let temp = "";
		let b = 0;
		while(ss > 0 ){
			let l = ss % 2;
			temp = l + temp;
			ss = Math.floor(ss/2);
			b++;
		}
		s = temp;
		count++;
	}

	answer.push(count,m);
	return answer;
}

console.log(solution("110010101001"));