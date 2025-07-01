function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length;i++){
        let a = commands[i][0];
        let b = commands[i][1];
        let c = commands[i][2];
        let arr = [];
        for(let j=a; j<=b;j++){
            arr.push(array[j-1]);
        }
        arr.sort((a,b)=>a-b);
        answer.push(arr[c-1])

    }
    return answer;
}

console.log(solution([1,5,2,6,3,7,4],[[2,5,3], [4,4,1], [1,7,3]]));
