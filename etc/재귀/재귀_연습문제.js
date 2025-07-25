// =================================================================
// 문제 1: 최대공약수 구하기 (유클리드 호제법)
// =================================================================
/*
문제 설명:
두 정수 a와 b의 최대공약수(GCD)를 재귀적으로 구하는 함수를 작성하세요.
유클리드 호제법의 원리는 다음과 같습니다.
1. a를 b로 나눈 나머지를 r이라고 합니다.
2. 만약 r이 0이라면, b가 최대공약수입니다.
3. 만약 r이 0이 아니라면, a에 b를, b에 r을 대입하여 1번 과정을 반복합니다.
재귀 함수는 이 과정을 자연스럽게 표현할 수 있습니다.

입출력 예시:
- 입력: a = 48, b = 18
- 출력: 6

- 입력: a = 9, b = 28
- 출력: 1
*/
function solution1(a, b) {
  function findGCD(max, min) {
    const r = max % min;
    if(r===0){
      return min;
    }
    return findGCD(min,r);
  }
  let temp;
  if(a<b){
    temp = b;
    b = a;
    a = temp;
  }
  // console.log(a,b);
  return findGCD(a, b);
}

// console.log("최대공약수 (48, 18):", solution1(48, 18));
// console.log("최대공약수 (9, 28):", solution1(9, 28));


// =================================================================
// 문제 2: 문자열 뒤집기
// =================================================================
/*
문제 설명:
주어진 문자열을 재귀적으로 뒤집는 함수를 작성하세요.

입출력 예시:
- 입력: "hello"
- 출력: "olleh"

- 입력: "world"
- 출력: "dlrow"
*/
function solution2(str) {
  function reverseStringRecursive(s) {
    if(s.length===1){
      return s;
    }
    let a = s.substr(s.length-1);
    s = s.substr(0,s.length-1);
    console.log(a,s);
    return a + reverseStringRecursive(s);
  }
  return reverseStringRecursive(str);
}

// console.log("문자열 뒤집기 ('hello'):", solution2("hello"));
// console.log("문자열 뒤집기 ('world'):", solution2("world"));


// =================================================================
// 문제 3: 각 자릿수의 합 구하기
// =================================================================
/*
문제 설명:
음이 아닌 정수 num의 각 자릿수의 합을 재귀적으로 구하는 함수를 작성하세요.

입출력 예시:
- 입력: 12345
- 출력: 15 (1 + 2 + 3 + 4 + 5)

- 입력: 987
- 출력: 24 (9 + 8 + 7)

*/
function solution3(num) {
  function sumDigitsRecursive(n) {
    if(n.length===1){
      return parseInt(n);
    }
    const a = n.substr(0,1);
    n = n.substr(1);
    return sumDigitsRecursive(a)+sumDigitsRecursive(n);
  }
  return sumDigitsRecursive(num+"");
}

// console.log("자릿수 합 (12345):", solution3(12345));
// console.log("자릿수 합 (987):", solution3(987));


// =================================================================
// 문제 4: 팩토리얼 구하기
// =================================================================
/*
문제 설명:
음이 아닌 정수 n의 팩토리얼(n!)을 재귀적으로 구하는 함수를 작성하세요.
팩토리얼은 1부터 n까지의 모든 양의 정수를 곱한 값입니다. (0! = 1)

입출력 예시:
- 입력: 5
- 출력: 120 (5 * 4 * 3 * 2 * 1)

- 입력: 0
- 출력: 1
*/
function solution4(n) {
  function calculateFactorial(num) {
    if(num===0||num===1){
      return 1;
    }
    return num * calculateFactorial(num-1);
  }
  return calculateFactorial(n);
}

// console.log("팩토리얼 (5):", solution4(5));
// console.log("팩토리얼 (0):", solution4(0));


// =================================================================
// 문제 5: 피보나치 수열의 n번째 항 구하기
// =================================================================
/*
문제 설명:
피보나치 수열의 n번째 항을 재귀적으로 구하는 함수를 작성하세요.
피보나치 수열은 첫째 및 둘째 항이 1이며, 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열입니다.
(F(0) = 0, F(1) = 1 이라고 가정하고 F(n) = F(n-1) + F(n-2) for n > 1)

입출력 예시:
- 입력: 6
- 출력: 8 (0, 1, 1, 2, 3, 5, 8)

- 입력: 10
- 출력: 55
*/
function solution5(n) {
  function getFibonacci(num) {
    if(num<=1){
      return num;
    }
    return getFibonacci(num-1)+getFibonacci(num-2);
  }
  return getFibonacci(n);
}

// console.log("피보나치 (6):", solution5(6));
// console.log("피보나치 (10):", solution5(10));


// =================================================================
// 문제 6: 배열의 합 구하기
// =================================================================
/*
문제 설명:
정수 배열 arr의 모든 요소의 합을 재귀적으로 구하는 함수를 작성하세요.

입출력 예시:
- 입력: [1, 2, 3, 4, 5]
- 출력: 15

- 입력: [10, -1, 5]
- 출력: 14
*/
function solution6(arr) {
  function sumArrayRecursive(array, index) {
    if(index===arr.length){
      return 0;
    }
    let cur = array[index];
    // console.log(cur);
    return cur + sumArrayRecursive(array,index+1);
  }
  return sumArrayRecursive(arr, 0);
}

// console.log("배열 합 ([1, 2, 3, 4, 5]):", solution6([1, 2, 3, 4, 5]));
// console.log("배열 합 ([10, -1, 5]):", solution6([10, -1, 5]));


// =================================================================
// 문제 7: 거듭제곱 구하기
// =================================================================
/*
문제 설명:
정수 base와 음이 아닌 정수 exponent가 주어졌을 때, `base`의 `exponent` 거듭제곱을 재귀적으로 구하는 함수를 작성하세요.
(base^exponent)

입출력 예시:
- 입력: base = 2, exponent = 10
- 출력: 1024

- 입력: base = 3, exponent = 5
- 출력: 243
*/
function solution7(base, exponent) {
  function calculatePower(b, exp) {
    if(exp===0){
      return 1;
    }
    if(exp===1){
      return b;
    }
    return b * calculatePower(b,exp-1);
  }
  return calculatePower(base, exponent);
}

// console.log("거듭제곱 (2^10):", solution7(2, 10));
// console.log("거듭제곱 (3^5):", solution7(3, 5));
// console.log("거듭제곱 (3^0):", solution7(3, 0));
