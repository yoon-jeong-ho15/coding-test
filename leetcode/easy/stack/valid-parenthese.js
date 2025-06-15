function isValid(str) {
  //스택
  const stack = [];

  //괄호 맵
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const parentheses = ["(", "{", "[", ")", "}", "]"];

  //괄호 뺀 문자 거르기
  let s = "";
  for (let i = 0; i < str.length; i++) {
    if (parentheses.includes(str[i])) s += str[i];
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const lastOpenBracket = stack.pop();

      if (map[lastOpenBracket] !== char) {
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
