function expandImage(original) {
  const n = original.length;
  const result = Array(2 * n).fill().map(() => Array(2 * n).fill(0));
  
  // 90도 회전 함수
  function rotate90(matrix) {
    const size = matrix.length;
    const rotated = Array(size).fill().map(() => Array(size).fill(0));
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        rotated[j][size - 1 - i] = matrix[i][j];
      }
    }
    return rotated;
  }
  
  // 180도 회전 함수
  function rotate180(matrix) {
    return rotate90(rotate90(matrix));
  }
  
  // 270도 회전 함수
  function rotate270(matrix) {
    return rotate90(rotate180(matrix));
  }
  
  // 수평 뒤집기 함수
  function flipHorizontal(matrix) {
    return matrix.map(row => [...row].reverse());
  }
  
  // 각 변환된 버전들 생성
  const topLeft = original;                    // 원본
  const topRight = flipHorizontal(original);   // 수평 뒤집기
  const bottomLeft = rotate270(original);      // 270도 회전
  const bottomRight = rotate180(original);     // 180도 회전
  
  // 4개의 사분면을 2n×2n 결과에 배치
  const quadrants = [
    [topLeft, topRight],
    [bottomLeft, bottomRight]
  ];
  
  for (let qRow = 0; qRow < 2; qRow++) {
    for (let qCol = 0; qCol < 2; qCol++) {
      const quadrant = quadrants[qRow][qCol];
      const startRow = qRow * n;
      const startCol = qCol * n;
      
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          result[startRow + i][startCol + j] = quadrant[i][j];
        }
      }
    }
  }
  
  return result;
}

// 테스트
const testImage = [
  [207, 207, 207, 84],
  [207, 207, 84, 255],
  [207, 84, 84, 207],
  [84, 255, 207, 0]
];

console.log("원본 4×4 이미지:");
testImage.forEach(row => console.log(row));

console.log("\n확장된 8×8 이미지:");
const expanded = expandImage(testImage);
expanded.forEach(row => console.log(row));

console.log("\n기댓값과 비교:");
const expected = [
  [207, 207, 207, 84, 84, 207, 207, 207],
  [207, 207, 84, 255, 255, 84, 207, 207],
  [207, 84, 84, 207, 207, 84, 84, 207],
  [84, 255, 207, 0, 0, 207, 255, 84],
  [84, 255, 207, 0, 0, 207, 255, 84],
  [207, 84, 84, 207, 207, 84, 84, 207],
  [207, 207, 84, 255, 255, 84, 207, 207],
  [207, 207, 207, 84, 84, 207, 207, 207]
];

const isEqual = JSON.stringify(expanded) === JSON.stringify(expected);
console.log("결과가 기댓값과 일치하는가?", isEqual);

// 다른 크기로도 테스트 (2×2 → 4×4)
console.log("\n=== 2×2 → 4×4 테스트 ===");
const small = [
  [1, 2],
  [3, 4]
];

console.log("원본 2×2:");
small.forEach(row => console.log(row));

console.log("\n확장된 4×4:");
const smallExpanded = expandImage(small);
smallExpanded.forEach(row => console.log(row));