//https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  let answer = 0;
  const str = String(n);
  // console.log(str.length);

  for (let i = 0; i < str.length; i++) {
    const j = Number(str.charAt(i));
    answer += j;
  }
  // console.log("answer : ", answer);
  return answer;
}

solution(123);
