function solution(N, stages) {
    var answer = [];
    let map = new Map();

    stages = stages.sort((a,b)=>a-b);

    for(let i=0;i<stages.length;i++){
        if(map.has(stages[i])){
           map.set(stages[i],map.get(stages[i])+1);
        }else{
            map.set(stages[i],1);
        }
    }
    // console.log(map);

    let userCount = stages.length;
    for(let i=1;i<=N;i++){
        if(map.has(i)){
           let val = map.get(i);
            let ratio = val / userCount;
            userCount -= val;
            // console.log(`stage:${i} - userCount:${userCount}`); 
            map.set(i,ratio);
        }else{
            map.set(i,0);
        }
    }

    // console.log(map);

    for(let[key,val] of map.entries()){
        let inserted = false;
        for(let i=0;i<answer.length;i++){
            let a_key = answer[i];
            let a_val = map.get(a_key);
            if(val>a_val){
                answer.splice(i,0,key);
                inserted = true;
                break;
            }
        }
        if(!inserted) answer.push(key);
    }

    for(let i=0;i<answer.length;i++){
        if(answer[i]>N){
            answer.splice(i,1);
        }
    }
    return answer;
}

//클로드
function solutionC(N, stages) {
    let answer = [];
    let map = new Map();

    for(let stage of stages){
        // console.log(stage);
        map.set(stage,(map.get(stage)||0)+1);
    }
    console.log(map);

    let remainingPlayer = stages.length;
    let failureRates = [];
    for(let i = 1; i<=N;i++){
        let stuckedPlayer = map.get(i) || 0;
        let ratio = stuckedPlayer/remainingPlayer;
        failureRates.push({i,ratio});
    }
    console.log(failureRates);

    failureRates.sort((a,b)=>{
        if(a.ratio == b.ratio){
            return a.i - b.i;
        }else{
            return b.ratio - a.ratio;
        }
    })
    
    answer = failureRates.map(item=>item.i);
    return answer;
}

console.log(solutionC(5,[2,1,2,6,2,4,3,3]));
// console.log(solution(4,[4,4,4,4,4]));