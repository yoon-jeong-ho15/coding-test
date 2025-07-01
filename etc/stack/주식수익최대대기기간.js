function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    let stack = [];
    
    for(let i = 0; i < prices.length; i++) {
        while(stack.length > 0) {
	    	let prevPrice = prices[stack[stack.length-1]];
    		let currPrice = prices[i];
    		if(prevPrice*1.1 < currPrice){
    			let prevIndex = stack.pop();
            	answer[prevIndex] = i - prevIndex;
    		}else{
    			break;
    		}
        }
        stack.push(i);
    }
    
    return answer;
}

console.log(solution([100,105,90,95,120,85,130]));