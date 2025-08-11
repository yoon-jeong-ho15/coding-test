// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
    var answer = 0;
    while(section.length>0){
        answer++;
        const cur = section.pop();
        // console.log("cur",cur);
        while(section.length>0){ //코드 복붙하다가 여기 while문이 빠져버려서 자꾸 안됐던것.
            const next = section[section.length-1];
            // console.log("next",next);
            if(next>=cur-m+1){
                section.pop();
            }else{
                break;
            }
        }
    }
    return answer;
}

// function solution2(n, m, section) {
//     let answer = 0;
//     let i = 0;
    
//     while (i < section.length) {
//         answer++;
//         const start = section[i]; // 현재 칠해야 할 첫 구역
//         const end = start + m - 1; // 이 위치에서 롤러로 칠할 수 있는 최대 범위
        
//         // end보다 작거나 같은 모든 구역들을 건너뛰기 (한 번에 칠해짐)
//         while (i < section.length && section[i] <= end) {
//             i++;
//         }
//     }
    
//     return answer;
// }

console.log(solution(8,4,[2,3,6]));
// console.log(solution(5,4,[1,3]));
// console.log(solution(5,1,[1,2,3,4]));