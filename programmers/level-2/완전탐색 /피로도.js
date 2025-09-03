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

console.log(
    solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
    ]),
);
