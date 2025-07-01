function solution(buildings){
	let answer = [];
	let tallest = 0;

	for(let i=0;i<buildings.length;i++){
		if(buildings[i] > tallest){
			answer.push(true);
			tallest = buildings[i];
		}else{
			answer.push(false);
		}
	}

	return answer;
}

console.log(solution([3,7,1,4,6,2]));