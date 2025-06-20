function solution(phone_number) {
    var answer = phone_number.substring(phone_number.length-4);
    let starCount = (phone_number.length-4);
    for(let i=0;i<starCount;i++){
        answer = "*"+answer;
    }

    return answer;
}

console.log(solution("01033334444"));