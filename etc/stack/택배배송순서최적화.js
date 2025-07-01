
function solution(importance, timeLeft, target){
	let answer = 0;
	let queue = []

	for(let i=0;i<importance.length;i++){
		queue.push({imp : (importance[i]*2)+(10-timeLeft[i]) ,i: i});
	}
	console.log(queue);

	let order = 0;

	while(queue.length>0){
		let current = queue.shift();
		let isHighest = true;

		for(let j=0;j<queue.length;j++){
			if(current.imp < queue[j].imp){
				isHighest = false;
			}
		}

		if(!isHighest){
			queue.push(current);
			for(let j=0;j<queue.length;j++){
				queue[j].imp += 1;
			}
		}else{
			order++;

			if(current.i==target){
				answer = order;
			}
		}
	}
	return answer;
}

console.log(solution([2,1,3],[5,3,4],0));
