function solution(x) {
    var answer = true;
    const str = x+"";
    let sum = 0;
    console.log(str);

    for(let n of str){
        sum+= Number(n);
    }
    console.log(sum);

    if(x%sum != 0) return false;
    return answer;
}

console.log(solution(12));