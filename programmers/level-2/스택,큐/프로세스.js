function solution2(priorities, location) {
    var answer = 0;
    let arr = [];
    let max = 0;
    let maxIndex = 0;
    for(let i=0;i<priorities.length;i++){
        if(priorities[i]>max){
            max = priorities[i];
            maxIndex = i;
        }
    }
    console.log(maxIndex, max);
    for(let i=maxIndex;i<priorities.length;i++){
        let inserted = false;
        let n = priorities[i];
        for(let j=0;j<arr.length;j++){
            let m = priorities[arr[j]];
            if(n>m){
                arr.splice(j,0,i);
                inserted = true;
                break;
            }
        }
        if(!inserted) arr.push(i);
    }
    for(let i=0;i<maxIndex;i++){
        let inserted2 = false;
        let n = priorities[i];
        for (let j=0;j<arr.length;j++){
            let m = priorities[arr[j]];
            if(n>m){
                arr.splice(j,0,i);
                inserted = true;
                break;
            }
        }
        if(!inserted2) arr.push(i);
    }
    console.log(arr);

    for(let i=0;i<arr.length;i++){
        if(arr[i]==location){
            answer=i+1;
        }
    }
    return answer;
}

//스택사용
function solution(priorities, location) {
    let answer=0;
    let queue=[];
    for(let i=0; i<priorities.length;i++){
        queue.push(i);
    }
    // console.log(queue);

    let count = 0;
    while(queue.length>0){
        let a = queue.shift();
        let val = priorities[a];
        // console.log(a,val, queue);

        let isHighest = true;

        for(let j=0;j<queue.length;j++){
            let val2 = priorities[queue[j]];
            if(val2>val){
                isHighest = false;
                // console.log(j,val2);
                break;
            }
        }

        if(isHighest){
            count++;
            // console.log("count",count);
            if(a==location){
                break;
            }
        }else{
            queue.push(a);
            // console.log("push", queue);
        }
    }
    answer = count;
    return answer;
}

// console.log(solution([2,1,3,2],2));
console.log(solution([1,1,9,1,1,1],0));
