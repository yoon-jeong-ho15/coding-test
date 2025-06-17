function solution(n) {
    var answer = 0;
    let ternary = "";
    let i = 0;
    let j = 0;

    // for(i;;i++){
    //     if((3**i)>=n) break;
    // }
    // '>='이 아니라 '>'여야 함.
    // 왜냐하면 1의 경우 i==0. 그래서 j가 음수가 된다.

    for(i;;i++){
        if((3**i)>n) break;
    }

    for(let j=i-1;j>=0;j--){
        let quotient = Math.floor(n/(3**j));
        ternary = ternary+(quotient+"");
        let rest = n%(3**j);
        n = rest;
    }
    console.log(ternary);

    for(let k=0;k<ternary.length;k++){
        answer += Number(ternary[k])*(3**k);
    }
    return answer;
}

// 방법 2: 한 번의 루프로 직접 계산 (최고 효율)
function solution2(n) {
    let answer = 0;
    
    if (n === 0) return "0";
    while (n > 0) {
        let digit = n % 3;
        answer = answer * 3 + digit; // Honer's Method
        // P(x) = a₃x³ + a₂x² + a₁x + a₀
        // P(x) = ((a₃x + a₂)x + a₁)x + a₀
        n = Math.floor(n / 3);
    }
    
    return answer;
}

function getTernary(n){
    let str = "";

    if (n === 0) return "0";
    while(n>0){
        let digit = n%3;
        str = digit + str;
        n = Math.floor(n/3);
    }
    return str;
}

function getReversedTernary(n){
    let str = "";

    if (n === 0) return "0";
    while(n>0){
        let digit = n%3;
        str += digit;
        n = Math.floor(n/3);
    }
    return str;

}

function func(n,b){
    let result = 0;
    let reversedResult = 0;
    let position = 0;
    let str = "";
    let reversed = "";

    while(n>0){
        let digit = n % b;
        str = digit + str;
        reversed += digit;
        result += digit * (b ** position);
        reversedResult = reversedResult * b + digit;
        n = Math.floor(n/b);
        position++;
    }
    console.log(str);
    console.log(reversed);
    console.log(result);
    console.log(reversedResult);
}

func(45,3);
// console.log(getTernary(46));
// console.log(getReversedTernary(46));
// console.log(solution2(46));
// console.log(getTernary(125));
// console.log(getReversedTernary(125));
// console.log(solution2(125));
// console.log(solution(8882));
// console.log(solution2(1));
