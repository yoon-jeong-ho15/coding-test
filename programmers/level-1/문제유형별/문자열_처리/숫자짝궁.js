//https://school.programmers.co.kr/learn/courses/30/lessons/131128

//x,y
function solution2(X, Y) {
    var answer = "-1";

    //X의 숫자들 찾기
    const xArr = X.split("");

    //Y의 숫자들 찾기
    const yArr = Y.split("");
    
    //둘 사이에 겹치는 숫자 찾기.
    // for(let i=0;i<xArr.length;i++){
    // 	console.log(i,":", xArr[i]);
    // 	if(yArr.includes(xArr[i])){
    // 		const index = yArr.indexOf(xArr[i]);
    // 		yArr.splice(index,1);
    // 	}else{
    // 		xArr.splice(i,1);
    // 	}
    // 	console.log(xArr,yArr);
    // }
    //splice()사용의 문제점. 배열의 길이가 줄어들지만 i의 값은 그대로 늘어나서 xArr.splice를 하게되면 다음 숫자는 건너뛰게 됨.

    for(let i=xArr.length-1;i>=0;i--){
    	console.log(i,":", xArr[i]);
		if(yArr.includes(xArr[i])){
    		const index = yArr.indexOf(xArr[i]);
    		yArr.splice(index,1);
    	}else{
    		xArr.splice(i,1);
    	}
    	console.log(xArr,yArr);
    }

    if(xArr.length>0){
	   	//xArr 정렬
    	xArr.sort((a,b)=>b-a);
    	answer=xArr.join("");

		let sum = 0;
        for(let i=0; i<xArr.length;i++){
            sum += xArr[i];
        }
        if (sum==0) return "0";

    	return answer;
    }


    //겹치는 숫자들 중에 최소값
    return answer;
}

function solution(X,Y){
	var answer = "";

    //X의 숫자들 찾기
    const xArr = X.split("");

    //Y의 숫자들 찾기
    const yArr = Y.split("");

    let xMap = new Map;
    let yMap = new Map;

    //xArr을 숫자별로 뭉쳐 xMap을 만들기
    for(let i=0; i<xArr.length;i++){
    	if(xMap.has(xArr[i])){
    		const j = xMap.get(xArr[i]);
    		xMap.set(xArr[i],j+1);
    	}else{
    		xMap.set(xArr[i],1);
    	}
    }
    // console.log(xMap);

    //yMap
    for(let i=0; i<yArr.length;i++){
    	if(yMap.has(yArr[i])){
    		const j = yMap.get(yArr[i]);
    		yMap.set(yArr[i],j+1);
    	}else{
    		yMap.set(yArr[i],1);
    	}
    }
    // console.log(yMap);

    for(let int=9; int>=0;int--){
    	const i = int+"";
    	// console.log("i:",i);
    	if(xMap.has(i)&&yMap.has(i)){
    		const j = xMap.get(i) > yMap.get(i)? yMap.get(i): xMap.get(i);
    		// console.log("j:",j);
    		for (let k=0; k<j;k++){
    			answer += i;
    		}
    		// console.log("answer:",answer);
    	}
    }
    if (answer=="") return "-1";
    let sum = 0;
    for(let i=0;i<answer.length;i++){
    	sum += Number(answer[i]);
    }
    return sum==0? "0":answer;
}

// console.log(solution("5525","1255"));
// console.log(solution("100","2345"));
// console.log(solution("100","203045"));
// console.log(solution("12321","42531"));
// console.log(solution("112233","332211"));
// console.log(solution("10203","30201"));
console.log(solution("1020","2001"));

