function solution2(n, m, rectangle) {
    var answer = [];
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

function solution(n, m, rectangle) {
    // 1. 2차원 배열로 그리드 생성 (훨씬 직관적)
    let grid = Array(m).fill().map(() => Array(n).fill(0));
    let answer = [];
    
    // 2. 사각형 리스트 생성
    let squares = [];
    for (let [size, count] of rectangle) {
        for (let i = 0; i < count; i++) {
            squares.push(size);
        }
    }
    
    squares.sort((a, b) => a - b);
    
    // 4. 각 사각형 배치
    while (squares.length > 0) {
        let size = squares.shift();
        let placed = false;
        
        // 모든 위치를 확인
        for (let row = 0; row <= m - size && !placed; row++) {
            for (let col = 0; col <= n - size && !placed; col++) {
                let flag = canPlace(grid, row, col, size)
                
                if (flag) {
                    placeSquare(grid, row, col, size);
                    answer.push([col, row, size]);
                    placed = true;
                }
            }
        }
    }
    
    return answer;
}

function canPlace(grid, row, col, size) {
    for (let r = row; r < row + size; r++) {
        for (let c = col; c < col + size; c++) {
            if (grid[r][c] !== 0) {
                return false;
            }
        }
    }
    return true;
}

function placeSquare(grid, row, col, size) {
    for (let r = row; r < row + size; r++) {
        for (let c = col; c < col + size; c++) {
            grid[r][c] = 1;
        }
    }
}

console.log(solution(7,8,[[2,2],[1,4],[3,2]]));