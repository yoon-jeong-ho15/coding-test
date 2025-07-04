function solution(K, user_scores) {
    var answer = 0;
    let result = []; // 현재 랭킹표
    let prev = []; // 비교용

    for(let i=0;i<user_scores.length;i++){
        let user = user_scores[i].split(" ")[0];
        let score = Number(user_scores[i].split(" ")[1]);
        // console.log(user,score);
        
        let existing = -1; // 결과물에 있는지 확인
        for(let k=0; k<result.length; k++){
            let exist = result[k][1];
            if(exist == user){
                existing = k;
                break;
            }
        }

        if(existing != -1){ 
            let existS = result[existing][0];
            console.log("exsitsS",existS);
            if(score <= existS){
                continue; //새로 들어온 같은 유저 점수가 기존 점수 이하라면
            }
            result.splice(existing, 1); //해당 유저 일단 제거
        }

        let inserted = false;
        for(let j=0;j<result.length;j++){
            let compare = result[j][0]; //점수 가져오기

            if(score>compare){
                result.splice(j,0,[score,user]); //
                inserted = true;
                // console.log("inserted", result);
                break;
            }else if(score==compare){
                // result.splice(j+1,0,[score,user]);
                // inserted = true;
                // // console.log("inserted", result);
                // break;
            }
        }

        //미리 삽입되지 않았다면 맨 뒤로.
        if(!inserted){
            result.push([score,user]);
            console.log("!inserted",result);
        }

        //result에서 사람 이름만 가져오기
        let cur = result.slice(0, K).map(item => item[1]);
        // console.log(prev, cur);
        
        let isChanged = prev.length !== cur.length;
        
        for(let k = 0; k < prev.length; k++){
            if(prev[k] !== cur[k]){ 
                isChanged = true;
                break;
            }
        }
        
        if(isChanged){
            answer++;
            prev = [...cur]; // 나중에 비교할 prev를 지금 가져온 cur로 덮어씌우기.
            // console.log(prev);
        }
    }

    // console.log(result);
    return answer;
}

const test1=["alex111 100", "cheries2 200", "coco 150", "luna 100", "alex111 120", "coco 300", "cheries2 110"];
const test2=["alex111 100", "cheries2 200", "alex111 200", "cheries2 150", "coco 50", "coco 200"];

console.log(solution(3,test2));