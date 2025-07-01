function solution2(temps){
	let answer=[];
	for(let i=0;i<temps.length;i++){
		let a = temps[i];
		let count = 0;
		for(let j=i+1;j<temps.length;j++){
			let b = temps[j];
			count++;
			if(a<b){
				answer.push(count);
				break;
			}else{
				if(j==temps.length-1){
					answer.push(0);
				}
			}
		}
		if(i==temps.length-1){
			answer.push(0);
		}
	}

	return answer;
}

// stack
function solution(temps) {
    let answer = new Array(temps.length).fill(0);
    let stack = [];
    
    for(let i = 0; i < temps.length; i++) {
        while(stack.length > 0 && temps[stack[stack.length-1]] < temps[i]) {
            let index = stack.pop();
            answer[index] = i - index;
        }
        stack.push(i);
    }
    
    return answer;
}

console.log(solution([23,24,25,21,19,22,26,23]));