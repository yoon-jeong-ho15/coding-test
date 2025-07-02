function solution(participant, completion) {
    var answer = '';
    let map = new Map();

    for(let runner of participant){
        map.set(runner, (map.get(runner)||0)+1);
    }
    console.log(map);

    for(let finished of completion){
        map.set(finished, map.get(finished)-1);
    }
    console.log(map);

    for(let [key,val] of map.entries()){
        if(val==1) return key;
    }
}

console.log(solution(["a","b","c","b"],["a","b","c"]));