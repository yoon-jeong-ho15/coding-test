// =================================================================
// 문제 1: 이진 탐색 (Binary Search)
// =================================================================
/*
문제 설명:
**정렬된 정수 배열** `sortedArr`에서 `target` 값을 찾는 재귀적인 이진 탐색 함수를 작성하세요.
이진 탐색은 배열의 중간 요소를 확인하여 찾으려는 값이 그보다 큰지 작은지에 따라 
탐색 범위를 절반씩 줄여나가는 효율적인 탐색 알고리즘입니다.

힌트:
- 재귀 함수는 탐색 범위(시작 인덱스 `start`, 끝 인덱스 `end`)를 인자로 받아야 합니다.
- 중간 인덱스 `mid`를 계산하고 `sortedArr[mid]`와 `target`을 비교합니다.
- `target`이 더 작으면 왼쪽 절반(`start` ~ `mid-1`)을, 
더 크면 오른쪽 절반(`mid+1` ~ `end`)을 재귀적으로 탐색합니다.
- `start`가 `end`보다 커지면 값을 찾지 못한 것입니다. (기본 조건)

입출력 예시:
- 입력: arr = [1, 3, 5, 7, 9, 11, 13], target = 9
- 출력: 4 (인덱스)

- 입력: arr = [1, 3, 5, 7, 9, 11, 13], target = 6
- 출력: -1 (찾지 못함)
*/
function solution1(sortedArr, target) {
  // 재귀적으로 탐색을 수행할 내부 함수를 정의합니다.
  function binarySearchRecursive(start, end) {
    // 여기에 코드를 작성하세요.
    // console.log("count",++count);
    let mid = Math.floor((start+end)/2);
    // console.log("start",start,"end",end);
    // console.log("mid",mid,"=",sortedArr[mid]);

    if(start>end){
      return [-1,0];
    }

    if(sortedArr[mid]===target){
      return [mid,1];
    }

    if(sortedArr[mid]<target){
      const [index, height] = binarySearchRecursive(mid+1,end);
      return [index, height+1];
    }else{
      const [index, height] = binarySearchRecursive(start,mid-1);
      return [index, height+1];
    }
  }
  return binarySearchRecursive(0, sortedArr.length - 1,0);
}

// console.log("이진 탐색 ([1, 3, 5, 7, 9, 11, 13], 9):", solution1([1, 3, 5, 7, 9, 11, 13], 9));
// console.log("이진 탐색 ([1, 3, 5, 7, 9, 11, 13], 6):", solution1([1, 3, 5, 7, 9, 11, 13], 6));
// console.log("이진 탐색 ([1, 3, 5, 7, 9, 11, 13], 11):", solution1([1, 3, 5, 7, 9, 11, 13], 11));


// =================================================================
// 문제 2: 배열의 모든 조합 생성 (Power Set)
// =================================================================
/*
문제 설명:
주어진 배열 `arr`의 모든 가능한 부분집합(멱집합, Power Set)을 구하는 함수를 작성하세요.
예를 들어, `[1, 2]`의 부분집합은 `[]`, `[1]`, `[2]`, `[1, 2]` 입니다.

힌트:
- 재귀 함수는 현재까지 만들어진 부분집합 `currentSet`과 탐색할 원소의 인덱스 `index`를 인자로 받습니다.
- 각 원소에 대해 '포함하는 경우'와 '포함하지 않는 경우' 두 가지로 나누어 재귀 호출을 진행합니다.

입출력 예시:
- 입력: [1, 2, 3]
- 출력: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] (순서는 상관 없음)
*/
function solution2(arr) {
  const result = [];

  function findSubsets(index, currentSubset) {
    // 여기에 코드를 작성하세요.
    if(index==arr.length){
      result.push([...currentSubset]);
      return;
    }

    let n = arr[index];
    // console.log(index,n);
    currentSubset.push(n);
    // console.log(currentSubset);
    findSubsets(index+1,currentSubset);

    currentSubset.pop();
    // console.log(currentSubset);
    findSubsets(index+1,currentSubset);
  }

  findSubsets(0, []);
  return result;
}

// console.log("모든 조합 생성 ([1, 2, 3]):", solution2([1, 2, 3]));


