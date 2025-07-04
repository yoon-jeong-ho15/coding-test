function solution(n, m, rectangle) {
    var answer = [];  // [[]] -> [] 수정
    let grid = new Map();
    let squares = [];
    for(let i=1;i<=m;i++){
        let x = new Array(n).fill(0);
        grid.set(i,x);
    }
    // console.log(grid);
    for(let i=0;i<rectangle.length;i++){
        let [size,num] = rectangle[i];
        for(let j=0;j<num;j++){
            squares.push(size);
        }
    }
    squares.sort((a,b)=>a-b);
    // console.log(squares);

    while(squares.length>0){
        let sqr = squares.shift();
        // console.log(sqr);
        let inserted = false;

        for(let j=1;j<=grid.size && !inserted;j++){
            let line = grid.get(j);
            for(let k=0;k<=n-sqr && !inserted;k++){
                let flag = true;
                for(let r=j;r<j+sqr && flag;r++){
                    if(r>m){
                        flag = false;
                        break;
                    }
                    let line = grid.get(r);
                    for(let c=k;c<k+sqr;c++){  
                        if(line[c]===1){
                            flag = false;
                            break;
                        }
                    }
                }
                if(flag){
                    for(let r=j;r<j+sqr;r++){ 
                        let target = grid.get(r);
                        for(let c=k;c<k+sqr;c++){ 
                            target[c] = 1;
                        }
                    }
                    answer.push([k,j-1,sqr]);  
                    inserted = true;
                }
            }
        }
    }
    // console.log(grid);
    return answer;
}

console.log(solution(7,8,[[2,2],[1,4],[3,2]]));