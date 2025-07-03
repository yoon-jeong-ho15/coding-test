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
    let answer = 0;
    let map = new Map();
    let result = new Set();
    for(let [name,type] of clothes){
        if(map.has(type)){
            map.get(type).push(name);
        }else{
            map.set(type,[name]);
        }
    }
    clothes = [...map.values()];
    // console.log(clothes);

    function backtrack(clothes,l, start=0){
        if(l==0){
            return [[]];
        }else{
            let temp = [];
            for(let i=start;i<clothes.length;i++){
                let cur = clothes[i];
                // console.log(cur);
                let arr = backtrack(clothes,l-1,i+1);
                // console.log(i,arr);
                for(let c of cur){
                    // console.log("c",c);
                    for(let a of arr){
                        // console.log("a",a);
                        let item = [c,...a]
                        // console.log("item",item);
                        temp.push(item);
                    }
                }
            }
            return temp;
        }
    }

    for(let l=1;l<=clothes.length;l++){
        let perms = backtrack(clothes,l);
        // console.log(perms);
        for(let perm of perms){
            let str = perm.join("+");
            result.add(str);
        }
    }
    console.log(result);

    return answer;
}

// console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
// console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));
// console.log(solution([["a",1],["b",1],["c",1],["a",2],["b",2],["a",3],["b",3],["a",4]]));
console.log(solutionB([["a",1],["b",1],["c",1],["d",2],["e",2],["f",3],["g",3],["h",4]]));