// =================================================================
// 문제 3: 하노이의 탑
// =================================================================
/*
문제 설명:
세 개의 기둥('A', 'B', 'C')과 N개의 원반이 있습니다. 원반은 크기가 모두 다르며, 
처음에는 모든 원반이 'A' 기둥에 큰 것이 아래에 오도록 쌓여있습니다.
다음 규칙에 따라 모든 원반을 'A'에서 'C'로 옮기는 과정을 출력하는 함수를 작성하세요.
1. 한 번에 하나의 원반만 옮길 수 있습니다.
2. 큰 원반은 작은 원반 위에 놓을 수 없습니다.

힌트:
- N개의 원반을 A에서 C로 옮기려면:
  1. N-1개의 원반을 A에서 B로 옮긴다 (C를 보조 기둥으로 사용).
  2. 가장 큰 원반(N번째)을 A에서 C로 옮긴다.
  3. N-1개의 원반을 B에서 C로 옮긴다 (A를 보조 기둥으로 사용).

입출력 예시:
- 입력: 3
- 출력:
  1번 원반: A -> C
  2번 원반: A -> B
  1번 원반: C -> B
  3번 원반: A -> C
  1번 원반: B -> A
  2번 원반: B -> C
  1번 원반: A -> C
*/
function solution3(n) {
  const moves = [];

  function hanoi(num, from, to, aux) {
    // 여기에 코드를 작성하세요.
    if(num==1){
      moves.push(`${num}번 원반:${from}->${to}`);
      return;
    } 
    hanoi(num-1,from,aux,to);

    moves.push(`${num}번 원반:${from}->${to}`);
    hanoi(num-1,aux,to,from);

  }

  hanoi(n, 'A', 'C', 'B');
  return moves.join('\n');
}

// console.log("하노이의 탑 (3):\n" + solution3(4));



// =================================================================
// 문제 4: 모든 순열 생성 (Permutations)
// =================================================================
/*
문제 설명:
고유한 정수들로 이루어진 배열 `arr`이 주어졌을 때, 가능한 모든 순열을 반환하는 함수를 작성하세요.
순열은 부분집합(Power Set)과 달리, 원소의 순서가 중요하며 모든 원소를 사용해야 합니다.

힌트:
- 백트래킹을 사용합니다. 재귀 함수는 현재까지 만들어진 순열 `currentPermutation`과 
아직 사용하지 않은 숫자들의 목록 `remaining`을 인자로 받을 수 있습니다.
- 또는, `currentPermutation`과 사용 여부를 기록하는 `visited` 배열을 사용할 수도 있습니다.

입출력 예시:
- 입력: [1, 2, 3]
- 출력: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] (순서는 상관 없음)
*/
function solution4(arr) {
  const result = [];
  const visited = new Array(arr.length).fill(false);

  function findPermutations(currentPermutation) {
    // 여기에 코드를 작성하세요.
    if(currentPermutation.length==arr.length){
      result.push([...currentPermutation]);
      return;
    }
    console.log(currentPermutation, visited);
    for(let i=0;i<arr.length;i++){
      let isVisited = visited[i];
      if(!isVisited){
        currentPermutation.push(arr[i]);
        visited[i] = true;
        findPermutations(currentPermutation);
        visited[i]=false;
        currentPermutation.pop();
      }
    }
  }

  findPermutations([]);
  return result;
}

// console.log("모든 순열 생성 ([1, 2, 3]):", solution4([1, 2, 3]));


// =================================================================
// 문제 5: 올바른 괄호 생성
// =================================================================
/*
문제 설명:
정수 `n`이 주어졌을 때, `n`쌍의 괄호로 만들 수 있는 모든 형태의 "올바른" 괄호 조합을 생성하는 함수를 작성하세요.

힌트:
- 백트래킹을 사용합니다. 재귀 함수는 현재까지 만들어진 문자열 `currentStr`, 
열린 괄호의 수 `openCount`, 닫힌 괄호의 수 `closeCount`를 인자로 받습니다.
- 규칙 1: 열린 괄호는 `n`개까지만 추가할 수 있습니다.
- 규칙 2: 닫힌 괄호는 열린 괄호의 수보다 많을 수 없습니다.

입출력 예시:
- 입력: 3
- 출력: ["((()))", "(()())", "(())()", "()(())", "()()()"]

- 입력: 2
- 출력: ["(())", "()()"]
*/
function solution5(n) {
  const result = [];

  function generate(currentStr, openCount, closeCount) {
    // 여기에 코드를 작성하세요.
    if(closeCount===n){
      result.push(currentStr);
      return;
    }

    if(openCount<n){
      currentStr += "(";
      generate(currentStr,openCount+1,closeCount);
      currentStr = currentStr.substr(0,currentStr.length-1);
    }
    
    if(closeCount<openCount){
      currentStr += ")";
      generate(currentStr,openCount,closeCount+1);
      currentStr = currentStr.substr(0,currentStr.length-1);
    }
  }

  generate("", 0, 0);
  return result;
}

