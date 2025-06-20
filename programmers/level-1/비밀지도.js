function solution(n, arr1, arr2) {
    var answer = [];
    for(let i=0;i<n;i++){
        let a = arr1[i];
        let b = arr2[i];
        let binA = "";
        let binB = "";
        let hash = "";

        for(let j=0;j<n;j++){
            let digitA = a % 2;
            binA = digitA + binA;
            a = Math.floor(a/2);

            let digitB = b % 2;
            binB = digitB + binB;
            b = Math.floor(b/2);
        }

        for(let k=0;k<binA.length;k++){
            if(binA[k]=="1" || binB[k]=="1"){
                hash += "#";
            }else{
                hash += " ";
            }
        }

        answer.push(hash);
    }
    return answer;
}

console.log(solution(5,[9,20,28,18,11],[30,1,21,17,28]));
