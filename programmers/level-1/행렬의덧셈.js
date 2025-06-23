function solution(arr1, arr2) {
    var answer = [];
    for(let i=0;i<arr1.length;i++){
        let arrA = arr1[i];
        let arrB = arr2[i];
        console.log(arrA, arrB);
        let sumArr = [];
        for(let j=0;j<arrA.length;j++){
            sumArr.push(arrA[j]+arrB[j]);
        }
        answer.push(sumArr);
    }

    return answer;
}

console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]));
console.log(solution([[1],[2]],[[3],[4]]));
