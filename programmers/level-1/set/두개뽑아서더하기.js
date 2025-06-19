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
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            sums.add(numbers[i] + numbers[j]);
        }
    }
    
    return Array.from(sums).sort((a, b) => a - b);
}

// console.log(solution([2,1,3,4,1]));
// console.log(solution([5,0,2,7]));
console.log(solution([1,1,8,2,3]));
