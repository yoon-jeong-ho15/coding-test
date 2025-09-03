function solution4(arr) {
  const result = [];

  // 배열의 두 요소를 스왑하는 헬퍼 함수
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  function findPermutations(index) {
    // 베이스 케이스: 인덱스가 배열의 끝에 도달하면, 현재 배열 상태가 하나의 순열임
    if (index === arr.length - 1) {
      result.push([...arr]); // 배열의 복사본을 결과에 추가
      return;
    }

    // 현재 인덱스(index)부터 배열의 끝까지 순회
    for (let i = index; i < arr.length; i++) {
      // 1. 선택 (Choose): i번째 요소를 현재 위치(index)로 가져옴
      swap(index, i);

      // 2. 탐색 (Explore): 다음 인덱스에 대해 재귀적으로 순열을 찾음
      findPermutations(index + 1);

      // 3. 선택 취소 (Unchoose): 배열을 원래 상태로 되돌려놓음 (백트래킹)
      swap(index, i);
    }
  }

  findPermutations(0);
  return result;
}

console.log(solution4_([1, 2, 3]));
