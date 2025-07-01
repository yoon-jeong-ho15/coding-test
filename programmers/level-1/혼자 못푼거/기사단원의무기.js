function solution2(number, limit, power) {
    var answer = 0;
    let arr = [];
    for(let i=1;i<=number;i++){
        let count = 0;
        for(let j=1;j<=i;j++){
            if(i % j ==0){
                count++;
            }
        }
        arr.push(count);
    }
    for(let i=0;i<arr.length;i++){
        let atk = arr[i];
        if(atk>limit){
            answer += power;
        }else{
            answer += atk;
        }
    }
    return answer;
}

//limit이 큰 경우 무력함
function solution3(number, limit, power) {
    var answer = 0;
    for(let i=1;i<=number;i++){
        let count = 0;
        for(let j=1;j<=i;j++){
            if(i % j ==0){
                count++;
            }
            if(count>limit){
                count = power;
                break;
            }
        }
        answer += count;
    }

    return answer;
}

// j*j 까지만 반복하기
// j<=i 까지 돌리면 쓸모없는 반복이 계속됨.
// i=36일때, j는 1,2,3,4,6,9,12,18,36 에서 count++를 한다.
// 그런데 6을 제외한 모든 숫자는 j * x 를 곱했을 때 36이 된다는 거니까, 약수가 2개 있음을 의미.
// 그래서 6전 까지 모든 약수의 순서때 count+=2 를 해주고
// 36의 루트값인 6까지만 반복문을 돌려주면 되는것이다. 
function solution(number, limit, power){
var answer = 0;
    for(let i = 1; i <= number; i++){
        let count = 0;

        for(let j = 1; j * j <= i; j++){
            if(i % j === 0){
                if(j * j === i) {
                    count++; 
                } else {
                    count += 2; 
                }
                
                if(count > limit){
                    count = power;
                    break;
                }
            }
        }
        answer += count;
    }
    return answer;
}

console.log(solution(100000,3,2));