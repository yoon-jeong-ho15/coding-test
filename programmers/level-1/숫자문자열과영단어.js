function solution(s) {
    var answer = 0;
    let str = "";
    const map = {
        "zero":0,
        "one":1,
        "two":2,
        "three":3,
        "four":4,
        "five":5,
        "six":6,
        "seven":7,
        "eight":8,
        "nine":9
    }
    while(s.length>0){
        if(s[0]<=9){
            str += s[0];
            s = s.substring(1);
        }else{
            for(let i=3;i<=s.length;i++){
                let sub = s.substring(0,i);
                // console.log("sub : ",sub);
                // if(map[sub]) 으로 했는데, sub="zero" 일 때,
                // if(0)이라서 밑에 조건문이 실행이 안되고 무한 반복.
                if(sub in map){ 
                    str += map[sub];
                    s = s.substring(i);
                    break;
                }

            }
        }
    }
    // console.log(str);
    answer = Number(str);
    return answer;
}

console.log(solution("onezeroone"));