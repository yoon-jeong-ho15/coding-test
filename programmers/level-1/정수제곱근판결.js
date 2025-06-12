function solution(n) {
    var answer = -1;
    let m = 0;

    for(let i=1; i<=n;i++){
        if(i**2==n){
            m = i+1;
            console.log(i,m);
            return m **2 ;
        }
    }
    return answer;
}

console.log(solution(1));
