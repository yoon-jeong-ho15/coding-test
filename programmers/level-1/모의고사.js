function solution(answers) {
    var answer = [];
    let first = [1,2,3,4,5];
    let second = [2,1,2,3,2,4,2,5];
    let third = [3,3,1,1,2,2,4,4,5,5];
    let counts = {
        1:0, 2:0, 3:0
    }

    for(let i=0;i<answers.length;i++){
        let n = answers[i];
        if(n==first[i%first.length]) counts[1]++;
        if(n==second[i%second.length]) counts[2]++;
        if(n==third[i%third.length]) counts[3]++;
    }   

    // console.log(counts);
    let max = 0;
    for(let val of Object.values(counts)){
        max = val > max? val : max;
    }
    // console.log(max);

    for(let i=1; i<=3;i++){
        console.log(counts[i]);
        if(counts[i]==max){
            answer.push(i);
        } 
    }


    // 이건 제일 많이 맞은 학생을 넣는게 아니라 순서대로 넣어서 오답.
    // for(let [key,val] of Object.entries(counts)){
    //     console.log(key,val);
    //     if(val != 0){
    //         let inserted = false;
    //         for(let j=0;j<answer.length;j++){
    //             let m = answer[j]+"";
    //             if(val>counts[m]){
    //                 answer.splice(j,0,Number(key));
    //                 inserted = true;
    //                 break;
    //             }
    //         }
    //         if(!inserted) answer.push(Number(key));
    //     }
    // }

    return answer;
}

console.log(solution([1,2,3,4,5,2]));
// console.log(solution([1,3,2,4,2]));
// console.log(solution([3,3,1,1,2,2,4,4,5,5]));