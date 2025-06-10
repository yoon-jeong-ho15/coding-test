function isValid(s){
    const stack = [];
    
    const parenthesesMap = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (parenthesesMap[char]) {
            stack.push(char); 
        } else {
            if (stack.length === 0) {
                return false;
            }

            const lastOpenBracket = stack.pop();

            if (parenthesesMap[lastOpenBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("(sdfsdf[asdfsdf]sdfsd)"));
console.log(isValid("(("));
// console.log(isValid("))"));