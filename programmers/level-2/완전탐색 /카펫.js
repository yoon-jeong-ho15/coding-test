function solution(brown, yellow) {
    var answer = [];
    let height = [];
    let width = [];
    let total = brown + yellow;
    for(let i=3;i*i<=total;i++){
        if(total%i==0){
            height.push(i);
            width.push(total/i);
        }
    }
    // console.log(height,width);

    for(let i=0;i<height.length;i++){
        let h = height[i];
        let w = width[i];
        if((h-2)*(w-2)==yellow){
            answer.push(w,h);
        }

    }

    return answer;
}

console.log(solution(8,1));