function solution(n) {
    var answer = 0;
    let arr = [0,1,2];
    for(let i=3;i<=n;i++){
        let num = arr[i-2]+arr[i-1];
        arr.push(num);
    }
    console.log(arr);
    answer = arr[n]%1234567;
    return answer;
}

console.log(solution(10));