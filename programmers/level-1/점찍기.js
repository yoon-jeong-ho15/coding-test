//https://school.programmers.co.kr/learn/courses/30/lessons/140107

//시간초과 정답
function solution9(k, d) {
    let counter = 0;
    for(let a=0;a<=d;a++){
    	for(let b=0;b<=d;b++){
    		const ak = (a*k)**2;
    		const bk = (b*k)**2;
    		const flag = ak+bk<=(d**2);
    		if(flag) {
    			console.log(`(${a},${b}) : ${ak} + ${bk} = ${ak+bk} <= ${d**2}`);
    			counter++;
    		}
    	}
    }
    return counter;
}

//개선됐지만 그래도 시간초과
function solution99(k,d) {
	//시간초과, a와 b를 줄여야
	let counter = 0;
	let v = d/k +1;
	console.log(`v : ${v}`);
    for(let a=0;a<=v;a++){
    	for(let b=0;b<=v;b++){
    		const ak = a*k;
    		const bk = b*k;
    		const flag = ak**2+bk**2<=(d**2);
    		if(flag) {
    			console.log(`(${a},${b})`);
    			console.log(`${ak**2} + ${bk**2} = ${ak**2+bk**2} <= ${d**2}`);
    			counter++;
    		}
    	}
    }
    return counter;
}


function solution(k, d) {
    let counter = 0;

    const v = Math.floor(d/k)+1;

    for(let a = 0; a < v; a++) {
        const remaining = d ** 2 - (a * k) ** 2;

        //가능한 점의 수
        //k=2,d=5 그리고 a=1인 경우.
        //d^2 >= (ak)^2 + (bk)^2? 인지를 확인한다.
        //25 >= (2)^2 + (2b)^2
        //25 - 4 >= (2b)^2
        //sqrt(21) = 4.5 >= 2b
        //b = 4.5/2 = 2
        //b의 값이 2개니까 가능한 점의 개수는 0,1,2 3개
        const maxB = Math.floor(Math.sqrt(remaining) / k);
        counter += (maxB+1);
    }
    return counter;
}




console.log(solution(1,5));
// console.log(solution(1,5));
// console.log(solution(2,4));