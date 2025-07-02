function solution(clothes) {
    var answer = 1;
    let map = new Map();
    let result = [];
    for(let cloth of clothes){
        // console.log(cloth);
        let type = cloth[1];
        let name = cloth[0];
        if(map.has(type)){
            map.get(type).add(name);
        }else{
            let set = new Set();
            set.add(name);
            map.set(type, set);
        }
    }

    for(let [type,set] of map){
        result.push(set.size);
    }
    console.log("result",result);

    // for(let i=0;i<result.length;i++){
    //     for(let j=i+1;j<=result.length;j++){
    //         let arr = result.slice(i,j);
    //         let count = 1;
    //         console.log(arr);
    //         for(let k=0;k<arr.length;k++){
    //             count *= arr[k];
    //         }
    //         console.log("count",count);
    //         answer += count;
    //     }
    // }

    for(let i=0;i<result.length;i++){
        answer *= (result[i]+1);
    }

    return answer-1;
}

// 재귀함수 풀이
function solutionB(clothes){
    let answer=0;
    let map = new Map();
    let result = [];
    for(let cloth of clothes){
        // console.log(cloth);
        let type = cloth[1];
        let name = cloth[0];
        if(map.has(type)){
            map.get(type).add(name);
        }else{
            let set = new Set();
            set.add(name);
            map.set(type, set);
        }
    }

    for(let [type,set] of map){
        result.push(set.size);
    }

    let allSubsets = getAllSubsets(result);

    for(let subset of allSubsets) {
        let count = 1;
        for(let num of subset) {
            count *= num;
        }
        answer += count;
    }
    return answer;
}

//재귀
function getAllSubsets(arr) {
    let subsets = [];
    
    function backtrack(index, current) {
        if (index === arr.length) {
            if (current.length > 0) {  // 공집합 제외
                subsets.push([...current]);
            }
            return;
        }
        
        backtrack(index + 1, current);

        current.push(arr[index]);
        backtrack(index + 1, current);
        current.pop();
    }
    
    backtrack(0, []);
    return subsets;
}

// console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
// console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));
console.log(solution([["a",1],["b",1],["c",1],["a",2],["b",2],["a",3],["b",3],["a",4]]));