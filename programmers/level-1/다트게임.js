function solution(dartResult) {
    var answer = 0;
    let result = [];

    while(dartResult.length>0){
        let char = dartResult[0];
        if(!isNaN(Number(char))){
            for(let i=1;i<dartResult.length;i++){
                let char2 = dartResult[i];
                if(!isNaN(Number(char2))){
                    // console.log(char2, "ff")
                    // console.log(dartResult);
                    let str = dartResult.substring(0,i);
                    // console.log(str);
                    result.push(str);
                    dartResult = dartResult.replace(str,"");
                    break;
                }else if(i==dartResult.length-1){
                    // console.log(dartResult);
                    result.push(dartResult);
                    dartResult = "";
                    break;
                }
            }
        }
    }
    // console.log(result);
    for(let i=0;i<result.length;i++){
        if (result[i].length==1){
            result[i+1] = result[i]+result[i+1];
            result.splice(i,1);
        }
    }
    // console.log(result);

    let result2=[];
    for(let i=0;i<result.length;i++){
        let score = 0;
        let basescore = "";
        let bonus="";
        let option="";
        for(let j=0;j<result[i].length;j++){
            if(!isNaN(Number(result[i][j]))){
                basescore += result[i][j];
            }
            if(result[i][j]=="S") score = basescore ** 1;
            if(result[i][j]=="D") score = basescore ** 2;
            if(result[i][j]=="T") score = basescore ** 3;
            if(result[i][j]=="*") option = "*";
            if(result[i][j]=="#") score = 0 - score;
        }
        result2.push({score,option});

    }
    // console.log(result2);

    for(let i=0;i<result2.length;i++){
        let opt = result2[i].option;
        if(opt){
            if(result2[i-1]){
                // console.log(result2[i].score);
                result2[i-1].score *= 2;
            }
            // console.log(result2[i-1].score);
            result2[i].score *= 2;
        }
    }
    // console.log(result2);

    for(let i=0;i<result2.length;i++){
        answer += result2[i].score;
    }
    return answer;
}

function solutionC(dartResult) {
    // 정규식을 사용하여 한 번에 모든 라운드를 파싱
    const rounds = dartResult.match(/\d+[SDT][*#]*/g);
    console.log(rounds);
    const scores = rounds.map(round => {
        // 숫자 부분 추출
        const scoreMatch = round.match(/(\d+)/);
        const baseScore = parseInt(scoreMatch[1]);
        
        // 배수 계산 (S=1, D=2, T=3)
        let multiplier = 1;
        if (round.includes('D')) multiplier = 2;
        else if (round.includes('T')) multiplier = 3;
        
        // 기본 점수 계산
        let score = baseScore ** multiplier;
        
        // 아차상(#) 처리
        if (round.includes('#')) score = -score;
        
        // 스타상(*) 여부 저장
        const hasStar = round.includes('*');
        
        return { score, hasStar };
    });
    
    // 스타상(*) 효과 적용
    for (let i = 0; i < scores.length; i++) {
        if (scores[i].hasStar) {
            // 현재 라운드 2배
            scores[i].score *= 2;
            // 이전 라운드도 2배 (존재하면)
            if (i > 0) {
                scores[i - 1].score *= 2;
            }
        }
    }
    
    // 총합 계산
    return scores.reduce((total, round) => total + round.score, 0);
}
console.log(solutionC("1S2D*3T"));
// console.log(solution("1D2S#10S"));
// console.log(solution("1S*2T*3S"));
