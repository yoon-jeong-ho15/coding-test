//https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
	var answer = 0;
	
	let bin = binaryConversion(n);

	const targetCount = countOnes(bin);

	while(true){
		bin = incrementBinary(bin);
		const count = countOnes(bin);
		if(count===targetCount)break;
	}
	
	answer = decimalConversion(bin);

	return answer;
}


function binaryConversion(number){
	let bin = [];
	while (number > 0) {
		const r = number % 2;
		bin = [r,...bin];
		number = Math.floor(number / 2);
	}
	return bin;
}

function countOnes(bin){
	return bin.reduce((acc,cur)=>{
		return cur===1?acc+1:acc;
	},0)
}

function incrementBinary(bin){
	let flag = true;
	let arr = Array(bin.length);
	for (let i = bin.length-1;i>=0;i--){
		const w = bin[i];
		if(flag){
			if(w===1){
				arr[i]=0;
				flag = true;
			}
			if(w===0){
				arr[i]=1;
				flag = false;
			}
		}else{
			arr[i] = w;
		}
		
	}
	
	if(flag){
		arr = [1,...arr];
	}

	return arr;
}

function decimalConversion(bin){
	let result=0;
	for(let i=0;i<bin.length;i++){
		const w = bin[bin.length-1-i];
		const num = w*(2**i);
		result+=num;
	}
	return result;
}

console.log(solution(78));
// console.log(incrementBinary([1,0,0,1,1,1,0]));



