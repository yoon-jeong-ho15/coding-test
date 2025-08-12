// https://school.programmers.co.kr/learn/courses/30/lessons/12921

// 시간초과 7
function solution2(n) {
    var answer = 0;
    let arr = [];
    for(let i = 2;i<=n;i++){
    	let flag = true;
    	for(let j = 2;j<i;j++){
    		if(i%j===0){
    			flag = false;
    			break;
    		}
    	}
    	if(flag) arr.push(i);
    }
    // console.log(arr);
    return arr.length;
}

// 시간초과 5개
function solution3(n){
	let arr = [];
	for(let i = 2;i<=n;i++){
    	let flag = true;
    	for(const pn of arr){
    		if(i%pn===0){
    			flag = false;
    			break;
    		}
    	}
    	if(flag) arr.push(i);
    }
    // console.log(arr);
    return arr.length;
}

function solution(n) {
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for(let i = 2; i * i <= n; i++) {
        if(isPrime[i]) {
            for(let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
   	let arr = [];
   	for (let i=2;i<isPrime.length;i++){
   		if(isPrime[i]){
   			arr.push(i);
   		}
   	}
   	// console.log(arr);
    return arr.length;
}

// console.log(solution(1000));
// console.log(solution(5));
console.log(solution(1000000));
