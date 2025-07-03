function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>b-a);
    // console.log(citations);
    for(let i=1;i<=citations.length;i++){
        let count = 0;
        for(let j=0;j<citations.length;j++){
            let m = citations[j];
            if(m>=i) count++;
        }
        console.log("i",i,"count",count);
        if(count>=i){
            answer = i;
            console.log(answer);
        }
    }
    return answer;
}

console.log(solution([5,6,7,8]));