// console.log("올바른 괄호 생성 (3):", solution5(3));


// =================================================================
// 문제 6: 플러드 필 (Flood Fill)
// =================================================================
/*
문제 설명:
`m x n` 크기의 2D 배열 `screen`이 주어집니다. 각 셀은 색상을 나타내는 정수입니다.
시작 좌표 `(sr, sc)`와 새로운 색상 `newColor`가 주어졌을 때, 
시작 좌표와 연결된 모든 같은 색상의 영역을 `newColor`로 채우는 함수를 작성하세요.
"연결되었다"는 것은 상, 하, 좌, 우로 인접한 셀을 의미합니다.

힌트:
- 재귀 함수는 현재 좌표 `(r, c)`를 인자로 받습니다.
- 현재 좌표가 범위를 벗어나거나, 이미 다른 색으로 칠해져 있다면 재귀를 멈춥니다.
- 현재 좌표의 색을 `newColor`로 바꾼 뒤, 상, 하, 좌, 우 네 방향으로 재귀 호출을 진행합니다.
- 시작 색상을 저장해두고, 재귀 호출 시 시작 색상과 다른 셀은 무시해야 무한 루프를 피할 수 있습니다.

입출력 예시:
- 입력: screen = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
- 출력: [[2,2,2],[2,2,0],[2,0,1]]
*/
function solution6(screen, sr, sc, newColor) {
  const originalColor = screen[sr][sc];
  // 이미 같은 색이면 변경할 필요가 없습니다.
  if (originalColor === newColor) return screen;

  function fill(r, c) {
    // 여기에 코드를 작성하세요.
    if(r===screen.length || r<0){
      return;
    }  
    if(c===screen[0].length || c<0){
      return;
    }

    let cur = screen[r][c];
    if(originalColor!==cur){
      return;
    }
    
    screen[r][c] = newColor;

    fill(r+1,c);
    fill(r-1,c);
    fill(r,c+1);
    fill(r,c-1);
  }

  fill(sr, sc);
  return screen;
}

// const screen = [[1,1,1],[1,1,0],[1,0,1]];
// console.log("플러드 필:", solution6(screen, 1, 1, 2));


// =================================================================
// 문제 7: 병합 정렬 (Merge Sort)
// =================================================================
/*
문제 설명:
대표적인 분할 정복 알고리즘인 병합 정렬(Merge Sort)을 재귀적으로 구현하세요.

힌트:
- 분할(Divide): 배열을 절반으로 나눕니다. 이 과정은 배열의 크기가 1 이하가 
  될 때까지 재귀적으로 반복됩니다.
- 정복(Conquer): 나누어진 두 개의 부분 배열을 각각 재귀적으로 정렬합니다.
- 결합(Combine): 정렬된 두 개의 부분 배열을 하나의 정렬된 배열로 
  병합(merge)합니다.

입출력 예시:
- 입력: [38, 27, 43, 3, 9, 82, 10]
- 출력: [3, 9, 10, 27, 38, 43, 82]
*/
function solution7(arr) {
  // 여기에 코드를 작성하세요.
  
}

console.log("병합 정렬:", solution7([38, 27, 43, 3, 9, 82, 10]));


// =================================================================
// 문제 8: 중첩 배열 합산
// =================================================================
/*
문제 설명:
숫자와 다른 배열들이 중첩되어 있는 배열이 주어졌을 때, 모든 숫자의 합을 구하는 
재귀 함수를 작성하세요.

힌트:
- 배열의 각 요소를 순회합니다.
- 요소가 숫자이면, 합계에 더합니다.
- 요소가 배열이면, 그 배열을 인자로 하여 자기 자신을 재귀적으로 호출하고 
  그 결과를 합계에 더합니다.

입출력 예시:
- 입력: [1, 2, [3, 4, [5]]]
- 출력: 15

- 입력: [[1, 2], 3, [4, [5, 6]]]
- 출력: 21
*/

function solution8(arr) {
  // 여기에 코드를 작성하세요.

}

// console.log("중첩 배열 합산:", solution8([1, 2, [3, 4, [5]]]));
// console.log("중첩 배열 합산:", solution8([[1, 2], 3, [4, [5, 6]]]));
