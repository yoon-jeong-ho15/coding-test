function solution(arr) {
    var answer = 0;
    for(let i=0; i<arr.length;i++){
        answer+=arr[i];
    }
    answer /= arr.length;
    return answer;
}

console.log(solution([1,2,3,4]));