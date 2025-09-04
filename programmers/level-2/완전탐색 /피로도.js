function solution2(k, dungeons) {
    var answer = -1;
    // console.log(dungeons);
    dungeons.sort((a, b) => {
        let adiff = a[0] - a[1];
        let bdiff = b[0] - b[1];
        // console.log(a,b);
        // console.log(adiff,bdiff);
        if (adiff == bdiff) {
            if (b[0] == a[0]) {
                return b[1] - a[1];
            }
            return b[0] - a[0];
        }
        return bdiff - adiff;
    });
    // console.log(dungeons);
    let count = 0;

    let v = dungeons.length;
    for (let i = 0; i < v; i++) {
        while (dungeons.length > 0) {
            let [req, dec] = dungeons.shift();
            // console.log(req,dec);
            if (req > k) {
                dungeons.push([req, dec]);
                break;
            } else {
                k -= dec;
                count++;
            }
        }
    }

    // for(let i=0;i<dungeons.length;i++){
    //     let req = dungeons[i][0];
    //     let dec = dungeons[i][1];
    //     // console.log(req,dec);
    //     if(k>=req){
    //         if(k>=dec){
    //             k -= dec;
    //             count++;
    //         }else{
    //             continue;
    //         }
    //     }else{
    //         // console.log(req,"bigger");
    //         continue;
    //     }
    // }

    answer = count == 0 ? -1 : count;
    return answer;
}

function solution(k, dungeons) {
    let answer = 0;
    let visited = new Array(dungeons.length).fill(false);

    function backtrack(k, count) {
        if (count === dungeons.length) {
            answer = count;
            return;
        }

        for (let i = 0; i < dungeons.length; i++) {
            const [need, spend] = dungeons[i];
            if (!visited[i] && k >= need) {
                visited[i] = true;
                backtrack(k - spend, count + 1);
                visited[i] = false;
            }
        }

        answer = count > answer ? count : answer;
    }

    backtrack(k, 0);

    return answer;
}

function _solution(k, dungeons) {
    let answer = 0;
    const allIndices = Array.from({ length: dungeons.length }, (_, i) => i);

    function backtrack(currentK, visited, remainingIndices) {
        // 현재까지의 탐험 횟수 계산
        const count = dungeons.length - remainingIndices.length;
        answer = Math.max(answer, count);

        // 더 이상 탐험할 던전이 없으면 종료
        if (remainingIndices.length === 0) return;

        // 각 남은 던전에 대해 재귀 호출
        remainingIndices.forEach((index, i) => {
            const [need, spend] = dungeons[index];
            if (currentK >= need) {
                // 현재 던전을 제외한 새로운 배열 생성
                const newRemaining = remainingIndices.filter(
                    (_, idx) => idx !== i,
                );
                backtrack(currentK - spend, [...visited, index], newRemaining);
            }
        });
    }

    backtrack(k, [], allIndices);

    return answer;
}

console.log(
    solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
    ]),
);
