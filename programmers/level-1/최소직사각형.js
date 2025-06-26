function solution(sizes) {
    var answer = 0;
    let wMax = 0;
    let hMax = 0;
    for (let i=0;i<sizes.length;i++){
        let card = sizes[i];
        let w = card[0]>card[1]? card[0]:card[1];
        let h = card[0]>card[1]? card[1]:card[0];
        if(w>wMax){
            wMax = w;
        }
        if(h>hMax){
            hMax = h;
        }
    }
    answer = wMax * hMax;
    return answer;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));