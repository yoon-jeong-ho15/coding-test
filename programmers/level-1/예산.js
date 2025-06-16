function solution(d, budget) {
    var answer = 0;
    let arr = [];

    for(let i=0;i<d.length;i++){
        const n = d[i];
        let inserted = false;
        for(let j=0;j<arr.length;j++){
            const m = arr[j];
            if(n<=m) {
                arr.splice(j,0,n);
                inserted = true;
                break;
            }
        }
        if(!inserted) arr.push(n);
    }

    answer = arr.length;

    for(let i=0;i<arr.length;i++){
        budget -= arr[i];
        if(budget < 0) {
            answer = i;
            break;
        }
    }

    return answer;
}

console.log(solution([1,3,2,5,4],9));
console.log(solution([2,2,3,3],10));