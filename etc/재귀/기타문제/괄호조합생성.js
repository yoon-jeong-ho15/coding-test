function solution(N) {
    let result = [];
    
    function backtrack(str, openCount, closeCount) {
    	//1. 성공조건
        if (openCount === N && closeCount === N) {
            result.push(str);
            return;
        }
        
        //2. 가지치기 - 사실상 아래 3번과 4번에 조건문으로 뿌려줬기 때문에 없어도 됨
        // if (openCount > N || closeCount > openCount) {
        //     return;
        // }
        
        //3. "(" 추가
        if (openCount < N) {
            backtrack(str + "(", openCount + 1, closeCount);
        }
        
        //4. ")" 추가
        if (closeCount < openCount) {
            backtrack(str + ")", openCount, closeCount + 1);
        }
    }
    
    backtrack("", 0, 0);
    return result;
}

console.log(solution(3));