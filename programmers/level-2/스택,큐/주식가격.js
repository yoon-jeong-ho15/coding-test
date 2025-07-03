function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    let stack = [];

    for(let i=0;i<prices.length;i++){
        //스택에 맨 뒤에있는 숫자랑 하나씩 비교.
        while(stack.length > 0){
            let current = prices[i];
            let a = stack.pop();
            let compare = prices[a];
            if(compare > current || i==prices.length-1){
                answer[a] = i-a;
            }else{
                stack.push(a);
                break;
            }
        }

        // 비교대상이 없으면 스택에 넣는다.
        // [0,1,2,3,4] 순서대로 들어간다.

        stack.push(i);
    }

    return answer;
}

console.log(solution([1,2,3,2,3]));