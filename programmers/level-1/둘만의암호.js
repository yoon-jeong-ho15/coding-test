// https://school.programmers.co.kr/learn/courses/30/lessons/155652
// abcdefghijklmnopqrstuvwxyz

// 1차 78.9

function solution(s, skip, index) {
    var answer = '';
    for(let ch of s){
    	let n = ch.charCodeAt();
    	// console.log(n);
    	let i = 1;
    	let j = 0;

    	while (true){
    		let m = n+i>122? ((n+i-97)%26)+97:n+i;
    		let a = String.fromCharCode(m);
    		// console.log(a);
    		if(!skip.includes(a)){
    			j++;
    			// console.log(`${i}, ${j}, !skip.includes(${a})`);
    		}
    		if(j===index){
    			answer += a;
    			break;
    		}
    		i++;
    	}
    }
    return answer;
}


console.log(solution("aukks","wbqd",5));
