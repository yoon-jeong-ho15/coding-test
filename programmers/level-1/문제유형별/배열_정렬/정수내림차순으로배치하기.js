function solution(n) {
    var answer = 0;
    let arr = [];
    let str = n+"";

    for(let i=0;i<str.length;i++){
        let n = str[i];
        let inserted = false;
        for(let j=0;j<arr.length;j++){
            let m = arr[j];
            if(n>=m){
                arr.splice(j,0,n);
                // arr = [n,...arr];
                inserted = true;
                break;
            }
        }
        if(!inserted) arr.push(n);
    }
    answer = Number(arr.join(""));
    return answer;
}

console.log(solution(118372));

