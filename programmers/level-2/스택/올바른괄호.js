function solution(s){
    var answer = true;
    let stack = [];

    for(let i=0;i<s.length;i++){
        let ch = s[i];
        if(ch=="("){
            stack.push(ch);
            // console.log(stack);
        }
        if(ch==")"){
            let recent = stack.pop();
            // console.log(recent);
            if(recent!="("){
                return false;
            }
        }
    }
    if(stack.length==0){
        return true;
    }else{
        return false;
    }
}

// console.log(solution("()()"));
// console.log(solution("(())()"));
console.log(solution(")()("));
// console.log(solution("(()("));