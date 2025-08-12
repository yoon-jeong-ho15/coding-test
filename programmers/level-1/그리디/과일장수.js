//https://school.programmers.co.kr/learn/courses/30/lessons/135808\

function solution(k, m, score) {
    var answer = 0;
    let arr = [];
   	for(let i=0;i<Math.ceil(score.length/m);i++){
		arr.push([]);
   	}
    let sorted = [];
    let j = k;
    while(j>0){
    	for(let i=0;i<score.length;i++){
    		if (score[i]===j){
    			sorted.push(score[i]);
    		}
    	}
    	j--;
    }

    for(let i=0;i<sorted.length;i++){
    	let a = 0;
    	if(i>=m){
    		a = Math.floor(i/m);
    	}
    	// console.log(a);
    	arr[a].push(sorted[i]);
    }

    for(const box of arr){
    	if (box.length===m){
    		const price = box[box.length-1]*box.length;
    		answer += price;
    	}
    }

    return answer;
}

console.log(solution(3,4,[1,2,3,1,2,3,1]));
// console.log(solution(4,3,[4,1,2,2,4,4,4,4,1,2,4,2]));