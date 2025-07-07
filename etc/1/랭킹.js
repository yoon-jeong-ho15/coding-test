// function solution(K, user_scores) {
//     var answer = 0;
//     let result = []; // 현재 랭킹표
//     let prev = []; // 비교용

//     for(let i=0;i<user_scores.length;i++){
//         let user = user_scores[i].split(" ")[0];
//         let score = Number(user_scores[i].split(" ")[1]);
//         // console.log(user,score);
        
//         let existing = -1; //해당 유저가 랭킹표에 있는지 확인
//         for(let k=0; k<result.length; k++){
//             let exist = result[k][1];
//             if(exist == user){
//                 existing = k;
//                 break;
//             }
//         }

//         //해당 유저가 랭킹표에 있다면.
//         if(existing != -1){ 
//             let existS = result[existing][0];
//             // console.log("exsitsS",existS);
//             if(score <= existS){
//                 //새로 들어온 점수가 기존 점수 이하라면 넘어감
//                 continue; 
//             }
//             //새로운 점수가 더 높다면 해당 유저 일단 제거
//             result.splice(existing, 1); 
//         }

//         let inserted = false;
//         for(let j=0;j<result.length;j++){
//             //랭킹표에서 점수 가져와서 비교
//             let compare = result[j][0];

//             //현재 점수가 높으면 그 위치에 삽입
//             if(score>compare){
//                 result.splice(j,0,[score,user]); //
//                 inserted = true;
//                 // console.log("inserted", result);
//                 break;
//             }else if(score==compare){
//                 // result.splice(j+1,0,[score,user]);
//                 // inserted = true;
//                 // // console.log("inserted", result);
//                 // break;
//             }
//         }

//         //위에서 삽입되지 않았다면 맨 뒤로.
//         if(!inserted){
//             result.push([score,user]);
//             // console.log("!inserted",result);
//         }

//         //result에서 사람 이름만 가져오기
//         let cur = result.slice(0, K).map(item => item[1]);
//         // console.log(prev, cur);
        
//         let isChanged = prev.length !== cur.length;
        
//         for(let k = 0; k < prev.length; k++){
//             if(prev[k] !== cur[k]){ 
//                 isChanged = true;
//                 break;
//             }
//         }
        
//         if(isChanged){
//             answer++;
//             // 나중에 비교할 prev를 지금 가져온 cur로 덮어씌우기.
//             prev = [...cur]; 
//             // console.log(prev);
//         }
//     }

//     // console.log(result);
//     return answer;
// }

function solution(K, user_scores){
    let answer = 0;
    let result=[];

    for(let i=0;i<user_scores.length;i++){
        let [user,score] = user_scores[i].split(" ");
        score = parseInt(score);
        console.log("==========")
        console.log(user,score);

        let prev =[];
        for(let j=0;j<K;j++){
            prev.push(result[j]?result[j]:[0,0]);
        }
        console.log("prev",prev);

        let isChanged = false;
        let existing = -1;

        for(let j=0;j<result.length;j++){
            let exist = result[j][0];
            if(exist === user){
                existing = j;
                break;
            }
        }

        if(existing !== -1){
            let compare = result[existing][1];
            if(score > compare){
                result.splice(existing,1);
            }else{
                continue;
            }
        }

        let isInserted = false;
        for(let k=0;k<result.length;k++){
            let compare = result[k][1];
            if(score>compare){
                result.splice(k,0,[user,score]);
                isInserted = true;
                break;
            }
        }

        if(!isInserted){
            result.push([user,score]);
        }

        let cur=[];
        for(let j=0;j<K;j++){
            cur.push(result[j]?result[j]:[0,0]);
        }
        console.log("cur",cur);

        
        for(let j=0;j<K;j++){
            let c= cur[j];
            let p = prev[j];

            if(c[0] !== p[0] || c[1] !== p[1]){
                isChanged = true;
            }
        }
        
        if(isChanged){
            answer++;
            console.log("answer",answer);
        }
        // console.log(result);
    }

    return answer;
}

const test1=["alex111 100", "cheries2 200", "coco 150", "luna 100", "alex111 120", "coco 300", "cheries2 110"];
const test2=["alex111 100", "cheries2 200", "alex111 200", "cheries2 150", "coco 50", "coco 200"];

console.log(solution(3,test1));