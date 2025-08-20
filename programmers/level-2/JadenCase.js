//https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution2(s) {
  let answer = [];
  while (s.length > 0) {
    for (let i = 0; i < s.length; i++) {
      let ch = s[i];
      if (ch === " " || i === s.length - 1) {
        let str = "";
        for (let j = 0; j <= i; j++) {
          if (j == 0) {
            str += s[j].toUpperCase();
          } else {
            str += s[j].toLowerCase();
          }
        }
        if (i !== s.length - 1) {
          str = str.substring(0, str.length - 1);
        }
        s = s.substring(i + 1);
        answer.push(str);
        // console.log(str, s);
        break;
      }
    }
  }
  return answer.join(" ");
}

function solution(s) {
  let arr = s.split(" ").map((word) => {
    if (word.length === 0) return word;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  // console.log(arr);
  return arr.join(" ");
}

console.log(solution2("3people unFollowed me"));
// console.log(solution("for the last week"));
