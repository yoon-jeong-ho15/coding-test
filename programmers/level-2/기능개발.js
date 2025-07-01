// 구현/시뮬레이션 방법 사
function solution(progresses, speeds) {
    var answer = [];
    let days = 0;
    while(progresses.length>0){
        for(let i=0;i<speeds.length;i++){
            progresses[i] = progresses[i]+speeds[i];
        }
        days++;
        // console.log(`days:${days}`);
        if(progresses[0]>=100){
            let count=0;
            while(progresses[0]>=100){
                progresses.splice(0,1);
                console.log(progresses);
                speeds.splice(0,1);
                console.log(speeds);
                count++;
                console.log(count);
            }
            answer.push(count);
        }
    }

    return answer;
}

// 스택/큐 사용
function solution2(progresses, speeds) {
    let answer = [];
    let queue = [];
    for (let i=0;i<progresses.length;i++){
        queue.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    console.log(queue);

    while(queue.length>0){
        let day = queue.shift();
        console.log(day);
        let count = 1;
        while(queue[0]<=day){
            queue.shift();
            count++;
        }
        answer.push(count);
    }
    return answer;
}


// console.log(solution2([93,30,55],[1,30,5]));
console.log(solution2([95,90,99,99,80,99],[1,1,1,1,1,1]));
