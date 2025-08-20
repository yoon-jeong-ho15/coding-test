// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
    var answer = 0;
    let arr = [];
    let i = 0;
    while(i<s.length){
    	let ch = s[i];
    	// console.log(`ch : ${ch}`);
    	let ic = 0;
    	let jc = 0;
    	for(let j = i;j<s.length;j++){
    		let ch2 = s[j];
    		// console.log(`ch2 : ${ch2}`);
    		if(ch===ch2){	
    			ic++;
    			// console.log(`ic++ : ${ic}`);
    		}else{
    			jc++;
    			// console.log(`jc++ : ${jc}`);
    		}
			if((ic!==0 && jc===ic)|| j===s.length-1){
				let str = s.substring(i,j+1);
				arr.push(str);
				// console.log(arr);
				i=j+1;
				break;
    		}

    	}
    }
    // console.log(arr);
    return arr.length;
}

// console.log(solution("banana"));
// console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba"));