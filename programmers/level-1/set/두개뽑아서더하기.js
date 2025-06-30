function solution2(numbers) {
    var answer = [];

    for(let i=0;i<numbers.length;i++){
        const n = numbers[i];
        for(let j=i+1;j<numbers.length;j++){
            const m = numbers[j];
            if(!answer.includes(n+m)) answer.push(n+m);
        }
    }
    answer.sort((a,b)=>a-b);
    return answer;
}

//셋 사용 
function solution(numbers) {
    const sums = new Set();
    let answer = [];
    let arr = [];

    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            sums.add(numbers[i] + numbers[j]);
            // set.add()는 겹치는건 자동으로 제외.
        }
    }
    console.log(sums);

    // arr = [...sums]을 직접구현
    for(let num of sums){
        arr.push(num);
    }
    console.log(arr);

    // answer = arr.sort((a,b)=>a-b)을 직접 구현
    for(let i=0;i<arr.length;i++){
        let n = arr[i];
        let inserted = false;

        for (let j=0;j<answer.length;j++){
            let m = answer[j];
            if (n<m){
                answer.splice(j,0,n);
                inserted = true;
                break;
            }
        }

        if(!inserted){
            answer.push(n);
        }
    }

    return answer;
}

// console.log(solution([2,1,3,4,1]));
// console.log(solution([5,0,2,7]));
console.log(solution([1,1,8,2,3]));
