function solution(scoville, K) {
    var answer = 0;
    let flag = false;
    
    while(scoville.length>1){
        let n = scoville.splice(0,1)[0];
        let m = scoville.splice(0,1)[0];
        console.log(n,m);
        let sum = n + m * 2;
        answer++;
        scoville.push(sum);
        scoville.sort((a,b)=>a-b);
        console.log(scoville);
        if(scoville[0]>K){
            flag=true;
            break;
        }
    }
    if(flag){
        return answer;
    }else{
        return -1;
    }
}

console.log(solution([1,2,3,9,10,12],7));
// console.log(solution([1,2,3,9,10,12],10));